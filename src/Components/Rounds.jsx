import React from 'react'
import '../App.css';

const Rounds = () => {    
    return (
        <div
            style={{
                width:"375px",
                height:"90px",
                background:"rgba(117, 164, 185, 0.9)",
                borderRadius: 10,
                outline: "1px #CACCCD solid",
                display:"flex",
            }}
        >
        <div id="course"
            style={{
                width:"100%",
                display: "flex",
                flexDirection:"column",
                margin:"10px 20px 10px 20px",
                textAlign:"left",
            }}
        >
          <div
            style={{
                fontSize: 18,
                fontFamily: "Avenir Next",
                fontWeight: "300",
                color:"#15192D",
                textAlign:"left",

            }}
            >
            Buffalo Creek Country Club  
           </div>  
            <div style={{fontSize:12, color:"#15192D", display:"flex", flexDirection:"row", justifyContent:"space-between", gap:2, margin:"3px 80px 2px 0px"}}>
                <div>7078 yds</div>
                <div>Pay 71</div>
                <div>74.9 Rating</div>
            </div>
            <div style={{fontSize:12, color:"#15192D", display:"flex", flexDirection:"row", justifyContent:"space-between", gap:3, margin:"0px 40px 0px 0px"}}>
                <div>Score: 76</div>
                <div>Putts: 31</div>
                <div>GIR: 11/18</div>
                <div>FIR: 10/14</div>
            </div>
        
        </div>
        </div>
            
            
    );
};


export default Rounds;