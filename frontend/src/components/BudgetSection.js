import React from 'react';
import styled from "styled-components";

const BudgetSection = () =>{
    return(
        <div>
            <Header>
                <hr className="line-left"></hr>
                <Title>
                    <h4><span>faça o seu orçamento</span> <span>com a gente</span></h4>
                </Title>
                <hr className="line-rigth"></hr>
            </Header>
            <BackgImage>
                <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</p>
                    <button>Solicitar Agora</button>
                </div>
            </BackgImage>
        </div>
    )
}
export const Header = styled.div`
    margin:5%; 
    padding-top: 5%;  
    .line-left{
        width: 55%;
        margin-left: -6%;
        background:#E6112B;
        border: 1px solid #E6112B;
    }
    .line-rigth{
        width:33%;
        float:right;
        margin-right: -6%;
        margin-top: -11px;
        background:#E6112B;
        border: 1px solid #E6112B;
    }
`;
export const Title = styled.div`
    text-align: center;
    margin-top: -87px;
    margin-left: 22%;
    h4{
        display:flex;
        flex-direction:column;
        text-transform:uppercase;
        color:#E6112B;
        font-size:36px;
    }
`;
export const BackgImage = styled.div`
    background-image: url("./images/solicitacao.png");
    background-color: #cccccc;
    background-repeat: no-repeat;
    background-position: center;
    opacity: .6;
    width: 100%;
    background-size: cover;
    position: relative;
    height: 500px;
    p{
        color:#fff;
        width: 42%;
        padding-left: 20rem;
        padding-top: 7%;
    }
    button{
        background-color: #eb1c23;
        border: 1px solid #eb1c23;
        margin-left: 20%;
    }
`;
export default BudgetSection