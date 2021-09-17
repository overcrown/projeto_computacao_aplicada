import React, { Component } from 'react'
import Emphasis from '../../components/Emphasis'
import NavBar from '../../components/NavBar'
import './styles.css'

export default class Home extends Component {

    render() {
        return (
            <body>
                <NavBar />
                <main>
                    
                    <Emphasis />
                </main>
            </body>
        )
    }
}
