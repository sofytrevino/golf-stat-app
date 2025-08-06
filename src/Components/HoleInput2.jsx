import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../App.css';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';


const textStyle = {
    dispaly: "flex",
    fontWeight: "100",
    fontSize: 14,
    height: "20px",
    color: " #000000",
    fontFamily: "Tahoma",
}

const HoleInput2 = ({hole, user, reset}) => {
     let hole_num = hole;
     let round_num = 3;


     const initialFormData ={
        round: round_num,
        holeNum: hole_num,
        score: '',
        par: '',
        putts: '',
        driver_l: null,
        driver_m: null,
        driver_r: null,
        fir: null,
        gir: '',
        up_down: null,
        approach: '',
        proximity: '',
        ob: '',
        bunker: '',
        hazard: '',
     }

    const [formData, setFormData] = useState(initialFormData);

    const handleReset = () => {
        setFormData(initialFormData);
    }

    useEffect(() => {
        if(reset){
            handleReset();
            console.log("Hole number reset: ", hole_num);
        }
    }, [reset]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };
    const boxChange = (e) => {
        const {name, checked} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: checked ? 'yes' : 'no',
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("round hole number: ", formData.holeNum)
        
        const res = await fetch('http://localhost:3003/api/insert-round', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log('Response:', data);
    };

   

    return (
        <form onSubmit={handleSubmit}>
            <div style={{display:"flex", width:"100%", height:"25px", justifyContent:"center", margin:"0px 0px 25px 0px"}}>
                <div style={{display:"inline-block", textSize:13, color:" #000000", fontweight:300, fontFamily: "Tahoma",}}>
                    Hole {hole_num}
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16}}>
                <div style={{ display: "flex", height: "30px", flexDirection: "row", alignItems: "center", gap: 13 }}>
                    <div style={textStyle}>Score:</div>
                    <TextField
                        name="score"
                        variant="outlined"
                        value={formData.score}
                        onChange={handleChange}
                        size="small"
                        sx={{ width: '80px', mb: 2 }}
                        type="number"
                    />
                </div>
                <div style={{ display: "flex", height: "30px", flexDirection: "row", alignItems: "center", gap: 13 }}>
                    <div style={textStyle}>Par:</div>
                    <TextField
                        name="par"
                        variant="outlined"
                        value={formData.par}
                        onChange={handleChange}
                        size="small"
                        sx={{ width: '80px', mb: 2 }}
                        type="number"
                    />
                </div>
                <div style={{ display: "flex", height: "30px", flexDirection: "row", alignItems: "center", gap: 13 }}>
                    <div style={textStyle}>Putts:</div>
                    <TextField
                        name="putts"
                        variant="outlined"
                        value={formData.putts}
                        onChange={handleChange}
                        size="small"
                        sx={{ width: '80px', mb: 2 }}
                        type="number"
                    />
                </div>
                <div style={{ display: "flex", height: "30px", flexDirection: "row", alignItems: "center", gap: 6, margin:"0px 0px 10px 0px" }}>
                    <div style={textStyle}>Driver:</div>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox checked={formData.driver_l === 'yes'} onChange={boxChange} name="driver_l" size='small'/>}
                        label="Left"  labelPlacement='bottom' sx={{color:'black'}}
                        />
                        <FormControlLabel control={<Checkbox checked={formData.driver_m === 'yes'} onChange={boxChange} name="driver_m" size='small'/>}
                        label="Middle"  labelPlacement='bottom' sx={{color:'black'}}
                        />
                        <FormControlLabel control={<Checkbox checked={formData.driver_r === 'yes'} onChange={boxChange} name="driver_r" size='small'/>}
                        label="Right" labelPlacement='bottom' sx={{color:'black'}}
                        />
                    </FormGroup>
                </div>



                <div style={{ display: "flex", height: "30px", flexDirection: "row", alignItems: "center", gap: 15 }}>
                    <div style={textStyle}>FIR:</div>
                    <RadioGroup row name='fir' onChange={handleChange} value={formData.fir}>
                        <FormControlLabel value='yes' control={<Radio />} label='Yes' sx={{color:'black'}} />
                        <FormControlLabel value='no' control={<Radio />} label='No'  sx={{color:'black'}}/>
                    </RadioGroup>
                </div>

                <div style={{ display: "flex", height: "30px", flexDirection: "row", alignItems: "center", gap: 15 }}>
                    <div style={textStyle}>GIR:</div>
                    <RadioGroup row name='gir' onChange={handleChange} value={formData.gir}>
                        <FormControlLabel value='yes' control={<Radio />} label='Yes' sx={{color:'black'}}/>
                        <FormControlLabel value='no' control={<Radio />} label='No' sx={{color:'black'}}/>
                    </RadioGroup>
                </div>
                <div style={{ display: "flex", height: "30px", flexDirection: "row", alignItems: "center", gap: 15 }}>
                    <div style={textStyle}>Up & Down:</div>
                    <RadioGroup row name='up_down' onChange={handleChange} value={formData.up_down}>
                        <FormControlLabel value='yes' control={<Radio />} label='Yes' sx={{color:'black'}}/>
                        <FormControlLabel value='no' control={<Radio />} label='No' sx={{color:'black'}}/>
                    </RadioGroup>
                </div>
              

                <div style={{ display: "flex", width: "400px", height: "30px", flexDirection: "row", alignItems: "center", gap: 13 }}>
                    <div style={textStyle}>Approach Yardage:</div>
                    <TextField
                        name="approach"
                        variant="outlined"
                        value={formData.approach}
                        onChange={handleChange}
                        size="small"
                        sx={{ width: '80px', mb: 2 }}
                        type="number"
                    />
                </div>
                <div style={{ display: "flex", height: "30px", flexDirection: "row", alignItems: "center", gap: 13 }}>
                    <div style={textStyle}>Proximity:</div>
                    <TextField
                        name="proximity"
                        variant="outlined"
                        value={formData.proximity}
                        onChange={handleChange}
                        size="small"
                        sx={{ width: '80px', mb: 2 }}
                        type="number"
                    />
                </div>
                <div style={{ display: "flex", height: "25px", flexDirection: "row", alignItems: "center", gap: 15 }}>
                    <div style={textStyle}>Hazard</div>
                    <RadioGroup row name='hazard' onChange={handleChange} value={formData.hazard}>
                        <FormControlLabel value='yes' control={<Radio />} label='Yes' sx={{color:'black'}} />
                        <FormControlLabel value='no' control={<Radio />} label='No' sx={{color:'black'}}/>
                    </RadioGroup>
                </div>
                <div style={{ display: "flex", height: "25px", flexDirection: "row", alignItems: "center", gap: 15 }}>
                    <div style={textStyle}>Bunker:</div>
                    <RadioGroup row name='bunker' onChange={handleChange} value={formData.bunker}>
                        <FormControlLabel value='yes' control={<Radio />} label='Yes' sx={{color:'black'}}/>
                        <FormControlLabel value='no' control={<Radio />} label='No' sx={{color:'black'}}/>
                    </RadioGroup>
                </div>
                <div style={{ display: "flex", height: "25px", flexDirection: "row", alignItems: "center", gap: 15 }}>
                    <div style={textStyle}>OB:</div>
                    <RadioGroup row name='ob' onChange={handleChange} value={formData.ob}>
                        <FormControlLabel value='yes' control={<Radio />} label='Yes' sx={{color:'black'}}/>
                        <FormControlLabel value='no' control={<Radio />} label='No' sx={{color:'black'}}/>
                    </RadioGroup>
                </div>



                <div style={{width:"50px", height:"30px", display:'flex', alignItems:"end", margin:"0px 5px 5px 240px"}}>
                    <Button
                        variant="contained"
                        sx={{backgroundColor:"#576dd1ff",
                            color:'#FFFFFF',
                            '&:hover': {
                                backgroundColor:"#3d57ccff",
                            }
                        }}
                        size="small"
                        onClick={handleSubmit}
                    >Submit</Button>
                </div>


            </div>
        </form>


    );

};

export default HoleInput2;