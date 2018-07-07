import React from "react"
import styled, { css } from "styled-components"

export const media = {
    handheld: (args) => css`
    @media (max-width: 420px) {
      ${ css(args)}
    }
  `
}

const BodyDiv = styled.div`
    background: grey;
    flex-grow: 1;
    color: white;

    ${ media.handheld`
        font-size: 50px;
    `}
`

export class Body extends React.Component {
    render() {
        return <BodyDiv>{this.props.children}</BodyDiv>
    }
}