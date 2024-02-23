//Purpose: Handles the logic for updating redemption timestamp.
import * as db from '../db';

export default async function redeemService (team: string) {
    const updateData = await db.query('UPDATE redemption_data SET redeemed_at = EXTRACT(EPOCH FROM CURRENT_TIMESTAMP) * 1000 WHERE team_name = $1', [team]);
    
    let result = false;

    if (updateData.rowCount != null && updateData.rowCount > 0){
        result = true;
    }
    return result;
}
