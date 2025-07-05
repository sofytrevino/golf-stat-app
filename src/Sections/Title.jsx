import React, {useState} from 'react'
import '../App.css';


const menuBar = {
    width:"500px",
    height:"25px",
    display:"flex",
    alignItems:"center",
    margin: "20px 15px 5px 15px",
    flexDisplay:"row",
    justifyContent:"center",
    gap:10,
    fontFamily:"Lato", 
    fontSize:"8",
    alignText:"center",
    cursor:"pointer",
}

const titleStyle = {
    height: "100px",
    width: "392px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
}

const titleSection = {
    height:"90px",
    width: "365px",
    padding:"5px 5px 5px 5px",
    display:"flex",
    flexDirection:"column",
}

const Title = ({handlePageSelection}) => {

    const [selected, setSelected] = useState("Main");
    const active = "rgb(228, 228, 228)";
    const inactive = "rgb(121, 121, 121)";
    const hover = "rgba(161, 161, 161, 0.9)" ;
    const original = "rgba(161, 161, 161, 0.7)";
    const [selectMenu, setMenu] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isGreen, setGreen] = useState(false);
    const [isFairway, setFairway] = useState(false);
    
    const handleItemClicked = (name) =>{
        setSelected(name);
        handlePageSelection(name)
    };
    const handleClick = () => {
        setMenu(!selectMenu);
    }
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const handleMouseEnter2 = () => {
        setGreen(true);
    }
    const handleMouseLeave2 = () => {
        setGreen(false);
    }
    const handleMouseEnter3 = () => {
        setFairway(true);
    }
    const handleMouseLeave3 = () => {
        setFairway(false);
    }


    return(
        <div style={titleStyle}>
            <div style={titleSection}>
                <div id="name" 
                    style={{
                        fontSize:23, 
                        fontFamily:"Literata", 
                        color:"rgb(0, 0, 0)",
                        fontWeight:"800",
                        marign:"10px, 5px, 10px, 5px",
                        justifyContent:"center",
                    }}>
                    StatsApp
                </div>
                <div id="dropDown" style={{width:"40px", height:"35px", padding:"5px", display:"flex", flexDirection:"row", gap:10}}>
                    <button id="btn" onClick={() => handleClick()} style={{margin:"10px 5px 0px 5px"}}>
                    ≣ </button>
                    {selectMenu && (
                <div class="menu" id="menu" style={menuBar}>
               
                    <div selected={selected ==="Main"} 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleItemClicked("Main")}
                        style={{display:"inline-block", 
                            color: selected === "Main"?active : inactive,
                            background:isHovered?hover:original,
                            padding:"4px",
                            borderRadius:"4px",
                        }} >Overview</div>
                    <div selected={selected ==="Green"} 
                        onMouseEnter={handleMouseEnter2}
                        onMouseLeave={handleMouseLeave2}
                        onClick={() => handleItemClicked("Green")}
                        style={{display:"inline-block", 
                            color: selected === "Green"?active : inactive,
                            background:isGreen?hover:original,
                            padding:"4px",
                            borderRadius:"4px",
                        }} >Green</div>
                    <div selected={selected ==="Fairway"} 
                        onMouseEnter={handleMouseEnter3}
                        onMouseLeave={handleMouseLeave3}
                        onClick={() => handleItemClicked("Fairway")}
                        style={{display:"inline-block",
                            color: selected === "Fairway"?active : inactive,
                            background:isFairway?hover:original,
                            padding:"4px",
                            borderRadius:"4px",
                        }} >Fairway</div>  
                    
                </div>
                )}
                </div>
            
            </div>
        </div>
                
    

    );

};

export default Title;