import React, {useEffect, useState} from 'react'
import '../App.css';
import PieCircle from '../Components/PieCircle';
import Driving from '../Sections/Driving';
import Chart from '../Sections/Chart';


const modalOverStyle = {
    position:"absolute",
    top:0,
    left:40,
    height:"900px",
    width:"393px",
    backgroundColor:"rgba(244, 244, 244, 0.7)",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    zIndex: 1000,
};

const textStyle = {
    dispaly:"flex", 
    fontWeight:"100",
    fontSize: 12,
    width:"100%",
    height:"20px",
    color:" #000000",
}

const drivingStyle = {
    height: "150px",
    width: "393px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
    margin:"10px 0px 0px 0px",
}

const drivingSection = {
    height:"95px",
    width: "370px",
    justifyContent:"center",
    padding:"10px 10px 10px 10px"
}
const slices = [
    {value:40, color:'orange', hover:'green',},
    {value:120, color:'skyblue', hover:'green'},
    {value:20, color:'tomato', hover:'green'},
];

const RoundView = ({round, onClose}) => {    

    const[info, setInfo] = useState([]);
    const[course, setCourse] = useState([]);
            
        useEffect(() => {
            fetch(`http://localhost:3003/api/golfstat/${round}`)
            .then(res => res.json())
            .then(data => setInfo(data))
            .catch(err => console.error(err));
        },[]);
        const courseName = info.course_name;
        useEffect(() => {
            fetch(`http://localhost:3003/api/courses/${courseName}`)
            .then(res => res.json())
            .then(data => setCourse(data))
            .catch(err => console.error(err));
        },[courseName]);

    return (
        
        <div style={{
            position:"absolute",
            top:0,
            zIndex:1000,
            height:"852px",
            width:"393px",
            background:"rgba(255, 255, 255, 0.9)",
            outline: "1px #CACCCD solid",
            justifyContent: "center", 
            }}
            >
            <div onClick = {(e) => e.stopPropagation()}
                style={{
                width:"393px", 
                height:"50px",
                display:'flex',
                justifyContent:"flex-end",
                }}>
                <button id="close"  
                    onClick={onClose}
                    style={{fontSize:12,
                        padding:"1px",
                        display:"flex",
                        justifyContent:"center",
                        height:"20px",
                        width:"23px",
                        margin:"5px 5px 185px 5px",
                        cursor:'pointer'
                     }} > x </button>
            </div>
            <div style={{
                width:"393x",
                height:"40px",
                fontSize: 20,
                fontFamily: "Avenir Next",
                fontWeight: "500",
                display:"flex",
                justifyContent:"center",
                textAlign:"center",
                color:"#15192D",
                margin:"5px 40px 0px 40px",
                }} 
                >{course.course_name} #{round}
            </div>
            <div style={{
                width:"300px",
                height:"40px",
                display:"flex",
                justifyContent:"center",
                margin:"5px 40px 0px 40px",
                fontSize: 12,
                color:"#15192D",
                fontWeight:"300",
                textAlign:"center",
            }}>STATS</div>
            <div style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"center",
                gap:60,
                padding:"0px 15px 0px 15px",
                margin:"0px 15px 30px 15px",
            }}>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    textAlign:"left",
                    gap:1,
                }}>
                    <div style={textStyle}>Score: {info.total_score}</div>
                    <div style={textStyle}>Putts: {info.total_putts}</div>
                    <div style={textStyle}>Pars: n/a</div>
                    <div style={textStyle}>Birdies: n/a</div>
                    <div style={textStyle}>Bogeys: n/a</div>
                    <div style={textStyle}>Doubles: n/a</div>
                </div>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    textAlign:"left",
                    gap:1,
                }}>
                    <div style={textStyle}>GIR: {info.total_gir}/18</div>
                    <div style={textStyle}>FIR: {info.total_fir}/14</div>
                    <div style={textStyle}>Up & down: {info.total_up_down}</div>
                    <div style={textStyle}>Hazard: {info.total_hazard}</div>
                    <div style={textStyle}>OB: {info.total_ob}</div>
                </div>
            </div>
                <div style={{margin:"10px 0px 0px",
                    width:"100%",
                    height:"180px",
                    fontSize: 15,
                    fontWeight:"400",
                    color:" #000000",
                    display:"flex",
                    justifyContent:"center",
                    alignText:"center",

                }}>
                    ScoreCard
                </div>
                <div style={{marigin:"10px 0px 0px 0px"}}>
                    <Driving all={false} round={round}/>
                </div>
                <div style={{margin:"10px 0px 0px 0px"}}>
                    <Chart all={false} round={round}/>
                </div>
            </div>

    );
};


export default RoundView;