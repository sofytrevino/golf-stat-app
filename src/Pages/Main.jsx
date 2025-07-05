import React from 'react';
import '../App.css';
import Overview from '../Sections/Overview';
import RecentRounds from '../Sections/RecentRounds';
import GreenStats from '../Sections/GreenStats';
import FairwayStats from '../Sections/FairwayStats';
import Navigation from '../Sections/Navigation';
import Green from './Green';
import Fairway from './Fairway';
import Test from '../Sections/Test';
import Overview2 from '../Sections/Overview2';



const layoutStyle = {
    margin: "0px 0px 0px 0px",
    display: "flex",
    overflow: "hidden",
}

const mainContentStyle = {
    height:"852px",
    width:"393px",
    display:"flex",
    background:" #FFFFFF",
    border: "#15192D",
};



const Main = () => {

 
    return(
        <div style={layoutStyle}>
            <div style={mainContentStyle}>
                <div>
                    <div id="first-section" style={{margin:"0px 0px 20px 0px"}}>
                        <Overview2/>
                    </div>
                    <div id="second-section" style={{margin:"20px 0px 20px 0px"}}>
                        <RecentRounds/>
                    </div>
                    <div id="third-section" style={{margin:"20px 0px 20px 0px"}}>
                        <GreenStats/>
                    </div>
                    <div id="fourth-section" style={{margin:"20px 0px 20px 0px"}}>
                        <FairwayStats/>
                    </div>
                </div>
            </div>
        </div>  
    );

};

export default Main;