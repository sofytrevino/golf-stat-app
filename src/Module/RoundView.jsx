import React, {useState} from 'react'
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

const RoundView = () => {    

    return (
        <div style={{
            height:"852px",
            width:"393px",
            background:"rgba(255, 255, 255, 0.9)",
            outline: "1px #CACCCD solid",
            justifyContent: "center", 
            alignItems:"center",
            }}
            >
            <div style={{
                width:"300px",
                height:"40px",
                fontSize: 20,
                fontFamily: "Avenir Next",
                fontWeight: "500",
                display:"flex",
                justifyContent:"center",
                textAlign:"center",
                color:"#15192D",
                margin:"0px 40px 0px 40px",
                }} 
                >Round Number
            </div>
            <div style={{
                width:"300px",
                height:"40px",
                display:"flex",
                justifyContent:"center",
                margin:"5px 40px 0px 40px",
                fontSize: 13,
                color:"#15192D",
                fontWeight:"300",
                textAlign:"center",
            }}>Course: Buffalo Creek Country Club </div>
            <div style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"center",
                gap:60,
                padding: 10,
                margin:"0px 15px 0px 15px",
            }}>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    textAlign:"left",
                    gap:1,
                }}>
                    <div style={textStyle}>Score: 72</div>
                    <div style={textStyle}>Putts: 32</div>
                    <div style={textStyle}>Pars: 12</div>
                    <div style={textStyle}>Birdies: 3</div>
                    <div style={textStyle}>Bogeys: 4</div>
                    <div style={textStyle}>Doubles: 0</div>
                </div>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    textAlign:"left",
                    gap:1,
                }}>
                    <div style={textStyle}>GIR: 13/18</div>
                    <div style={textStyle}>FIR:9/14</div>
                    <div style={textStyle}>Up & down: 50%</div>
                    <div style={textStyle}>Hazard: 2</div>
                    <div style={textStyle}>OB: 0</div>
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
                    <Driving/>
                </div>
                <div style={{margin:"10px 0px 0px 0px"}}>
                    <Chart/>
                </div>
            </div>

    );
};


export default RoundView;