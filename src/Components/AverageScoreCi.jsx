import React, {useEffect, useState} from 'react'
import '../App.css';
import Scores from '../Module/Scores';


const AverageScoreCi = ({user}) => {    
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setClicked] = useState(false);
    const [showScore, setScore] = useState(false)
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const showScoreSummary = () => {
        setScore(true);
    }
    const closeSummary = () => {
        setScore(false);
    }
    const[persona, setPersona] = useState([]);
    
        useEffect(() => {
            fetch(`http://localhost:3003/api/persona/${user}`)
            .then(res => res.json())
            .then(data => setPersona(data))
            .catch(err => console.error(err));
        },[user]);
        console.log("score user: ", user);

    return (
        <div
            style={{
                width:"60px",
                height:"60px",
                boxShadow: "0px 0px 4px 10px rgba(163, 64, 193, 0.15)",
                background:isHovered ? "rgba(163,64,193,0.7)": "rgba(163, 64, 193, 0.5)",
                borderRadius:"50px",
                justifyContent: "center",
                display: "flex",
                cursor:"pointer",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={showScoreSummary}
        >
        <div   
            id="average-score"
            style={{
                flexDirection: "column",
                gap:10,
                justifyContent: "center",
                display: "flex",
                margin:"0px 0px 0px 0px",
                fontSize: 16, 
                fontWeight:"600", 
                color:"#15192D"
            }} onClick={closeSummary}
        > {persona.average_score} </div>
        {isHovered ? <Scores handleClose={closeSummary}/> : null}
       
      </div>
       

    );
};


export default AverageScoreCi;