import React, {useState} from 'react'
import '../App.css';



const PieCircle = ({slices, radius=50}) => {   
    const center = radius;
    let currentAngle = 0;
    const [slice1, setSlice1] = useState(false);

    const isHovered1 = () => {
        setSlice1(true);
    }
    const notHovered1 = () => {
        setSlice1(false);
    }


    const polarToCartestian = (angle) => {
        const rad = (angle - 90) * Math.PI / 180.0
        
        return {
            x: center + radius * Math.cos(rad),
            y: center + radius * Math.sin(rad)
        };
    
    };
    const paths = slices.map((slice, index) => {
        const {value, color, hover} = slice;
        const startAngle = currentAngle;
        const endAngle = currentAngle + value;

        const start = polarToCartestian(startAngle);
        const end = polarToCartestian(endAngle);
        const largeArcFlag = value > 180 ? "1" : "0";

        const pathData = [
            `M ${radius} ${radius}`,
            `L ${start.x} ${start.y}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
             `Z`
        ].join(' ');

        currentAngle += value;

        return <path key ={index} d={pathData} fill={color} />;

    });
    

    return (
        <svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${radius * 2} ${radius * 2}`} 
            onMouseEnter={isHovered1}
            onMouseLeave={notHovered1}
            style={{background:"transparent"}}>
            <g transform={`rotate(-90 ${radius} ${radius})`}>
                 {paths}
            </g>
        </svg>
    );
};


export default PieCircle;