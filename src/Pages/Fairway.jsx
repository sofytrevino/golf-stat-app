import React from 'react'
import '../App.css';
import AveragesRound from '../Sections/AveragesRound';
import Driving from '../Sections/Driving';
import Yardages from '../Sections/Yardages';
import Chart from '../Sections/Chart';



const layoutStyle = {
    margin: "0px 0px 0px 0px",
    display: "flex",
    overflow: "hidden",
}

const fairwayContentStyle = {
    height:"852px",
    width:"393px",
    display:"flex",
    background:" #FFFFFF",
    border: "#15192D"
};


const Fairway = () => {
    return(
        <div style={layoutStyle}>
            <div style={fairwayContentStyle}>
                <div style={{ width:"100px", height: "100px"}}>
                    <div id="first-section" style={{ margin:"0px 0px 20px 0px", justifyContent:"center"}}>
                        <Driving all={true}/>
                    </div>
                    <div id="second-section" style={{margin:"20px 0px 20px 0px"}}>
                        <AveragesRound/>
                    </div>
                    <div id="fourth-section" style={{margin:"20px 0px 20px 0px"}}>
                        <Yardages/>
                    </div>
                    <div id="fourth-section" style={{margin:"20px 0px 20px 0px"}}>
                        <Chart all={true}/>
                    </div>
                    
                
                </div>
            </div>
        </div>
    );

};

export default Fairway;