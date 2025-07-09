import React from 'react'
import '../App.css';
import Fairwayhit from '../Components/Fairwayhit';
import Bunker from '../Components/Bunker';
import Hazard from '../Components/Hazard';
import Ob from '../Components/Ob';


const averageStyle = {
    height: "150px",
    width: "393px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
}

const averageSection = {
    height:"95px",
    width: "370px",
    justifyContent:"center",
    padding:"10px 10px 10px 10px"
}

const AveragesRound = ({user}) => {
    return(
        <div style={averageStyle}>
            <div style={averageSection}>
                <div id="title" style={{display:"flex", jusifityContent:"start", fontWeight:"700", fontSize: 16, fontFamily:"Literata", color:"#15192D"}}>
                    Averages per Round
                </div>

                <div id="first-row" style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between", margin:"10px 0px 0px 0px"}}>
                    <Fairwayhit  user={user}/>
                    <Bunker  user={user}/>
                    <Hazard  user={user}/>
                    <Ob  user={user}/>
                </div>
                    

            </div>
                
        </div>
    

    );

};

export default AveragesRound;