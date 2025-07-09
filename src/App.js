import axios from 'axios';
import React, {useEffect} from 'react';
import './App.css';
import Main from "./Pages/Main";
import Green from "./Pages/Green";
import Fairway from "./Pages/Fairway";
import RoundView from './Module/RoundView';
import Navigation from './Sections/Navigation';
import Title from './Sections/Title';
import Login from './Module/Login';


const pageComponents = {
    Main: <Main/>,
    Green: <Green/>,
    Fairway: <Fairway/>,
    Login: <Login/>,
};


function App() {

  const [selectedPage, setSelectedPage] = React.useState("Main");
  const [login, setLogin] = React.useState(true);
  const [user, setUser] = React.useState('');
  

    const handleLogin = () =>{
      setLogin(false);
    }
    const handleInput = (value) => {
      setUser(value)
      console.log("user name: ", user)
    }

    const handlePageSelection = (page) => {
        console.log("Selected page:", page);
        if(page != selectedPage){
            setSelectedPage(page);
        }
    };



  return (
    <div className="App">
      <header className="App-header" >
        <div id="navigation-bar">
            <Title handlePageSelection={handlePageSelection}/>
        </div>
        <div>
           {login && <Login handleClose={handleLogin} setInputChange={handleInput}/>}
           
        </div>
        <div className="panel">
          {pageComponents[selectedPage]}
        </div>
    
      </header>
    </div>
  );
}

export default App;
