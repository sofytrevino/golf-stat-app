import React from 'react'
import '../App.css';
import AverageScore from '../Components/AverageScore';
import LowestRound from '../Components/LowestRound';
import Handicap from '../Components/Handicap';
import AverageScoreCi from '../Components/AverageScoreCi';


const overviewStyle = {
    height: "150px",
    width: "393px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
}

const overviewSection = {
    height:"95px",
    width: "370px",
    justifyContent:"center",
    padding:"10px 10px 10px 10px"
}

const Overview = () => {
    return(
        <div style={overviewStyle}>
            <div style={overviewSection}>
                <div id="title" style={{display:"flex", jusifityContent:"start", fontWeight:"700", fontSize: 16, fontFamily:"Literata", color:"#15192D"}}>
                    Overview
                </div>

                <div id="first-row" style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between", margin:"10px 0px 0px 0px"}}>
                    <AverageScore/>
                    <LowestRound/>
                    <Handicap/>
                    <AverageScoreCi/>
                </div>
                    

            </div>
                
        </div>
    

    );

};

export default Overview;