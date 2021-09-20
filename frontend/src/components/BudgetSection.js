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
export default BudgetSection