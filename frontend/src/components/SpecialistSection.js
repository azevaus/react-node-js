import React from "react";
import styled from "styled-components";
import {Header, Title} from '../styles';
const SpecialistSection = () => {
    return(
        <div>
            <Header>
                <hr className="line-left"></hr>
                <Title>
                    <h4>CONHEÇA NOSSOS ESPECIALISTAS</h4>
                </Title>
                <hr className="line-rigth"></hr>
            </Header>
            <Specialist>
                <div>
                    <img src="https://images.pexels.com/photos/7681290/pexels-photo-7681290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
                    <h4>Lorem Ipsum is simply</h4>
                    <span>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</span>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/7681290/pexels-photo-7681290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
                    <h4>Lorem Ipsum is simply</h4>
                    <span>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</span>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/7681290/pexels-photo-7681290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
                    <h4>Lorem Ipsum is simply</h4>
                    <span>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</span>
                </div>
            </Specialist>
        </div>
    )
}
export const Specialist = styled.div`
    display:flex;    
    align-items: normal;
    text-align: center;
    img{
        border-radius:50%;
        width:60%;
        height:50%;
        position: relative;
    }
    h4{
        margin-top:25px;
        font-size:24px;
        color: #E6112B;
    }
    span{
        font-size:14px;
        color:#fff;
        padding:25px;
        width:30%;
    }
`;
export default SpecialistSection