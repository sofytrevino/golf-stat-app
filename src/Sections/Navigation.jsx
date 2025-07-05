import React, {useEffect, useState } from 'react'
import '../App.css';

const navStyle = {
    height: "80px",
    width: "393px",
    display: "flex",
    background:"rgb(234, 234, 234)",
    justifyContent:"row",
    gap: 10
}

const menuBar = {
    width:"300px",
    height:"35px",
    display:"flex",
    alignItems:"center",
    background:"rgb(78, 90, 139)",
    margin:"30px 0px 0px 0px",
}
const menuItems = {
    width:"250px",
    height:"40px",
    margin: "20px 15px 5px 15px",
    display:"flex",
    justifyContent:"center",
    gap:10,
    fontFamily:"Lato", 
    fontSize:"8",    
}




const Navigation = ({handlePageSelection}) => {
    const [selected, setSelected] = useState("Main");
    const active = "rgb(228, 228, 228)";
    const inactive = "rgb(121, 121, 121)";
    const [selectMenu, setMenu] = useState(false);

    const handleItemClicked = (name) =>{
        setSelected(name);
        handlePageSelection(name)
    };

    const handleClick = () => {
        setMenu(!selectMenu);
    }


    return(
        <div style={navStyle}>
            <div id="dropDown" style={{width:"40px", height:"40px", padding:"5px"}}>
                <button id="btn" onClick={() => handleClick()} style={{margin:"30px 0px 0px 0px"}}>
                ≣ </button>
            </div>
            {selectMenu && (
                <div class="menu" id="menu" style={menuBar}>
                    <div style={menuItems}> 
                        <div selected={selected ==="Main"} 
                        onClick={() => handleItemClicked("Main")}
                        style={{color: selected === "Main"?active : inactive,}}>Overview</div>
                         <div selected={selected ==="Green"} 
                        onClick={() => handleItemClicked("Green")}
                        style={{color: selected === "Green"?active : inactive,}}>Green</div>
                        <div selected={selected ==="Fairway"} 
                        onClick={() => handleItemClicked("Fairway")}
                        style={{color: selected === "Fairway"?active : inactive,}}>Fairway</div>  
                    </div>
                </div>
                )}
            


        </div>
    

    );

};

export default Navigation;