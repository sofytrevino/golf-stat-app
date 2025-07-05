import React, {useState, useEffect} from 'react'
import '../App.css';

const UpDown = () => {  
    
    const[average, setAverage] = useState([]);
                                        
        useEffect(() => {
            fetch('http://localhost:3003/api/holes/updown/1')
            .then(res => res.json())
            .then(data => setAverage(data.up_percent))
            .catch(err => console.error(err));
        },[]);

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
            id="up-down"
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
            Up and Down
            </div>
            <div style={{width:"100%", fontSize: 16, fontWeight:"600", color:"#15192D"}}>
                {average}%
            </div>
         </div>
      </div>

    );
};


export default UpDown;