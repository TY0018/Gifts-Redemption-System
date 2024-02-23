import express from 'express';
import redeemController from '../controllers/redeemController';
import searchController from '../controllers/searchController';
import verifyController from '../controllers/verifyController';

const router = express.Router();

router.route('/')
    .get(function(req, res, next) {
        res.json({message: 'Welcome to the Gift Redemption API!'});
    });

router.route('/search/:staffId')
    // to look up team name
    .get(searchController);

router.route('/verify/:teamName')
    //to get the redemption history
    .get(verifyController);

router.route('/redeem/:teamName')
     //to update a redemption
     .put(redeemController)

export default router;