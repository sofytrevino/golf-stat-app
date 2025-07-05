import React from 'react'
import '../App.css';
import AverageScore from '../Components/AverageScore';
import CircleYar from '../Components/CircleYar';


const yardagesStyle = {
    height: "170px",
    width: "393px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
}

const yardagesSection = {
    height:"150px",
    width: "370px",
    justifyContent:"center",
    padding:"10px 10px 10px 10px"
}

const Yardages = () => {
    return(
        <div style={yardagesStyle}>
            <div style={yardagesSection}>
                <div id="title" style={{display:"flex", jusifityContent:"start", fontWeight:"700", fontSize: 16, fontFamily:"Literata", color:"#15192D"}}>
                    Top yardages to pin
                </div>

                <div id="first-row" style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between", margin:"10px 0px 0px 0px"}}>
                    <CircleYar value={140} colorOp={"darkturquoise"}/>
                    <CircleYar value={120} colorOp={"forestgreen"}/>
                    <CircleYar value={90} colorOp={"orangered"}/>
                </div>
                    

            </div>
                
        </div>
    

    );

};

export default Yardages;