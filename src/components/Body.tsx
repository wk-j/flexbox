import React from "react"
import styled, { css } from "styled-components"

export const media = {
    handheld: (args) => css`
    @media (max-width: 420px) {
      ${css(args)}
    }
  `
}

const BodyDiv = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
`
const RightDiv = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
`

const LeftDiv = styled.div`
    display:flex;
    flex-direction: column;
    flex-grow: 3;
`

export class Body extends React.Component {
    render() {
        return (
            <BodyDiv>
                <RightDiv className="ui basic segment">
                    <div>
                        <label htmlFor="">Project</label>
                        <select style={{ width: "100%" }} >
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                        </select>
                    </div>
                    <div style={{ flexGrow: 1, padding: "10px" }} >
                        <div className="ui list">
                            <div className="item">
                                <i className="users icon"></i>
                                <div className="content"> Semantic UI </div>
                            </div>
                            <div className="item">
                                <i className="marker icon"></i>
                                <div className="content"> New York, NY </div>
                            </div>
                            <div className="item">
                                <i className="mail icon"></i>
                                <div className="content">
                                    <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
                                </div>
                            </div>
                            <div className="item">
                                <i className="linkify icon"></i>
                                <div className="content">
                                    <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </RightDiv>
                <LeftDiv className="ui basic segment">
                    <div style={{ flexGrow: 1 }}>
                        <textarea style={{ width: "100%", height: "calc(100% - 5px)" }}></textarea>
                    </div>
                    <div>
                        <div className="ui small blue button">
                            <i className="icon user"></i>
                            Save
                        </div>
                    </div>
                </LeftDiv>
            </BodyDiv>
        )
    }
}