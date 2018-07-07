import React from "react"
import styled from "styled-components"

const FooterDiv = styled.div`
    background: blue;
    color: white;
`;

export class Footer extends React.Component {
    render() {
        return <FooterDiv>{this.props.children}</FooterDiv>
    }
}