import React from "react";
import ReactDOM from "react-dom";
import "./Style.css";

import styled, { css } from 'styled-components'
import { Box } from "./components/Box";
import { Header } from "./components/Header";
import { Body } from "./components/Body"
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";

export class App extends React.Component {

    render() {
        return (
            <Container>
                <Header>
                    <Box text="Head" />
                </Header>
                <Body>
                    <Box text="Body" />
                </Body>
                <Footer>
                    <Box text="Footer" />
                </Footer>
            </Container>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));