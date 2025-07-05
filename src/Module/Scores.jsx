import React, {useState} from 'react'
import '../App.css';
import ScoreChart from '../Components/ScoreChart';

const slices = [
    {par:"birdie", count:30},
    {par:"par", count:140},
    {par:"bogey", count:20},
    {par:"double", count:8},
    {par:"other", count:2},
];

const modalOverStyle = {
    position:"absolute",
    top:0,
    left:40,
    height:"900px",
    width:"393px",
    backgroundColor:"rgba(244, 244, 244, 0.7)",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    zIndex: 1000,
};

const textStyle = {
    dispaly:"flex", 
    wordwrap:"break-word",
    fontWeight:"300",
    fontSize: 14,
    width:"100px",
    height:"70px"
}

const Scores = ({handleClose}) => {    

    return (
        <div style={modalOverStyle} onClick={handleClose}>
            <div
                style={{
                width:"300px",
                height:"300px",
                background:"rgba(255, 255, 255, 0.9)",
                boxShadow: "0px, 2px, 12px, rgba(0,0,0,0.15)",
                borderRadius: 10,
                padding:10,
                outline: "1px #CACCCD solid",
                justifyContent: "center",
                display: "flex",
                flexDirection:"column",
                gap:20,
                }} 
                onClick ={(e) => e.stopPropagation()}
                
            >
                <div
                style={{
                fontSize: 20,
                fontFamily: "Avenir Next",
                fontWeight: "500",
                wordwrap:"break-word",
                color:"#15192D",
                }} 
                >Scoring Summary
                </div>

                <div 
                    style={{
                    display:"flex",
                    flexDirection:"row",
                    gap:30,
                    justifyContent:"center",
                    margin:"15px 5px 5px 5px",
                    }}>
                    <div style={textStyle}>
                        <div style={{width:"70px",
                            height:"20px",
                            alignText:"left",
                        }}>Birdies: 30, </div>
                        <div style={{width:"70px",
                            height:"20px",
                            alignText:"left",
                        }}>Par: 140, </div>
                        <div style={{width:"70px",
                            height:"20px",
                            alignText:"left",
                        }}>Bogey: 20,</div>
                        <div style={{width:"70px",
                            height:"20px",
                            alignText:"left",
                        }}>Double: 8,</div>
                        <div style={{width:"70px",
                            height:"20px",
                            alignText:"left",
                        }}>Other: 2</div>
                    </div>
                    <div>
                        <ScoreChart slices={slices} total={200}/>
                    </div>
    
                </div>
            </div>
        </div>
    

    );
};


export default Scores;