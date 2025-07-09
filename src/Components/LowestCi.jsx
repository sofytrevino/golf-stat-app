import React, {useState, useEffect} from 'react'
import '../App.css';



const LowestCi = ({user}) => {    

    const [isHovered, setIsHovered] = useState(false);
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3003/api/golfstat/lowest/${user}`)
        .then(res => res.json())
        .then(data => setInfo(data))
        .catch(err => console.error(err));
    },[user]);
    

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div 
            style={{
                width:"80px",
                height:"100px",
                display:"flex",
                justifyContent:"center",
                flexDirection:"column",
                gap:"10px",
            }}> 
        <div
            style={{
                width:"60px",
                height:"60px",
                boxShadow: "0px 0px 4px 10px rgba(160, 181, 42, 0.15)",
                background:isHovered ? "rgba(160, 181, 42, 0.7)": "rgba(160, 181, 42, 0.5)",
                borderRadius:"50px",
                justifyContent: "center",
                display: "flex",
                cursor:"pointer",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
        <div   
            id="average-score"
            style={{
                flexDirection: "column",
                gap:10,
                justifyContent: "center",
                display: "flex",
                margin:"0px 0px 0px 0px",
            }}
        >
            <div style={{width:"100%", fontSize: 16, fontWeight:"600", color:"#15192D"}}>
                {info.lowest}
            </div>
         </div>
      </div>
      <div style={{
        width:"100%",
        height:"30px",
        fontFamily:"Lato",
        fontSize: 12,
        fontWeight:"300",
        textAlign:"left",
        color:" #000000",
      }}>Lowest Round</div>
      </div>


    );
};


export default LowestCi;