

import React, { Component } from 'react'
import ModalShoe from './ModalShoe'

export default class ListShoes extends Component {
    render() {
        let { shoe, handleShoeClick } = this.props
        return (
            <div className='col-4 mb-4'>
                <div className="card">
                    <div className='text-center'>
                        <img style={{ width: '20rem' }} height={300} src={shoe.image} alt="" />
                    </div>
                    <div className="card-body">
                        <h5>{shoe.name}</h5>
                        <p>{shoe.price} $</p>
                        <button onClick={() => { handleShoeClick(shoe) }} className='btn btn-dark'>Detail</button>
                    </div>
                </div>
            </div>

        );
    };
};
