import React from 'react'
import '../App.css';
import Rounds from '../Components/Rounds';


const recentStyle = {
    height: "250px",
    width: "393px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
}

const recentSection = {
    height:"210px",
    width: "370px",
    justifyContent:"center",
    padding:"10px 10px 10px 10px"
}

const RecentRounds = () => {
    return(
        <div style={recentStyle}>
            <div style={recentSection}>
                <div id="title" style={{display:"flex", jusifityContent:"start", fontWeight:"700", fontSize: 16, fontFamily:"Literata", color:"#15192D"}}>
                    Recent Rounds
                </div>

                <div id="first-row" style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", gap:10, margin:"10px 0px 0px 0px"}}>
                    <Rounds/>
                    <Rounds/>
                </div>
                    

            </div>
                
        </div>
    

    );

};

export default RecentRounds;