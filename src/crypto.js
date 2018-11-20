import React from 'react';
import CryptoList from './crypto-list';
import axios from 'axios';

export default class Crypto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waluty: [],
            data: [],
            filterValue: ''
        };
    }

    getData = () => {
        axios.get('https://blockchain.info/pl/ticker')
        .then(response => {
                let data = response.data;
                
                let waluty = [];
                for (let nazwaWaluty in data) {
                    waluty.push(nazwaWaluty);
             }
         

            this.setState({
                data: data,
                waluty: waluty 
            })
             
        })
        .catch(function (error) {
            // handle error
            console.log(error);
          })

        }  

    componentDidMount() {
        this.getData();

        setInterval(() => {this.getData()}, 5000);
    }


 onFilter = (event) => {
     let value = event.target.value;
     let waluty = this.state.waluty;
     
     waluty = waluty.filter(waluta => waluta === value);


     
     this.setState({waluty});
 }


  render() {
      console.log(this.state)
    return (
        <React.Fragment>
        <input type="text" value={this.state.value} onChange={this.onFilter}/>
        <CryptoList waluty={this.state.waluty} data={this.state.data}/>
        </React.Fragment>
    )
  }
}