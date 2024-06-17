

import React, { Component } from 'react'

export default class ModalShoe extends Component {
    render() {
        let { shoeDetailClick, handleCloseDetail } = this.props;
        return (
            <div style={{ position: 'fixed', bottom: '0', right: '0', width: '100%', background: 'whitesmoke', height: '300px' }}>
                <div className='row p-3'>
                    <div className='col-3'>
                        <h3 className='text-center'>{shoeDetailClick.name}</h3>
                        <div className='text-center'>
                            <img height={300} src={shoeDetailClick.image} alt="" />
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='d-flex justify-content-lg-between'>
                            <h3>Detail Shoe</h3>
                            <button onClick={() => { handleCloseDetail() }} className='btn btn-primary'>Close</button>
                        </div>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th className='col-3'>Alias</th>
                                    <td>{shoeDetailClick.alias}</td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>{shoeDetailClick.description}</td>
                                </tr>
                                <tr>
                                    <th>ShortDescription</th>
                                    <td>{shoeDetailClick.shortDescription}</td>
                                </tr>
                                <tr>
                                    <th>Price</th>
                                    <td>{shoeDetailClick.price} $</td>
                                </tr>
                                <tr>
                                    <th>Quantity</th>
                                    <td>{shoeDetailClick.quantity}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };
};
