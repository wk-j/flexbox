import React from "react"
import styled from "styled-components"

const FooterDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px;
`;

export class Footer extends React.Component {
    render() {
        return (
            <FooterDiv>
                <div>config editor @2018</div>
            </FooterDiv >
        )
    }
}