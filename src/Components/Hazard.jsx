import React, {useState, useEffect} from 'react'
import '../App.css';

const Hazard = ({user}) => { 
    
     const[count, setCount] = useState([]);
                
         useEffect(() => {
            fetch(`http://localhost:3003/api/golfstat/hazard/${user}`)
            .then(res => res.json())
            .then(data => setCount(data.total))
            .catch(err => console.error(err));
         },[user]);

    return (
        <div
            style={{
                width:"85px",
                height:"85px",
                background:" rgba(163,64,193,0.7)",
                boxShadow: "0px, 2px, 12px, rgba(163,64,193,0.15)",
                borderRadius: 10,
                outline: "1px #CACCCD solid",
                justifyContent: "center",
                display: "flex",
            }}
        >
        <div   
            id="hazard-count"
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
            Hazard Count
            </div>
            <div style={{width:"100%", fontSize: 16, fontWeight:"600", color:"#15192D"}}>
                {count}
            </div>
         </div>
      </div>

    );
};


export default Hazard;