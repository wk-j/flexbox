import styled from "styled-components";
import React from "react"

const HeaderDiv = styled.div`
`;

export class Header extends React.Component {
    render() {
        return <HeaderDiv>
            <div className="ui secondary pointing menu">
                <a className="active item"> Home </a>
                <a className="item"> Messages </a>
                <a className="item"> Friends </a>
                <div className="right menu">
                    <a className="ui item"> Logout </a>
                </div>
            </div>
        </HeaderDiv>
    }
}
