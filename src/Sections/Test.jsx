import React, {useEffect, useState } from 'react';
import axios from 'axios';

const testStyle = {
    height: "150px",
    width: "393px",
    display: "flex",
    background: "#F0F0F0",
    outline: "1px #CACCCD solid",
}

const testSection = {
    height:"95px",
    width: "340px",
    justifyContent:"center",
    padding:"10px 10px 10px 10px",
}

const Test = () => {
    
    const[data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3003/api/courses')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error(err));
    },[]);
      

    return(
        <div style={testStyle}>
            <div style={testSection}>
                <div style={{
                    fontSize:15,
                    color:"#000000",
                    }}> Course Info 
                </div>
                <div style={{
                    textSize:13,
                    color:"#000000",
                    justifyContent:"center",
                }}>
                <ul>
                    {data.map((courses, index) => (
                    <li key={index}>
                        {courses.course_name} - {courses.par}
                    </li>
                    ))}
                </ul>
                </div>
            </div>
                
        </div>

      
            
            
       
    );

};


export default Test;