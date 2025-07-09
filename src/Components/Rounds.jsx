import React, {useEffect, useState} from 'react'
import RoundView from '../Module/RoundView';
import '../App.css';

const Rounds = ({number = 1, colors}) => {    
    const round = number;

    const [isClicked, setClick] = useState(false);
    const [view, setView] = useState(false);

    const showView = () =>{
        setView(true);
    }
    const closeView = () => {
        console.log("close called");
        setView(false);
        
    }

    const[stat, setStat ] = useState([]);
    const[course, setCourse] = useState([]);
                
        useEffect(() => {
            fetch(`http://localhost:3003/api/golfstat/recent/sofia/${round}`)
            .then(res => res.json())
            .then(data => setStat(data))
            .catch(err => console.error(err));
        },[round]);
        const courseName = stat.course_name;
        useEffect(() => {
            fetch(`http://localhost:3003/api/courses/${courseName}`)
            .then(res => res.json())
            .then(data => setCourse(data))
            .catch(err => console.error(err));
        },[courseName]);
        


    return (
        <div
            style={{
                width:"375px",
                height:"90px",
                background:colors,
                borderRadius: 10,
                outline: "1px #CACCCD solid",
                display:"flex",
                cursor:"pointer",
            }} onClick={showView}
        > 
        {view && <RoundView round={round} onClose={closeView}/>}
        <div id="course"
            style={{
                width:"100%",
                display: "flex",
                flexDirection:"column",
                margin:"10px 20px 10px 20px",
                textAlign:"left",
            }}
        >
          <div
            style={{
                fontSize: 18,
                fontFamily: "Avenir Next",
                fontWeight: "300",
                color:"#15192D",
                textAlign:"left",

            }}
            >
            Buffalo Creek Country Club  
           </div>  
            <div style={{fontSize:12, color:"#15192D", display:"flex", flexDirection:"row", justifyContent:"space-between", gap:2, margin:"3px 80px 2px 0px"}}>
                <div>{course.yardage} yds</div>
                <div>Par {course.par}</div>
                <div>{course.rating} Rating</div>
            </div>
            <div style={{fontSize:12, color:"#15192D", display:"flex", flexDirection:"row", justifyContent:"space-between", gap:3, margin:"0px 40px 0px 0px"}}>
                <div>Score: {stat.total_score}</div>
                <div>Putts: {stat.total_putts}</div>
                <div>GIR: {stat.total_gir}/18</div>
                <div>FIR: {stat.total_fir}/14</div>
            </div>
        
        </div>
        </div>
            
            
    );
};


export default Rounds;