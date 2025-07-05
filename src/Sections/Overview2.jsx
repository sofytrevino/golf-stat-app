import React from 'react'
import '../App.css';
import SGCi from '../Components/SGCi';
import LowestCi from '../Components/LowestCi';
import AverageScoreCi from '../Components/AverageScoreCi';
import HandicapCi from '../Components/HandicapCi';


const overview2Style = {
    height: "200px",
    width: "393px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
}

const overview2Section = {
    height:"120px",
    width: "370px",
    justifyContent:"center",
    padding:"10px 10px 10px 10px"
}

const Overview2 = () => {
    return(
        <div style={overview2Style}>
            <div style={overview2Section}>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div id="first-row" style={{display:"flex", flexDirection:"row", gap:"70px", fontWeight:"700", fontSize: 16, fontFamily:"Literata", color:"#15192D", margin:"10px 0px 0px 0px"}}>
                        <div> Your Average Score</div>
                        <AverageScoreCi/>
                    </div>

                    <div id="second-row" style={{width:"100%", display:"flex",justifyContent:"center", flexDirection:"row", gap:"50px", margin:"30px 10px 0px 10px"}}>
                        <HandicapCi/>
                        <LowestCi/>
                        <SGCi/>
                    </div>
                </div>
                
                    

            </div>
                
        </div>
    

    );

};

export default Overview2;