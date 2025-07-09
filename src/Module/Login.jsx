import React, {useState} from 'react'
import '../App.css';



const modalOverStyle = {
    position:"absolute",
    top:0,
    left:40,
    height:"900px",
    width:"393px",
    backgroundColor:"rgba(244, 244, 244, 0.7)",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    zIndex: 1000,
};

const textStyle = {
    dispaly:"flex", 
    wordwrap:"break-word",
    fontWeight:"300",
    fontSize: 14,
    width:"100px",
    height:"70px"
}

const Login = ({handleClose, setInputChange}) => {    


    const [edit, setEdit] = useState([]);
    const [edit2, setEdit2] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
        setInputChange(e.target.value);
    }
    const handleChange2 = (e) => {
        setEmail(e.target.value);
    }
    const handleClick = () => {
        setEdit(true);
    }
    const handleClick2 = () => {
        setEdit2(true);
    }
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            setEdit(false);
        }
    }
    const handleKeyDown2 = (e) => {
        if (e.key === 'Enter'){
            setEdit2(false);
        }
    }


    return (
        <div style={modalOverStyle} onClick={handleClose}>
            <div style={{
                width:"300px",
                height:"300px",
                background:"rgba(255, 255, 255, 0.9)",
                boxShadow: "0px, 2px, 12px, rgba(0,0,0,0.15)",
                borderRadius: 10,
                padding:10,
                outline: "1px #CACCCD solid",
                justifyContent: "center",
                display: "flex",
                flexDirection:"column",
                gap:20,
                }} 
                onClick ={(e) => e.stopPropagation()}>
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    fontSize: 20,
                    fontFamily: "Avenir Next",
                    fontWeight: "500",
                    wordwrap:"break-word",
                    color:"#15192D",
                    margin:"5px 20px 20px 0px",
                    }} 
                    >Login
                </div>

                <div 
                    style={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"30px",
                    justifyContent:"center",
                    margin:"15px 5px 0px 5px",
                    }}>
                    
                    <div style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"center",
                            alignItems:"center",
                            gap:"15px",
                        }}>
                        <div style={{
                                fontSize:14,
                                fontWeight:"300",
                                fontFamily:"Literata",
                                color:" #000000",
                                }}>Name
                        </div>
                        <div>
                            {edit ? ( <input
                                type="text"
                                value={name}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                autoFocus/>    
                                ) : (<div onClick={handleClick}
                                         style={{
                                         width:"130px",
                                         height:"15px",
                                         border:"1px solid gray",
                                         padding:"5px",
                                         color:" #000000",
                                         fontSize:13,
                                         fontWeight:"400",
                                         textAlign:"left",
                                         cursor: "pointer",
                                        }}>{name}
                                    </div>

                                )}
                        </div>
                    </div>

                    <div style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"center",
                            alignItems:"center",
                            gap:"15px",
                        }}>
                            <div style={{
                                fontSize:14,
                                fontWeight:"300",
                                fontFamily:"Literata",
                                color:" #000000",
                            }}>Email
                            </div>
                            <div>
                                {edit2 ? ( <input
                                    type="text"
                                    value={email}
                                    onChange={handleChange2}
                                    onKeyDown={handleKeyDown2}
                                    autoFocus/>
                                    
                                ) : (<div onClick={handleClick2}
                                         style={{
                                         width:"130px",
                                         height:"15px",
                                         border:"1px solid gray",
                                         padding:"5px",
                                         color:" #000000",
                                         fontSize:13,
                                         fontWeight:"400",
                                         textAlign:"left",
                                         cursor: "pointer",
                                        }}>{email}
                                        </div>

                                )}
                            </div>
                    </div>

                </div>

                <div id="close-button" style={{width:"300px", height:"35px", display:"flex", justifyContent:"flex-end", padding:"2px"}}
                        onClick = {(e) => e.stopPropagation()}>
                        <button id="btn" style={{fontSize:17, margin:"10px 10px 0px 80px", alignItem:"center"}}
                        onClick={handleClose}>→</button>
                </div>

            </div>
        </div>
    

    );
};


export default Login;