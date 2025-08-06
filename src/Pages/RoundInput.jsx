import React, {useEffect, useState} from 'react';
import '../App.css';
import HoleInput from '../Sections/HoleInput';
import CourseInfo from '../Sections/CourseInfo';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import IconButton from '@mui/material/IconButton';


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
    justifyContent:"center",
};



const RoundInput = ({user}) => {
    const [reset, setReset] = useState([false]);
    const [hole_num, setHoleNum] = useState(3);
    const nextHole = () =>{
        setHoleNum(prev => prev + 1);
        setReset(true);
    }

    return(
        <div style={layoutStyle}>
            <div style={mainContentStyle}>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:3}}>
                        <div id="second-section" style={{margin:"0px 0px 10px 0px"}}>
                            <CourseInfo user={user}/>
                        </div>
                        <div style={{display:"flex", flexDirection:"row", gap:3, alignItems:"center",}}>
                            <IconButton onClick={nextHole} sx={{backgroundColor:"#7157d1ff",
                                    color:'#FFFFFF',
                                    '&:hover': {
                                    backgroundColor:"#6245caff",   
                                        }
                                    }}
                                    size="small">
                                  <DoubleArrowIcon sx={{color:'white', transform:'rotate(-180deg)', fontSize:"medium"}} />
                            </IconButton>
                              

                            <div id="second-section" style={{margin:"10px 0px 20px 0px"}}>
                                <HoleInput hole={hole_num} user={user} reset={reset}/>
                            </div>
                             <IconButton sx={{backgroundColor:"#7157d1ff",
                                    color:'#FFFFFF',
                                    '&:hover': {
                                    backgroundColor:"#6245caff",   
                                        }
                                    }}
                                    size="small">
                                  <DoubleArrowIcon sx={{color:'white', fontSize:"medium"}} onClick={nextHole}/>
                            </IconButton>
                        </div>
                        


                    </div>

            </div>
        </div>  
    );

};

export default RoundInput;