import React, {useState, useEffect} from 'react'
import '../App.css';
import AverageScore from '../Components/AverageScore';
import LowestRound from '../Components/LowestRound';
import Handicap from '../Components/Handicap';
import TriangleCircle from '../Components/TriangleCircle';
import PieCircle from '../Components/PieCircle';

const drivingStyle = {
    height: "150px",
    width: "393px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
}

const drivingSection = {
    height:"95px",
    width: "370px",
    justifyContent:"center",
    padding:"10px 10px 10px 10px"
}

const Driving = ({all = false}) => {
    const value = all;
    const[average, setAverage] = useState([]);

        useEffect(() => {
            if(value){
                fetch('http://localhost:3003/api/holes/drivers/sofia')
                .then(res => res.json())
                .then(data => setAverage(data))
                .catch(err => console.error(err));
            }
            
        }, []);
                                
        useEffect(() => {
            fetch('http://localhost:3003/api/holes/driver/1')
            .then(res => res.json())
            .then(data => setAverage(data))
            .catch(err => console.error(err));
        },[]);
        const driverL = parseInt(average.driver_left,10);
        const leftPer = Math.round((driverL*100) / 180);
        const driverR = parseInt(average.driver_right,10); 
        const rightPer = Math.round((driverR*100) / 180);      
        const driverM = 180 - (driverL + driverR);
      
        console.log("driver left, ",  driverL);

    const slices = [
        {value:driverL, color:'orange'},
        {value:driverM, color:'skyblue'},
        {value:driverR, color:'tomato'},
    ];

    return(
        <div style={drivingStyle}>
            <div style={drivingSection}>
                <div id="title" style={{display:"flex", jusifityContent:"start", fontWeight:"700", fontSize: 16, fontFamily:"Literata", color:"#15192D"}}>
                    Driving Accuracy
                </div>

                <div id="diagram" style={{width:"350px", height:"150px", display:'flex', justifyContent:'center', gap:'10px', margin:"20px 20px 5px 20px"}}>
                    <div style={{display:'flex', fontWeight:"300", fontSize:14, fontFamily:"Literata", color:"#15192D"}}>Left {leftPer}%</div>
                    <PieCircle slices={slices} radius={70}/>
                    <div style={{display:'flex', fontWeight:"300", fontSize:14, fontFamily:"Literata", color:"#15192D"}}>Right {rightPer}%</div>
                </div>
                    

            </div>
                
        </div>
    

    );

};

export default Driving;