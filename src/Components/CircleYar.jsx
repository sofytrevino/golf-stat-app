import React, {useState, useEffect} from 'react'
import '../App.css';
import TriangleCircle from './TriangleCircle';

const CircleYar = ({value, colorOp}) => { 

    const[average, setAverage] = useState([]);
                                
        useEffect(() => {
            fetch(`http://localhost:3003/api/holes/yardages/1/${value}/`)
            .then(res => res.json())
            .then(data => setAverage(data))
            .catch(err => console.error(err));
        },[value]);
        console.log("yardage count: ", average.yard_count)

    return (
        <div
            style={{
                width:"110px",
                height:"110px",
                background:"rgb(255, 255, 255)",
                borderRadius: 10,
                outline: "1px #CACCCD solid",
                justifyContent: "center",
                alignItems:"center",
                display: "flex",
                position:"abosolute",
            }}
        >
        <div style={{justifyConent:"center", alignItems:"center", display:"flex", position:"absolute"}}>
            <TriangleCircle degrees={average.yard_count} rotation={0} radius={45} color={colorOp}/>
        </div>
        
        
        <div id="circle2" style={{width:"60px", height:"60px", borderRadius:"50px", background:"rgb(255, 255, 255)", outline:"1px #000000 solid", justifyContent:"center", display:"flex", alignItems:"center", position:"abosolute", zIndex:1,}}>
            <div style={{width:"40px", height:"40px", fontWeight:"500", fontSize:13, wordwrap:"break-word", color:"#15192D", position:"abosolute", alignText:"center", justifyContent:"center"}}>
                {value} yds
            </div>
        </div>
            

         </div>

    );
};


export default CircleYar;