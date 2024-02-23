// Purpose: Entry point for the server
import express from 'express';
const bodyParser = require('body-parser')
import router from './routes';
import importCSVData from './utils/loadCsvData';
import main from './view/main';

const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const PORT = 3000;

async function onStart(){
    await importCSVData("staff_mapping", "data/staff-id-to-team-mapping-long.csv");
    await importCSVData("redemption_data", "data/redemption-data.csv");

    await main();

}

app.listen(PORT, onStart);
app.use('/api', router);

export default app;