import React from "react";
import {withNavigation} from '../routeconf';
import './Home.css';

class Home extends React.Component{
    goToAds(){
        this.props.navigate('/Oglasi');
    }
    render(){
        return (
            <div>
                <h1>Home</h1>
                <br/>
                <button id="btnAds" onClick={() => this.goToAds()}>Ads</button>
            </div>
        )
        
    }
}

export default withNavigation(Home);