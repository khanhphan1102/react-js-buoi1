

import React, { Component } from 'react'
import Header from './Header/Header'
import Banner from './Body/Banner'
import Content from './Body/Content'
import Footer from './Footer/Footer'




export default class MainComponent extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Content />
                <Footer />
            </div>
        )
    }
}
