import React from "react";
import styled from "styled-components";
const PartnershipsSection = () => {
    return(
        <Partnerships>
            <Title>
                <h2>associações parceiras</h2>
            </Title>
            <hr></hr>
            <All>
                <div>
                    <img></img>
                </div>
                <div>
                    <img></img>
                </div>
                <div>
                    <img></img>
                </div>
                <div>
                    <img></img>
                </div>
                <div>
                    <img></img>
                </div>
                <div>
                    <img></img>
                </div>
            </All>
        </Partnerships>
    )
}
export const Partnerships = styled.div`
    margin-top: -5%;
    hr{
        border: 1px solid #fff;
        margin-top:-1.3%;
        width:60%;
        float:right;
    }
`;
export const Title = styled.div`
    margin-left:5%;
    h2{
        text-align: inherit;
        color:#fff;
        font-size:36px;
    }
`;
export const All = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 3rem 0;
    div{
        background:gray;
        width: 250px;
        height:130px;
    }
`;
export default PartnershipsSection