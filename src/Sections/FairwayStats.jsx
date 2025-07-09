import React from 'react'
import '../App.css';
import Fairwayhit from '../Components/Fairwayhit';
import TopYardage from '../Components/TopYardage';
import SGShot from '../Components/SGShot';

const FairwayStatsStyle = {
    height: "150px",
    width: "393px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
}

const FairwayStatsSection = {
    height:"95px",
    width: "340px",
    justifyContent:"center",
    padding:"10px 10px 10px 10px"
}

const FairwayStats = ({user}) => {
    return(
        <div style={FairwayStatsStyle}>
            <div style={FairwayStatsSection}>
                <div id="title" style={{display:"flex", jusifityContent:"start", fontWeight:"700", fontSize: 16, fontFamily:"Literata", color:"#15192D"}}>
                    Fairway Stats
                </div>

                <div id="first-row" style={{width:"320px", height:"80px", display:"flex", flexDirection:"row", justifyContent:"space-between", margin:"10px 25px 10px 25px"}}>
                    <Fairwayhit user={user}/>
                    <TopYardage user={user}/>
                    <SGShot user={user}/>
                    
                </div>
                    

            </div>
                
        </div>
    

    );

};

export default FairwayStats;