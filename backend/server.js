const express = require('express');
const cors = require('cors');
const {Pool} = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
   host: 'localhost',
   user: 'postgres',
   password: 'sofia',
   database: 'golfstat',
   port: 5432,
});

app.get('/api/courses', async (req, res) => {
    try{
        const result = await pool.query("SELECT * From courses")
        res.json(result.rows);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});
app.get('/api/persona/:name', async (req, res) => {
    const {name} = req.params;
    try{
        const result = await pool.query(
            `SELECT * FROM Persona WHERE name ILIKE $1`, [name])
        res.json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});
app.get('/api/golfstat/putts/:name', async (req, res) => {
    const {name} = req.params;
    try{
        const result = await pool.query(
            `SELECT ROUND(AVG(total_putts),1) AS average_putts 
            FROM GolfSTAT WHERE name ILIKE $1`, 
            [name]
        );
        res.json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});
app.get('/api/golfstat/gir/:name', async (req, res) => {
    const {name} = req.params;
    try{
        const result = await pool.query(
            `SELECT ROUND(AVG(total_gir),1) AS average_gir 
            FROM GolfSTAT WHERE name ILIKE $1`, 
            [name]
        );
        res.json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});
app.get('/api/golfstat/putt3/:name', async (req, res) => {
    const {name} = req.params;
    try{
        const result = await pool.query(
            `SELECT ROUND(AVG(Putts_3_more),1) AS average_3 
            FROM GolfSTAT 
            WHERE name ILIKE $1`, 
            [name]
        );
        res.json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});

app.get('/api/golfstat/fairway/:name', async (req, res) => {
    const {name} = req.params;
    try{
        const result = await pool.query(
            `SELECT ROUND(AVG(total_fir),1) AS average_fairway 
            FROM GolfSTAT 
            WHERE name ILIKE $1`, 
            [name]
        );
        res.json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});

app.get('/api/holes/topyardage/:round', async (req, res) => {
    const {round} = req.params;
    try{
        const result = await pool.query(
            `SELECT approach_yardage, COUNT(*) AS count 
            FROM holes WHERE round_number = $1 
            GROUP BY approach_yardage 
            ORDER BY count DESC LIMIT 1`, 
            [round]
        );
        res.json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});


app.get('/api/golfstat/bunker/:name', async (req, res) => {
    const {name} = req.params;
    try{
        const result = await pool.query(
            `SELECT ROUND(AVG(total_bunker),0)
            AS total
            FROM GolfSTAT
            WHERE name ILIKE $1`, 
            [name]
        );
        res.json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});
app.get('/api/golfstat/ob/:name', async (req, res) => {
    const {name} = req.params;
    try{
        const result = await pool.query(
            `SELECT ROUND(AVG(total_ob),0) 
            AS total
            FROM GolfSTAT
            WHERE name ILIKE $1`, 
            [name]
        );

        res.json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});
app.get('/api/golfstat/hazard/:name', async (req, res) => {
    const {name} = req.params;
    try{
        const result = await pool.query(
            `SELECT ROUND(AVG(total_hazard),0) 
            AS total
            FROM GolfSTAT
            WHERE name ILIKE $1`, 
            [name]
        );
        
        res.json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});

app.get('/api/holes/yardages/:round/:yardage', async (req, res) => {
    const {round, yardage} = req.params;
    try{
        const result = await pool.query(
            `SELECT 
                ROUND(360.0 * COUNT(
                    CASE WHEN approach_yardage BETWEEN $2-10 AND $2+5 THEN 1 END)
                / COUNT(approach_yardage), 0)
                AS yard_count
                FROM holes 
                WHERE round_number = $1`, 
            [round, yardage]
        );
        res.json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});

app.get('/api/holes/pars/:round/', async (req, res) => {
    const {round} = req.params;
    try{
        const result = await pool.query(
            `SELECT par,
                ROUND(AVG(score), 1)
                AS avg_score
                FROM holes
                WHERE round_number = $1
                AND par IN (3,4,5)
                GROUP BY par
                ORDER BY par`,
            [round]
        );
        res.json(result.rows);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});

app.get('/api/holes/parss/:name/', async (req, res) => {
    const {name} = req.params;
    try{
        const result = await pool.query(
            `SELECT par,
                ROUND(AVG(score), 1)
                AS avg_score
                FROM holes
                WHERE round_number IN (
                    SELECT round_number FROM GolfSTAT WHERE name ILIKE ($1):: text)
                AND par IN (3,4,5)
                GROUP BY par
                ORDER BY par`,
            [name]
        );
        res.json(result.rows);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});

app.get('/api/holes/updown/:round', async (req, res) => {
    const {round} = req.params;
    try{
        const result = await pool.query(
            `SELECT 
                ROUND(100.0 * COUNT(CASE WHEN up_down = 'yes' THEN 1 END) 
                / COUNT(up_down), 0) AS up_percent 
                FROM holes 
                WHERE round_number = $1`, [round]
        );
        res.json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});
app.get('/api/holes/driver/:round', async (req, res) => {
    const {round} = req.params;
    try{
        const result = await pool.query(
            `SELECT 
                ROUND(180.0 * COUNT(CASE WHEN driver_l = 'yes' THEN 1 END) 
                / COUNT(CASE WHEN driver_l IN ('yes', 'no') THEN 1 END), 0) AS driver_left, 
                ROUND(180.0 * COUNT(CASE WHEN driver_r = 'yes' THEN 1 END) 
                / COUNT(CASE WHEN driver_r IN ('yes', 'no') THEN 1 END), 0) AS driver_right
            FROM holes 
            WHERE round_number = $1`, 
            [round]
        );

        res.json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});

app.get('/api/holes/drivers/:name', async (req, res) => {
    const {name} = req.params;
    try{
        const result = await pool.query(
            `SELECT 
                ROUND(180.0 * COUNT(CASE WHEN driver_l = 'yes' THEN 1 END) 
                / NULLIF(COUNT(CASE WHEN driver_l IN ('yes', 'no') THEN 1 END), 0), 0)
                    AS driver_left, 
                ROUND(180.0 * COUNT(CASE WHEN driver_r = 'yes' THEN 1 END) 
                / NULLIF(COUNT(CASE WHEN driver_r IN ('yes', 'no') THEN 1 END), 0), 0) 
                    AS driver_right
            FROM holes h
            JOIN GolfSTAT g ON h.round_number = g.round_number
            WHERE g.name ILIKE ($1)::text`, 
            [`%${name}%`]
          
        );
        res.json(result.rows[0]);
    } catch(err){
        console.error(err.message);
        res.status(500).send('Database error');
    }
});

app.get('/api/holes/approach/:min/:max/:round', async (req, res) => {
    const {min, max, round} = req.params;
    try{
        const result = await pool.query(
            'SELECT ROUND(AVG(proximity),1) AS avg_proximity FROM holes WHERE approach_yardage BETWEEN $1 AND $2 AND round_number = $3', [min, max, round]
        );
        res.json(result.rows[0]);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});

app.get('/api/holes', async (req, res) => {
    try{
        const result = await pool.query(
            "SELECT * From Holes")
        res.json(result.rows);
    } catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});

app.listen(3003, () => {
    console.log('server is running on port 3003');
})
