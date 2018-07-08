import React from "react"
import ReactDOM from "react-dom"
import "./Style.css"

import styled, { css } from 'styled-components'
import { Header } from "./components/Header"
import { Body } from "./components/Body"
import { Footer } from "./components/Footer"
import { Container } from "./components/Container"

import "semantic-ui-css/semantic.css"

export class App extends React.Component {

    render() {
        return (
            <Container>
                <Header> </Header>
                <Body> </Body>
                <Footer> </Footer>
            </Container>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));