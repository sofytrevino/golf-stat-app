import React, {useState} from 'react'
import '../App.css';


const ScoreChart = ({slices, radius=50, total}) => {   
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const center = radius;
    let currentAngle = 0;
    const original = ["rgba(189, 90, 162, 0.7)", "rgba(76, 167, 209, 0.7)", "rgba(122, 115, 118, 0.7)", "rgba(224, 60, 60, 0.7)"];
    const hover = ["rgba(189, 90, 162, 0.9)", "rgba(76, 167, 209, 0.9)", "rgba(122, 115, 118, 0.9)", "rgba(224, 60, 60, 0.9)"];
    let idx = -1;

    const polarToCartestian = (angle) => {
        const rad = (angle - 90) * Math.PI / 180.0
        
        return {
            x: center + radius * Math.cos(rad),
            y: center + radius * Math.sin(rad)
        };
    
    };
    const paths = slices.map((slice, index) => {
        const {par, count} = slice;
        const value = (count*total)/100;
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
        idx += 1;
        let color = isHovered?hover[idx]:original[idx];
        return <path key ={index} d={pathData} fill={color} />;

    });
    

    return (
        <svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${radius * 2} ${radius * 2}`} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}    
        style={{background:"transparent",
                    fill:"none",
                    stroke:"grey",
                    strokeWidth:"0.5"}}>
            <g transform={`rotate(-90 ${radius} ${radius})`}>
                 {paths}
            </g>
        </svg>
    );
};


export default ScoreChart;