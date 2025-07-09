import React, {useState, useEffect} from 'react'
import '../App.css';
import Rounds from '../Components/Rounds';


const recentStyle = {
    height: "250px",
    width: "393px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
}

const recentSection = {
    height:"210px",
    width: "370px",
    justifyContent:"center",
    padding:"10px 10px 10px 10px"
}

const RecentRounds = ({user}) => {
    const[info, setInfo] = useState([]);
                    
        useEffect(() => {
            fetch(`http://localhost:3003/api/golfstat/rounds/${user}`)
            .then(res => res.json())
            .then(data => setInfo(data))
            .catch(err => console.error(err));
        },[user]);
        const round1 = info.length > 0 ? info[0].round_number : '';
        const round2 = info.length > 1 ? info[1].round_number : '';
      
    return(
        <div style={recentStyle}>
            <div style={recentSection}>
                <div id="title" style={{display:"flex", jusifityContent:"start", fontWeight:"700", fontSize: 16, fontFamily:"Literata", color:"#15192D"}}>
                    Recent Rounds
                </div>

                <div id="first-row" style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", gap:10, margin:"10px 0px 0px 0px"}}>
                    <Rounds number={round1} colors="rgba(117, 164, 185, 0.9)" user={user}/>
                    <Rounds number={round2} colors="rgba(117, 185, 138, 0.9)" user={user}/>
                </div>
                    

            </div>
                
        </div>
    

    );

};

export default RecentRounds;