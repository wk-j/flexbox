import React from "react"
import styled from "styled-components"

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export class Container extends React.Component {
    render() {
        return <ContainerDiv>{this.props.children}</ContainerDiv>
    }
}