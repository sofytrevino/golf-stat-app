import axios from 'axios';
import React, {useEffect} from 'react';
import './App.css';
import Main from "./Pages/Main";
import Green from "./Pages/Green";
import Fairway from "./Pages/Fairway";
import RoundView from './Module/RoundView';
import Navigation from './Sections/Navigation';
import Title from './Sections/Title';


const pageComponents = {
    Main: <Main/>,
    Green: <Green/>,
    Fairway: <Fairway/>,
};


function App() {

  const [selectedPage, setSelectedPage] = React.useState("Main");

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
        <div className="panel">
          {pageComponents[selectedPage]}
        </div>
    
      </header>
    </div>
  );
}

export default App;
