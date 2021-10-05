import React from 'react';
import styled from 'styled-components';
const Footer = ()=>{
    return(
        <SectionFooter>
            <div className="identidade">
                <div>
                    <img src="./images/logo1.png"></img>
                </div>
                <div>
                    ICONES DAS REDES SOCIAIS
                </div>
            </div>
            <div className="menuFooter">
                <div>
                    <span>A empresa</span>
                    <ul>                        
                        <li><a href="/">Sobre nós</a></li>
                        <li><a href="/">Eventos</a></li>
                        <li><a href="/">Cases de sucesso</a></li>
                    </ul>
                    <span>Carreira RH</span>
                    <ul>                        
                        <li><a href="/">Trabalhe conosco</a></li>
                    </ul>
                    <span>Brametal na mídia</span><br></br>
                    <span>Blog</span>
                </div>
                <div>
                    <span>Produtos</span>
                    <ul>                        
                        <li><a href="/">Energia: Torres e Postes</a></li>
                        <li><a href="/">Energias Renováveis</a></li>
                        <li><a href="/">Iluminação Pública</a></li>
                        <li><a href="/">Telecom</a></li>
                        <li><a href="/">Serviços</a></li>
                        <li><a href="/">Outros</a></li>
                    </ul>
                </div>
            </div>
        </SectionFooter>
    )
}
const SectionFooter = styled.nav`
    display:flex;
    justify-content:space-around;
    align-items:center;
    color:#fff;
    margin-top: 50px;
    .identidade{
        text-align:center;
        margin-left: 60px;
        margin-top: -60px;
    }
    div img{
        margin-top:50px;
        margin-bottom:30px;
    }
    .menuFooter div{
        font-style: normal;
        font-size: 18px;
        line-height: 30px;
        text-transform: capitalize;
    }
    .menuFooter{
        margin: 50px 0px;
        display:flex;
    }
    .menuFooter ul{
        list-style:none;
        margin-right:90px;
    }
    .menuFooter a{
        color:#fff;
        text-decoration:none;
    }
`;
export default Footer