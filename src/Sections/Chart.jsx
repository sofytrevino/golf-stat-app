import React from 'react'
import '../App.css';
import Barchart from '../Components/Barchart';


const chartStyle = {
    height: "260px",
    width: "393px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
}

const chartSection = {
    height:"210px",
    width: "370px",
    justifyContent:"center",
    padding:"10px 10px 10px 10px"
}

const Chart = ({all = false}) => {
    const value = all;
    return(
        <div style={chartStyle}>
            <div style={chartSection}>
                <div id="title" style={{display:"flex", jusifityContent:"start", fontWeight:"700", fontSize: 16, fontFamily:"Literata", color:"#15192D"}}>
                    Averages
                </div>

                <div id="first-row" style={{width:"100%", display:"flex", justifyContent:"center"}}>
                    <Barchart all={value}/>
                </div>
                <div id="second-row" style={{width:"100%", display:"flex", justifyContent:"center", gap:"18px"}}>
                    <div style={{fontSize:14, color:"#15192D", fontFamily:"Literata"}}>Par 3's </div>
                     <div style={{fontSize:14, color:"#15192D", fontFamily:"Literata"}}>Par 4's </div>
                    <div style={{fontSize:14, color:"#15192D", fontFamily:"Literata"}}>Par 5's </div>
                </div>
                    

            </div>
                
        </div>
    

    );

};

export default Chart;