import React from 'react';
import styled from 'styled-components';
const NewsSection = () =>{
    return(
        <div>
            <Header>
                <CardsText>
                    <h2>Novidades</h2>
                </CardsText>
                <hr></hr>
            </Header>
            <Cards>
                <Card>                
                    <div className="head">
                        <h3>Últimas notícias</h3>
                        <h2>Lorem Ipsum is simply</h2>
                    </div>
                    <div>
                        <img src="./images/blog1.png"></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                        <button>ler notícia completa</button>
                    </div>
                </Card>
                <Card>                
                    <div className="head">
                        <h3>Blog Brametal</h3>
                        <h2>Lorem Ipsum is simply</h2>
                    </div>
                    <div>
                        <img src="./images/blog2.png"></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                        <button>continue lendo</button>
                    </div>
                </Card>
                <Card>                
                    <div className="head">
                        <h3>Últimas notícias</h3>
                        <h2>Lorem Ipsum is simply</h2>
                    </div>
                    <div>
                        <img src="./images/blog1.png"></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                        <button>ler notícia completa</button>
                    </div>
                </Card>
            </Cards>
        </div>
    )
}
export const Header = styled.div`
    display: flex;  
    flex-direction:column;
    padding: 4rem 2rem;
    hr{
        width:1198px;
        margin-left:30%;
        margin-top:-1.2%;
        background: #fff;
        border: solid 1px #fff;
        flex:2;
    }
`;
export const CardsText = styled.div`
    h2{
        float:left;
        color:#fff;
        margin-left:3%;
        flex:1;
    }
`;
export const Cards = styled.div`
    display:flex;
    justify-content:space-between;
    aling-items:center;
    margin: 1rem 4rem;
`;
export const Card = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:auto;
    .head{
        margin-left:-30%;
    }
    h3{
        font-size:18px;
        text-transform:uppercase;
    }
    h2{
        font-size:25px;
        color:#E6112B;
    }
    img{
        padding:1rem;
        width: 95%; 
    }
    p{
        font-size:18px;
        padding:12px 30px 25px 15px;
    }
    button{
        background:#E6112B;
        margin-left: 23%;
        margin-top:10px;
        border:none;
        font-size:16px;
        text-transform:uppercase;
    }
`; 

export default NewsSection