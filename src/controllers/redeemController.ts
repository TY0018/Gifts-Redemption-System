//Purpose: Handle logic to handle result of redemption update
import { Request, Response } from 'express';
import redeemService from '../services/redeemService';

const redeemController = async (req: Request, res:Response) => {  
    const team = req.params.teamName
    if (team){
        try {
            const redeemed = await redeemService(team);
            
            if (redeemed === true){
                res.status(200).json({message: "Redemption data updated."})
            } else{
                res.status(400).json({message: 'Team not found or redempion data not updated.'})
            }
        } catch (error) {
            res.status(400).json({message: "Error performing redemption."})
        }
    }
    else {
        return res.status(400).json({message: "No team name provided. Please provide a team name."})
    }

    
}

export default redeemController