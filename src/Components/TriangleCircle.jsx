import React from 'react'
import '../App.css';



const TriangleCircle = ({degrees, rotation=0, radius=50, color}) => {   
    const r = radius;
    const startAngle = 0;
    const endAngle = degrees;
    const width = r * 2;
    const height = r * 2;

    const polarToCartestian = (angleInDegrees) => {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0
        
        return {
            x: r + r * Math.cos(angleInRadians),
            y: r + r * Math.sin(angleInRadians)
        };
    
    };
    
    const start = polarToCartestian(startAngle);
    const end = polarToCartestian(endAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const pathData = [
        `M ${r} ${r}`,
        `L ${start.x} ${start.y}`,
        `A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
        `Z`
    ].join(' ');

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${width}`}>
            <circle
               cx={r} 
               cy={r}
               r={r}
               fill="none"
               stroke="grey"
               strokeWidth="1"
            />            
            <g transform={`rotate(${rotation} ${r} ${r})`}>
                <path d={pathData} fill={color}/>
            </g>
          
        </svg>



    );
};


export default TriangleCircle;