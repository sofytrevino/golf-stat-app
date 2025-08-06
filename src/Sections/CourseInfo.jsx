
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import '../App.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const mainContentStyle = {
    height: "150px",
    width: "350px",
    display: "flex",
    borderRadius: "10px",
    background: "#e1dfdfff",
    border: "#15192D",
    padding: "10px",
};
const textStyle = {
    display: "flex",
    fontWeight: "100",
    fontSize: 14,
    width: "100px",
    height: "20px",
    color: " #000000",
    fontFamily:"Tahoma",

}


const CourseInfo = ({ user }) => {
    let roundNum = 3;
    const [formData, setFormData] = useState({
        course_name: '',
        date: '',
        total_score: 79,
        name: '',
        round_number: roundNum,
    });
    useEffect(() => {
        if(user) {
            setFormData(prev => ({
                ...prev,
                name: user,
            }))
        }
    }, [user]);
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("round number: ", formData.round_number);
        console.log("Course: ", formData.course_name);
        console.log("name: ", formData.name);
        console.log("score: ", formData.total_score);
        console.log("date: ", formData.date);
        
        const res = await fetch('http://localhost:3003/api/golf-round', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log('Response:', data);
    };


   

    return (
        <div style={mainContentStyle}>

            <div style={{ display: "flex", flexDirection: "column", textAlign: "left", gap: 15, margin: "20px 40px 20px 10px" }}>
                <div style={{ display: "flex", height: "30px", flexDirection: "row", alignItems:"center", gap:0 }}>
                    <div style={textStyle}>Course Name:</div>
                    <TextField
                        name="course_name"
                        variant="outlined"
                        value={formData.course_name}
                        onChange={handleChange}
                        size="small"
                        sx={{ width: '200px', mb: 2 }}
                    />
                </div>

                <div style={{ display: "flex", height: "30px", flexDirection: "row", alignItems:"center", gap:0 }}>
                    <div style={textStyle}>Date:</div>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Select date"
                            value={formData.date}
                            onChange={ (newValue) => setFormData(prev => ({
                                ...prev,
                                date: newValue,
                            }))}
                            slotProps={{ textField: { variant:'outlined' }, }}
                        />
                    </LocalizationProvider>
                </div>
                    <div style={{width:"50px", height:"30px", display:'flex', alignItems:"end", margin:"10px 5px 5px 270px"}}>
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

            

        </div>
    );

};

export default CourseInfo;