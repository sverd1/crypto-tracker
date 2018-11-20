import React from 'react';
import './crypto-list.css';

export default class CryptoList extends React.Component {
    constructor(props) {
        super(props);

    }

  render() {
      let data = this.props.data;
    return (


        <React.Fragment>    
          <ul className="list-wrapper">
              {this.props.waluty.map(waluta=>
                <li className="waluta-content" key={waluta}>
                <span>Last rate: {data[waluta].last}</span>
                <span>{waluta}</span>
                 <span>{`[ ${data[waluta].symbol} ]`}</span>
                </li>
                )}
          </ul>
      </React.Fragment>




    )
  }
}