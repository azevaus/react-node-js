import { createGlobalStyle} from 'styled-components';
const GlobalStyle= createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        background:#1b1b1b;
        overflow-x:hidden;
        text-decoration:none;
    }
    button{
        font-weight:100w;
        font-size:1.1rem;
        cursor:pointer;
        padding: 1rem 2rem;
        backgound:#E6112B;
        color:#fff;
        border-radius:15px;
        transition: all 0.5s ease;
        &:hover{
            padding:1.1rem 2.1rem
        }
    }
    h2{
        font-style: normal;
        font-weight: 800;
        font-size: 39px;
        line-height: 70px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #E6112B;
    }
    h3{
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
        color: #FFFFFF;
    }
    h4{
        font-weight:bold;
        font-size:1.2rem;
        color:white;
    }
    a{
        font-size:1.1rem;
    }
    span{
        font-weight:lighter;
        color: #E6112B
    }
    p{ 
        padding: 3rem 0rem;
        color: #ccc;
        font-size:1.4rem;
        line-height:150%;
    }
    .header{
        margin:5%; 
        padding-top: 5%; 
    }
    .title{
        text-align: center;
        margin-top: -39px;
    }
    .line-left{
        width: 25%;
        margin-left: -6%;
        background:#E6112B;
        border: 1px solid #E6112B;
    }
    .line-rigth{
        width:25%;
        float:right;
        margin-right: -6%;
        margin-top: -11px;
        background:#E6112B;
        border: 1px solid #E6112B;
    }
`;
export default GlobalStyle;