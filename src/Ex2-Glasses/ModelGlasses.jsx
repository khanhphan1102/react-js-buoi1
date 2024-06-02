

import React, { Component } from 'react'

export default class ModelGlasses extends Component {

    render() {

        let { newUrl } = this.props;

        let modelDemo = {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        };

        return (
            <div className='mb-5 row text-center mt-5'>
                <div className='col' style={{ position: "relative" }}>
                    <img
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            maxWidth: "300px",
                        }}
                        src="./glassesImage/model.jpg"
                        alt="Model"
                    />
                    <img
                        style={{
                            width: "25.67%",
                            position: "absolute",
                            top: "33.67%",
                            left: "50.33%",
                            transform: "translate(-50%, -50%)",
                        }}
                        src={modelDemo.url}
                        alt="Glasses"
                    />
                    <div style={{
                        width: "45.8%",
                        height: "33%",
                        paddingTop: "15px",
                        position: "absolute",
                        bottom: "0",
                        right: "27%",
                        backgroundColor: "rgb(253,189,143,0.4)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <h3>{modelDemo.name}</h3>
                        <p className='text-white'>{modelDemo.desc}</p>
                    </div>
                </div>
                <div className='col' style={{ position: "relative" }}>
                    <img
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            maxWidth: "300px",
                        }}
                        src="./glassesImage/model.jpg"
                        alt="Model"
                    />
                    <img
                        style={{
                            width: "25.67%",
                            position: "absolute",
                            top: "33.67%",
                            left: "50.33%",
                            transform: "translate(-50%, -50%)",
                            opacity: newUrl === "" ? 0 : 1
                        }}
                        src={newUrl}
                        alt="Glasses"
                    />
                </div>
            </div>
        );
    };
};

