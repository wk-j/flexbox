import styled from "../../node_modules/styled-components";
import React from "react"

const BoxDiv = styled.div`
    width: 100px;
    padding: 5px;
    height: 100px;
`;


export class Box extends React.Component<{ text: string }, {}> {
    render() {
        return (
            <BoxDiv>{this.props.text}</BoxDiv>
        );
    }
}
