import React from 'react';
import '../App.css';
import HoleInput2 from '../Components/HoleInput2';


const mainContentStyle = {
    height:"670px",
    width:"325px",
    display:"flex",
    borderRadius:"10px",
    background:"#e1dfdfff",
    border: "#15192D",
    padding:"5px",
    flexDirection:"column",
};
const textStyle = {
    dispaly:"flex", 
    fontWeight:"100",
    fontSize: 12,
    width:"100%",
    height:"20px",
    color:" #000000",
}


const HoleInput = ({hole, user, reset}) => {

    return(
        <div style={mainContentStyle}>
      
            <div style={{display:"flex", flexDirection:"column", gap:5, margin:"20px 15px 0px 15px"}}>
                <HoleInput2 hole={hole} user={user} reset={reset}/>
            </div>

                
                    

        </div>  
    );

};

export default HoleInput;