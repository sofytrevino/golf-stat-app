import React from 'react'
import '../App.css';
import AveragePutt from '../Components/AveragePutt';
import AvGir from '../Components/AvGir';
import MorePutts from '../Components/MorePutts';

const greenStatsStyle = {
    height: "150px",
    width: "393px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
}

const greenStatsSection = {
    height:"95px",
    width: "340px",
    justifyContent:"center",
    padding:"10px 10px 10px 10px"
}

const GreenStats = ({user}) => {
    return(
        <div style={greenStatsStyle}>
            <div style={greenStatsSection}>
                <div id="title" style={{display:"flex", jusifityContent:"start", fontWeight:"700", fontSize: 16, fontFamily:"Literata", color:"#15192D"}}>
                    Green Stats
                </div>

                <div id="first-row" style={{width:"320px", height:"80px", display:"flex", flexDirection:"row", justifyContent:"space-between", margin:"10px 25px 5px 25px"}}>
                    <AveragePutt user={user}/>
                    <AvGir user={user}/>
                    <MorePutts user={user}/>
                </div>
                    

            </div>
                
        </div>
    

    );

};

export default GreenStats;