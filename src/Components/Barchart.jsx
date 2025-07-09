import React, {useState, useEffect} from 'react'
import '../App.css';



const Barchart = ({all = false, round}) => {  
    const value = all;
    const[par, setPar] = useState([]);
        
        useEffect(() => {
            if(value){
                fetch(`http://localhost:3003/api/holes/parss/sofia`)
                .then(res => res.json())
                .then(data => setPar(data))
                .catch(err => console.error(err));
            }
        },[]);

        useEffect(() => {
            fetch(`http://localhost:3003/api/holes/pars/${round}`)
            .then(res => res.json())
            .then(data => setPar(data))
            .catch(err => console.error(err));
        },[]);
     
    const scoreMap = par.reduce((acc, row) => {
        acc[row.par] = row.avg_score;
        return acc;
    }, {});
    console.log("par 3 average: ", scoreMap[3]);

    const data = [scoreMap[3], scoreMap[4], scoreMap[5]];
    const bench = [3.0, 4.0, 5.0];
    const good = "rgb(92, 203, 115)";
    const bad = "rgb(213, 115, 115)";
    const maxValue = Math.max(...data);

    return(
        <div style={{width:"180px", padding:"10px", margin:"5px 5px 5px 5px"}}>
            <div style={{
                display:"flex",
                alignItems:"flex-end",
                gap:"10px",
                width:"100%",
                height:"130px",
                borderLeft:"2px solid #333",
                borderBottom: "2px solid #333",
                padding:"10px",
            }}>

                {data.map((value, idx) => {
                    const barHeight = (value / maxValue) * 100;
                    const isGood = bench[idx] > value;

                    return(
                        <div key={idx} style={{
                            width:"40px",
                            height:`${barHeight}px`,
                            borderRadius:2,
                            backgroundColor:isGood ? good:bad,
                            color: "white",
                            display:"flex",
                            alignItems:"flex-end",
                            justifyContent:"center",
                            fontSize:"12px",
                        }}>
                      {value}
                      </div>  
                     );
                })}
             </div>
        </div>
    );

    
    
};


export default Barchart;