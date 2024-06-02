

import React, { Component } from 'react'
import ModelGlasses from './ModelGlasses';
import { glassesArr } from './dataGlasses';
import ListGlasses from './ListGlasses';

export default class MainGlasses extends Component {

    state = {
        url: "",
    };

    handleChangeGlasses = (newUrl) => {
        this.setState({
            url: newUrl,
        })
    };

    renderArrGlasses = () => {
        let listGlasses = glassesArr.map((glasses, index) => {
            return <ListGlasses key={index} listGlasses={glasses.url} changeGlasses={this.handleChangeGlasses} />
        });
        return listGlasses;

    };

    render() {
        return (
            <div>
                <div
                    style={{
                        backgroundColor: "#344C64",
                    }}
                >
                    <h2 className="text-white text-center">TRY GLASSES APP ONLINE</h2>
                </div>

                <div className='container'>
                    <ModelGlasses newUrl={this.state.url} />
                </div>

                <div className='container'>
                    <div className='row gap-3'>{this.renderArrGlasses()}</div>
                </div>

            </div>
        );
    };
};
