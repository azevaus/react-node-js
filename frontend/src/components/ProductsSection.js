import React from "react";
import styled from "styled-components";
const ProductsSection = ()=>{
    return(
        <div>
            <Description>
                <h3>Soluções para projetos inteligentes</h3>
                <h2>Nossos projetos</h2>                
            </Description>   
            <Line></Line>         
            <div>
                <Images>
                    <SectionImage>
                        <img src="./images/services4.png"></img>
                        <h4>Energia</h4>
                        <span>TRANSMISSÃO, GERAÇÃO E DISTRIBUIÇÃO</span>
                    </SectionImage>        
                    <SectionImage>
                        <img src="./images/services2.png"></img>
                        <h4>Solar</h4>
                    </SectionImage>
                    <SectionImage>
                        <img src="./images/services3.png"></img>
                        <h4>Telecon</h4>
                    </SectionImage>
                    <SectionImage>
                        <img src="./images/services5.png"></img>
                        <h4>Iluminação pública</h4>
                    </SectionImage>
                    <SectionImage>
                        <img src="./images/services6.png"></img>
                        <h4>Serviços</h4>
                        <span>galvanização e ensaios</span>
                    </SectionImage>            
                </Images>
            </div>
        </div>
    )
}
export const Description = styled.div`
    display:flex;
    flex-direction:column;
    align-items:end;
    margin-right:7%;
    padding-top:3%;
`;
export const Images = styled.ul`
    display:flex;
    list-style: none;
    flex-direction:unset;
    margin-top:5%;   
`;
export const SectionImage = styled.li`
    width: 348px;
    height: 505px;
    cursor:ponter;
    transition: all 1.3s ease;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    &:hover img{
        z-index:9999;
        transform:scale(1.1);
    }
    img{
        position: absolute;
        width: 348px;
        height: 505px;     
        cursor:pointer;
        transition: all 1.3s ease;   
    }
    h4{
        display:block;
        text-transform:uppercase;
        position:relative;
        font-weight:700;
        color:#fff;
        font-size: 30px;
        width: 50%
    }
    span{
        display:block;
        position:relative;
        text-transform:uppercase;
        color:white;
        font-size:24px;
        width: 50%
    }
    li:hover h4{
        display:none;
    }

`;
export const Line = styled.hr`
    background: #E6112B;
    border: solid 1px #E6112B;
    width:882px;
    margin-top:-1.2%;
`;
export default ProductsSection