import React from 'react'
import '../App.css';
import greenClip from '../greenClip.jpg';
import Approaches100 from '../Components/Approaches100';
import Approaches150 from '../Components/Approaches150';
import Approaches200 from '../Components/Approaches200';

const approachStyle = {
    height: "330px",
    width: "393px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
}

const approachSection = {
    height:"280px",
    width: "370px",
    display:"flex",
    justifyContent:"row",
    gap:45,
    padding:"20px 10px 10px 10px"
}

const Approach = ({user}) => {
    return(
        <div style={approachStyle}>
            <div style={approachSection}>
                <div id="approach-green" style={{display:"flex", flexDirection:"column", gap:50}}>
                    <div style={{fontWeight:"700", fontSize:16, fontFamily:"Literata", display:"flex", justifyContent:"flex-start", color:"#15192D"}}>
                        Approach
                    </div>
                    <div id="first-row" style={{display:"flex", flexDirection:"column", justifyContent:"end", margin:"0px 0px 0px 10px"}}>
                        <img src={greenClip} width="150" height="150"/>
                    </div>
                </div>

                <div style={{display:"flex", flexDirection:"column", gap:12, margin:"10px 0px 10px 0px"}}>
                    <Approaches200  user={user}/>
                    <Approaches150  user={user}/>
                    <Approaches100  user={user}/>
                </div>

                    

            </div>
                
        </div>
    

    );

};

export default Approach;