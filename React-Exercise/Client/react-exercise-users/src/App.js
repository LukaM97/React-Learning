import React, { Component } from 'react';
import './App.css';
import { Route,BrowserRouter as Router, Routes} from 'react-router-dom';
import Header from './Components/HeaderComponent/Header';
import Home from './Components/Home';
import CreateAdd from './Components/ads/CreateAdd';
import Ads from './Components/ads/Ads';
import EditAd from './Components/ads/EditAd';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Oglasi" element={<Ads/>}/>
            <Route path='/Oglasi/add' element={<CreateAdd/>}/>
            <Route path="/Oglasi/edit/:id" element={<EditAd/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
