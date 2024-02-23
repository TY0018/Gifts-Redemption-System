// Purpose: Handles the logic for processing result for verification.
import { Request, Response } from 'express';
import verifyService from '../services/verifyService';


const verifyController = async (req: Request, res:Response) => {  
    const team = req.params.teamName
    if (team){
        try {
            const redeemedStatus = await verifyService(team);
            
            //returns the number of rows affected by the query
            if (redeemedStatus === true){
                
                res.status(200).json({message: "Team already redeemed their gift.", redeemed: true})
            }
            else if (redeemedStatus === false){
                res.status(200).json({message: "Team has not redeemed their gift.", redeemed: false})
            }
            
            else {
                res.status(400).json({message: 'Team not found.'})
            }
        } catch (error) {
            res.status(400).json({message: "Error performing verification."})
        }
    }
    else {
        return res.status(400).json({message: "No team name provided. Please provide a team name."})
    }   
}

export default verifyController