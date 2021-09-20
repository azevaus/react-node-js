import React from 'react';
import styled from 'styled-components';
//Nacvigation
import {Link} from 'react-router-dom'
const Nav = ()=>{
    const menuOptions ={
        home: 'A empresa',
        products: 'Produtos',
        contact: 'Contato',
        partnership: 'Área do parceiro',
        budget: 'Faça seu orçamento'
    }
    return(
        <StyledNav>
            <h1><Link to="/">Brametal</Link></h1>
            <ul>
                <li><Link to="/">{menuOptions.home}</Link></li>
                <li><Link to="/products">{menuOptions.products}</Link></li>
                <li><Link to="">{menuOptions.contact}</Link></li>
                <li><Link to="">{menuOptions.partnership}</Link></li>
                <li><Link to="">{menuOptions.budget}</Link></li>
            </ul>
        </StyledNav>
    )
}
const StyledNav = styled.nav`
    min-height:10vh;
    display:flex;
    margin:auto;
    justify-content:space-between;
    align-items:center;
    padding:1rem 10rem;
    background:#282828;
    color:#fff;
    position:sticky;
    top:0;
    ul{
        display:flex;
        list-style:none;        
    }
    li{
        padding-left:2rem;
    }
    a{
        color:#fff;
        text-decoration:none
    }
    a:hover{
        color:#eb1c23;
    }
`;
export default Nav