const pool = require('../db');

const insertRound = async (req, res) => {
    const {
        round, holeNum, fir, gir, score, par, putts, driver_l, driver_m, driver_r,
        up_down, proximity, approach, ob, bunker, hazard
     } = req.body;
    try{
        const result = await pool.query(
            `INSERT INTO HOLES 
            (round_number, hole_number, fir, gir, score, par, putts, 
            driver_l, driver_m, driver_r, up_down, proximity,
            approach_yardage, ob, bunker, hazard) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
            $11, $12, $13, $14, $15, $16) 
            RETURNING *`,
            [round, holeNum, fir, gir, score, par, putts, driver_l, driver_m, driver_r,
                up_down, proximity, approach, ob, bunker, hazard]
        );
        res.status(201).json(result.rows[0]);
    }catch (err) {
        console.error('Error inserting round: ', err);
        res.status(500).json({ error: 'Database insert round error'});
    
    };
}

module.exports = { insertRound };