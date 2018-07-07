import styled from "styled-components";
import React from "react"

const HeaderDiv = styled.div`
    background: green;
    color: white;
`;

export class Header extends React.Component {
    render() {
        return <HeaderDiv>{this.props.children}</HeaderDiv>
    }
}
