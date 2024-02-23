//Purpose: Handles the logic for searching corresponding team name of staff id.
import * as db from '../db';

export default async function searchService (staff: string) {
    const searchData = await db.query('SELECT team_name FROM staff_mapping WHERE staff_pass_id = $1', [staff]);
    
    let teamName = null;

    if (searchData.rowCount != null && searchData.rowCount > 0){
        teamName = searchData.rows[0].team_name
    }
    
    return teamName;
}
