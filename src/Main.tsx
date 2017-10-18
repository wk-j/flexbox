import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Style.css";

import styled, { css } from 'styled-components'

//${ css(...args) }
export const media = {
    handheld: (args) => css`
    @media (max-width: 420px) {
      ${ css(args)}
    }
  `
}

type State = {}
type Props = {}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Header = styled.div`
    background: green;
    color: white;
`;

const Body = styled.div`
    background: grey;
    flex-grow: 1;
    color: white;

    ${ media.handheld`
        font-size: 50px;
    `}
`;

const Footer = styled.div`
    background: blue;
    color: white;
`;

const Box = styled.div`
    width: 100px;
    padding: 5px;
    height: 100px;
`;

export class App extends React.Component<Props, State> {

    render() {
        return (
            <Container>
                <Header>
                    <Box> Header </Box>
                </Header>
                <Body>
                    <Box> Content </Box>
                </Body>
                <Footer>
                    <Box> Footer </Box>
                </Footer>
            </Container>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));