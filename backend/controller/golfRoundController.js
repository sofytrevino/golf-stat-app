const pool = require('../db');



const golfRound = async (req, res) => {
    const {
        round_number, name, course_name, date, total_score
     } = req.body;
    try{
        const result = await pool.query(
            `INSERT INTO GolfSTAT 
            (round_number, name, course_name, date, total_score) 
            VALUES ($1, $2, $3, $4, $5) 
            RETURNING *`,
            [round_number, name, course_name, date, total_score]
        );
        res.status(201).json(result.rows[0]);
    }catch (err) {
        console.error('Error inserting golf stat: ', err);
        res.status(500).json({ error: 'Database golf stat error'});
    
    };
}

module.exports = { golfRound };