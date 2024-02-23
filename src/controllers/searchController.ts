//Purpose: Handles the logic for sending search response.
import { Request, Response } from 'express';
import * as db from '../db';
import searchService from '../services/searchService';

const searchController = async (req: Request, res:Response) => {  
    const staff = req.params.staffId
    if (staff){
        try {
            const teamName = await searchService(staff);
            
            //returns the number of rows affected by the query
            if (teamName){
                res.status(200).json({message: 'Staff found.', teamName: teamName})
            } else{
                res.status(400).json({message: 'Staff not found or staff has no team.', teamName: null})
            }
        } catch (error) {
            res.status(400).json({message:"Error performing search."})
        }
    }
    else {
        return res.status(400).json({message: "Please enter staff id."})
    }

}

export default searchController