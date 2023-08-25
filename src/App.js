import './App.css';
import Sidebar from './Components/Sidebar.js';
import Searchbar from './Components/Searchbar';
import {useEffect,useState} from "react";

function App() {

    return(
    <div className="App">
       <Sidebar />
       <Searchbar />
       <button className='btn'>Connect</button>
       
    </div>
    );
};


export default App;
