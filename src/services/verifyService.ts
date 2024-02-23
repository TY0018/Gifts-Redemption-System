//Purpose: Handles the logic for verifying team redemption.
import * as db from '../db';

export default async function verifyService (team: string) {
    const verifyData = await db.query('SELECT redeemed_at FROM redemption_data WHERE team_name = $1',[team]);

    let redeemedStatus = null;

    //returns the number of rows affected by the query
    if (verifyData.rowCount != null && verifyData.rows.length > 0){
        if (verifyData.rows[0].redeemed_at != null){
            redeemedStatus = true;
        }
        else{
            redeemedStatus = false;
        }
    } 

    return redeemedStatus;
}
