import React from 'react'
import '../App.css';
import AveragePutt from '../Components/AveragePutt';
import MorePutts from '../Components/MorePutts';
import SGPutt from '../Components/SGPutt';


const puttStyle = {
    height: "150px",
    width: "393px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
}

const puttSection = {
    height:"95px",
    width: "370px",
    justifyContent:"center",
    padding:"10px 10px 10px 10px"
}

const Putting = () => {
    return(
        <div style={puttStyle}>
            <div style={puttSection}>
                <div id="title" style={{display:"flex", jusifityContent:"start", fontWeight:"700", fontSize: 16, fontFamily:"Literata", color:"#15192D"}}>
                    Putting
                </div>

                <div id="first-row" style={{width:"300px", justifyContent:"center", margin:"10px 30px 0px 30px"}}>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap:5}}>
                        <AveragePutt/>
                        <MorePutts/>
                        <SGPutt/>
                    </div>
                </div>

            </div>
                
        </div>
    

    );

};

export default Putting;