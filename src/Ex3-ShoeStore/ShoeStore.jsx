

import React, { Component } from 'react'
import { dataShoes } from './dataShoes'
import ListShoes from './ListShoes'
import ModalShoe from './ModalShoe'

export default class ShoeStore extends Component {

  state = {
    shoeDetail: "",
    showDetail: false,
  };

  handleShoeClick = (shoe) => {
    this.setState({
      shoeDetail: shoe,
      showDetail: true
    });
  };

  handleCloseDetail = () => {
    this.setState({
      showDetail: false,
    });
  };

  renderDataShoes = () => {
    return dataShoes.map((shoe) => {
      return <ListShoes shoe={shoe} showDetail={this.state.showDetail} handleShoeClick={this.handleShoeClick} />
    });
  };

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Shoes Shop</h1>
        <div className='row'>
          {this.renderDataShoes()}
        </div>
        {this.state.showDetail && <ModalShoe shoeDetailClick={this.state.shoeDetail} handleCloseDetail={this.handleCloseDetail} />}
      </div>
    );
  };
};
