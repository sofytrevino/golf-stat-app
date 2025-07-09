import React from 'react'
import '../App.css';
import UpDown from '../Components/UpDown';
import AvGir from '../Components/AvGir';
import SGShot from '../Components/SGShot';


const aroundStyle = {
    height: "150px",
    width: "393px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
}

const aroundSection = {
    height:"95px",
    width: "370px",
    justifyContent:"center",
    padding:"10px 10px 10px 10px"
}

const AroundGreen = ({user}) => {
    return(
        <div style={aroundStyle}>
            <div style={aroundSection}>
                <div id="title" style={{display:"flex", jusifityContent:"start", fontWeight:"700", fontSize: 16, fontFamily:"Literata", color:"#15192D"}}>
                    Around the Green
                </div>

                <div id="first-row" style={{width:"300px", justifyContent:"center", margin:"10px 30px 0px 30px"}}>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", gap:5}}>
                        <UpDown user={user}/>
                        <AvGir user={user}/>
                        <SGShot user={user}/>
                    </div>
                </div>

            </div>
                
        </div>
    

    );

};

export default AroundGreen;