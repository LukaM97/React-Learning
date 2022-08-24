import React from 'react';
import AdsAxios from '../../apis/AdsAxios';
import { withNavigation } from '../../routeconf';
import './CreateAdd.css';


class CreateAdd extends React.Component{
    constructor(props){
        super(props);

        this.state = {naslov: '', 
        tip: '',
        godinaIzgradnje: 0,
        cenaNekretnine: 0,
        agencijaId: 0,
        agencies:[]}
    }

    componentDidMount(){
        this.getAgencies();
    }

    getAgencies(){
        AdsAxios.get('/Agencije')
        .then(res => {
            console.log(res);
            this.setState({agencies: res.data});
        })
        .catch(error => {
            console.log(error);
            alert('Error occured please try again!');
        });
    }

    renderAgencies(){
        return this.state.agencies.map((agency) => {
            return(
                <option value={agency.id} key={agency.id}>{agency.naziv}</option>
            )
        })
    }

    create = () => {
        var params = {
            'naslov':this.state.naslov,
            'tip':this.state.tip,
            'godinaIzgradnje':this.state.godinaIzgradnje,
            'cenaNekretnine':this.state.cenaNekretnine,
            'agencijaId':this.state.agencijaId
        };

        AdsAxios.post('/Oglasi',params)
        .then(res => {
            console.log(res);
            
            alert("Advertisement added successfully!");
            this.props.navigate('/Oglasi');
        })
        .catch(error => {
            console.log(error);
            alert("Error occured please try again!");
        });
    }

    onTitleChange = event =>{
        console.log(event.target.value);

        const {naslov,value} = event.target;
        console.log(naslov + ', ' + value);

        this.setState((state,props) => ({
            naslov:value
        }));
    }

    onTypeChange = event =>{
        console.log(event.target.value);
    
        const {tip,value} = event.target;
        console.log(tip + ', ' + value);
    
        this.setState((state,props) => ({
            tip:value
        }));
    }

    onYearChange = event =>{
        console.log(event.target.value);

        const {godinaIzgradnje,value} = event.target;
        console.log(godinaIzgradnje + ', ' + value);

        this.setState((state,props) => ({
            godinaIzgradnje:value
        }));
    }

    onPriceChange = event =>{
        console.log(event.target.value);

        const {cenaNekretnine,value} = event.target;
        console.log(cenaNekretnine + ', ' + value);

        this.setState((state,props) => ({
            cenaNekretnine:value
        }));
    }

    onAgencyChange = event =>{
        console.log(event.target.value);

        const {agencijaId,value} = event.target;
        console.log(agencijaId + ', ' + value);

        this.setState((state,props) => ({
            agencijaId:value
        }));
    }

    goToAds(){
        this.props.navigate('/Oglasi');
    }

    render(){
        return(
            <div>
                <h1>Add new advertisement</h1>
                <label htmlFor='Title'>Title: </label>
                <input id='title' type='text' onChange={(e) => this.onTitleChange(e)}/><br/><br/>
                <label htmlFor='Type'>Type: </label>
                <input id='type' onChange={(e) => this.onTypeChange(e)}/><br/><br/>
                <label htmlFor='Year'>Year of construction: </label>
                <input id='year' onChange={(e) => this.onYearChange(e)}/><br/><br/>
                <label htmlFor='Price'>Price: </label>
                <input id='price' onChange={(e) => this.onPriceChange(e)}/><br/><br/>
                <label htmlFor='Agency' id='agency'>Agency: </label>
                <select htmlFor='Agency' onChange={(e) => this.onAgencyChange(e)}>
                    {this.renderAgencies()}
                </select>
                <br/><br/>
                <button className='btnAdd' onClick={this.create}>Add</button>
                <button className='btnBack' onClick={() => this.goToAds()}>Back</button>
            </div>
        )
    }
}

export default withNavigation(CreateAdd);