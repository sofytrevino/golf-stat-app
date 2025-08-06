import React, {useState, useEffect} from 'react'
import '../App.css';

const UpDown = ({user}) => {  
    
    const[average, setAverage] = useState([]);
                                        
        useEffect(() => {
            fetch(`http://localhost:3003/api/holes/updown/${user}`)
            .then(res => res.json())
            .then(data => setAverage(data.up_percent))
            .catch(err => console.error(err));
        },[user]);

    return (
        <div
            style={{
                width:"85px",
                height:"85px",
                background:" rgba(160, 181, 42, 0.7)",
                boxShadow: "0px, 2px, 12px, rgba(160,181,42,0.15)",
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