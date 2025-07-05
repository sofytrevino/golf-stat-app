import React from 'react'
import '../App.css';
import AverageScore from '../Components/AverageScore';
import Approach from '../Sections/Approach';
import Putting from '../Sections/Putting';
import AroundGreen from '../Sections/AroundGreen';


const layoutStyle = {
    margin: "0px 0px 0px 0px",
    display: "flex",
    overflow: "hidden"
}

const greenContentStyle = {
    height:"852px",
    width:"393px",
    display:"flex",
    background:" #FFFFFF",
    border: "#15192D"
};


const Green = () => {
    return(
        <div style={layoutStyle}>
            <div style={greenContentStyle}>
                <div style={{ width:"100px", height: "100px"}}>
                    <div id="first-section" style={{ margin:"0px 0px 20px 0px", justifyContent:"center"}}>
                        <Putting/>
                    </div>
                    <div id="second-section" style={{margin:"20px 0px 20px 0px"}}>
                        <Approach/>
                    </div>
                    <div id="fourth-section" style={{margin:"20px 0px 20px 0px"}}>
                        <AroundGreen/>
                    </div>
                    
                
                </div>
            </div>
        </div>
    );

};

export default Green;