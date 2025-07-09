import React from 'react'
import '../App.css';

const SGPutt = ({user}) => {    
    return (
        <div
            style={{
                width:"85px",
                height:"85px",
                background:" #FFFFFF",
                boxShadow: "0px, 2px, 12px, rgba(0,0,0,0.15)",
                borderRadius: 10,
                outline: "1px #CACCCD solid",
                justifyContent: "center",
                display: "flex",
            }}
        >
        <div   
            id="strokes-gained-putt"
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
                fontWeight: "400",
                wordwrap:"break-word",
                color:"#15192D"

            }}
            >
            Strokes Gained  
            </div>
            <div style={{width:"100%", fontSize: 16, fontWeight:"600", color:"#15192D"}}>
            -2.0
            </div>
         </div>
      </div>

    );
};


export default SGPutt;