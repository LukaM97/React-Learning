import React from 'react';
import AdsAxios from '../../apis/AdsAxios';
import {withNavigation} from '../../routeconf';

class Filter extends React.Component{

    constructor(props){
        super(props);

        this.state={najmanje:0, najvise:0, ads:[]}
    }

    filter(){
        var params = {
            'najmanje': this.state.najmanje,
            'najvise': this.state.najvise
        };
        AdsAxios.post('/pretraga',params)
        .then(res => {
            console.log(res);
            this.setState({ads: res.data})

            this.props.navigate('/Oglasi');
        })
        .catch(error => {
            console.log(error);
            alert("Error occured,please try again!");
        });
    }

    onNajmanjiChange = event =>{
        console.log(event.target.value);

        const {najmanje,value} = event.target;
        console.log(najmanje + ', ' + value);

        this.setState((state,props) => ({
            najmanje:value
        }));
    }

    onNajveciChange = event =>{
        console.log(event.target.value);

        const {najvise,value} = event.target;
        console.log(najvise + ', ' + value);

        this.setState((state,props) => ({
            najvise:value
        }));
    }

    render(){
        return(
            <div>
                <label htmlFor='Najmanji'>Smallest: </label>
                <input id='najmanji' onChange={(e) => this.onNajmanjiChange(e)}/><br/><br/>
                <label htmlFor='Najveci'>Biggest: </label>
                <input id='najveci' onChange={(e) => this.onNajveciChange(e)}/><br/><br/>
                <button onClick={() => this.filter()}>Search</button>
            </div>
        )
    }
}

export default withNavigation(Filter);