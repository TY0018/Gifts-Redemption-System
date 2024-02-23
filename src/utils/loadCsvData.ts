import * as fs from 'fs';
import { from as copyFrom } from 'pg-copy-streams';
import * as db from '../db';
import { PoolClient } from 'pg';

async function importCSVData(tableName: string, csvFilePath: string) {
    const client = await db.getClient();

    try {
        // Check if the table has non-null values in any column
        const hasLoaded = await checkTableForRows(client, tableName);

        if (!hasLoaded) {
            console.log("Loading data into table " + tableName + "...");
            const stream = client.query(copyFrom(`COPY ${tableName} FROM STDIN DELIMITER ',' CSV HEADER`));
            const fileStream = fs.createReadStream(csvFilePath);

            fileStream.on('error', (error) => {
                console.error(`Error reading CSV file: ${error.message}`);
                client.release();
            });

            stream.on('error', (error) => {
                console.error(`Error copying data to PostgreSQL: ${error.message}`);
                client.release();
            });

            stream.on('end', () => {
                console.log(`Data imported into table ${tableName} successfully.`);
                client.release();
            });

            fileStream.pipe(stream);
            console.log("Finished loading data into table.");
        } else {
            console.log(`Table ${tableName} already loaded.`);
            client.release();
        }
    } catch (error) {
        console.error(`Error importing CSV data: ${error}`);
        client.release();
    }
}

// Function to check if the table has more than one row
async function checkTableForRows(client: PoolClient, tableName: string): Promise<boolean> {
  const result = await client.query(`SELECT COUNT(*) FROM ${tableName}`);
  const rowCount = parseInt(result.rows[0].count, 10); // Convert count to integer

  return rowCount > 1;
}

export default importCSVData;
