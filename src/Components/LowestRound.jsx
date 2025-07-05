import React from 'react'
import '../App.css';

const LowestRound = () => {    
    return (
        <div
            style={{
                width:"85px",
                height:"90px",
                background:" #FFFFFF",
                boxShadow: "0px, 2px, 12px, rgba(0,0,0,0.15)",
                borderRadius: 10,
                outline: "1px #CACCCD solid",
                justifyContent: "center",
                display: "flex",
            }}
        >
        <div   
            id="lowest-score"
            style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap:10,
                margin:"20px 5px 20px 5px",
            }}
        >
          <div
            style={{
                fontSize: 12,
                fontFamily: "Avenir Next",
                fontWeight: "200",
                wordwrap:"break-word",
                color:"#15192D"

            }}
            >
             Lowest Round  
            </div>
            <div style={{width:"100%", fontSize: 16, fontStyle:"bold", fontWeight:"600", color:"#15192D"}}>
                67 
            </div>
         </div>
      </div>

    );
};


export default LowestRound;