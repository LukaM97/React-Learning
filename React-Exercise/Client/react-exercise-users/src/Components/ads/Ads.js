import React from 'react';
import AdsAxios from '../../apis/AdsAxios';
import {withNavigation} from '../../routeconf';
import Filter from '../FilterComponent/Filter';
import './Ads.css';

class Ads extends React.Component{
    constructor(props){
        super(props);

        this.state={ads:[], najmanje:0, najvise:0}
    }

    componentDidMount(){
        this.getAds();
    }

    filter(){
        var params = {
            'najmanje': this.state.najmanje,
            'najvise': this.state.najvise
        };
        AdsAxios.post('/pretraga',params)
        .then(res => {
            console.log(res);
            this.setState({ads: []})
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

    getAds(){
        AdsAxios.get('/Oglasi')
        .then(res => {
            console.log(res);
            this.setState({ads: res.data});
        })
        .catch(error => {
            console.log(error);
            alert('Error occured please try again!');
        });
    }

    renderAds(){
        return this.state.ads.map((ad,index) => {
            return (
                <tr key={ad.id} className={index%2 === 0?'even':'odd'}>
                    <td>{ad.naslov}</td>
                    <td>{ad.tip}</td>
                    <td>{ad.godinaIzgradnje}</td>
                    <td>{ad.cenaNekretnine + " €"}</td>
                    <td>{ad.agencija.naziv}</td>
                    <td className='tdExtra'><button className='btnExtra' onClick={() => this.goToEdit(ad.id)}>Edit</button></td>
                    <td className='tdExtra'><button className='btnExtra' onClick={() => this.delete(ad.id)}>Delete</button></td>
                </tr>
            )
        })
    }

    goToEdit(adId){
        this.props.navigate('/Oglasi/edit/' + adId);
    }

    delete(adId){
        AdsAxios.delete('/Oglasi/' + adId)
        .then(res => {
            console.groupCollapsed(res);
            alert('Ad is deleted!');
            window.location.reload();
        })
        .catch(error => {
            console.lod(error);
            alert("Error occured please try again!");
        });
    }

    goToHome(){
        this.props.navigate('/');
    }

    goToCreate(){
        this.props.navigate('/Oglasi/add')
    }

    render(){
        return(
            <div>
                <h1>Ads</h1>
                <div id='table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Date of Construction</th>
                                <th>Price</th>
                                <th>Agency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderAds()}
                        </tbody>
                    </table>
                </div>
                <br/><br/>
                <h2>Search by price</h2>
                <label htmlFor='Najmanji'>Smallest: </label>
                <input id='najmanji' onChange={(e) => this.onNajmanjiChange(e)}/>
                <label htmlFor='Najveci'>Biggest: </label>
                <input id='najveci' onChange={(e) => this.onNajveciChange(e)}/>
                <button id='search' onClick={() => this.filter()}>Search</button>
                <br/><br/><br/>
                <button id='btnCreate' onClick={() => this.goToCreate()}>Add Ad</button>
                <button id='btnHome' onClick={() => this.goToHome()}>Home</button>
            </div>
        )
    }
}

export default withNavigation(Ads);