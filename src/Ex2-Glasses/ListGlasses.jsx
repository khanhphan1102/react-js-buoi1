

import React, { Component } from 'react'
import style from "./Glasses.module.css"

export default class ListGlasses extends Component {

    render() {

        let { listGlasses, changeGlasses } = this.props;

        return (
            <div
                onMouseOver={() => { changeGlasses(listGlasses) }}
                className={style.hoverbox}
                style={{ cursor: "pointer", width: "205px", textAlign: "center", border: "1px solid" }} >

                <img style={{ width: "100px", height: "100%" }} src={listGlasses} alt="" />
            </div>
        );
    };
};


