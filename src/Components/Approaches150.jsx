import React, {useState, useEffect} from 'react'
import '../App.css';

const Approaches150 = ({user}) => {    

    const[average, setAverage] = useState([]);
                                
        useEffect(() => {
            fetch(`http://localhost:3003/api/holes/approach/150/175/${user}`)
            .then(res => res.json())
            .then(data => setAverage(data.avg_proximity))
            .catch(err => console.error(err));
        },[user]);


    return (
        <div
            style={{
                width:"150px",
                height:"75px",
                background:" #FFFFFF",
                boxShadow: "0px, 2px, 12px, rgba(0,0,0,0.15)",
                borderRadius: 10,
                outline: "1px #CACCCD solid",
                justifyContent: "center",
                display: "flex",
            }}
        >
        <div   
            id="approach"
            style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap:1,
                margin:"23px 5px 20px 5px",
            }}
        >
          <div
            style={{
                fontSize: 16,
                fontFamily: "Inria Sans",
                fontWeight: "400",
                wordwrap:"break-word",
                color:"#D6CF41"

            }}
            >
             From 150-175 yds
            </div>
            <div style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"center", gap:20}}>

                <div style={{fontSize:12, color:"#15192D", display:"flex", flexDirection:"column", justifyContent:"center", gap:3, margin:"5px, 0px, 5px, 0px"}}>
                    <div>Faiway</div>
                    <div style={{fontWeight:"600"}}>{average}'</div>
                </div>
                <div style={{fontSize:12, color:"#15192D", display:"flex", flexDirection:"column", justifyContent:"center", gap:3, margin:"5px 0px 5px 0px"}}>
                    <div>Rough</div>
                    <div style={{fontWeight:"600"}}>41'5"</div>
                </div>
            </div>
            

         </div>
      </div>

    );
};


export default Approaches150;