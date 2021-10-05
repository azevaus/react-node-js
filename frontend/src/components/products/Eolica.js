import React from 'react';
import styled from 'styled-components';
const Eolica = ()=>{
    return (
        <div>
            <SectionEolica> 
                <div>
                    <img src="../../images/eolica.png"></img>
                </div>           
                <div>
                    <h1>Eolica</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, proin vehicula commodo fermentum. In eu sit suspendisse odio aliquet vestibulum, feugiat. Ipsum tellus sapien amet sed enim morbi. Dictum volutpat, luctus venenatis quam dui nisi, facilisi sapien vitae.</p>
                </div>            
            </SectionEolica>
            <SectionBrafix>
            <div className="headerBrafix">
                <h1>Lorem Ipsum Dolor Sit</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi, porta sed diam. Sollicitudin amet turpis nulla nisl, pellentesque enim. Nibh nec odio quisque quis elit, nullam. Morbi mi, amet pellentesque volutpat.
                </p>
                <button>FAÇA UM ORÇAMENTO</button>
                <button>BAIXE O CATALÓGO</button>
            </div>
            <div>
                <img src="../../images/eolica1.png"></img>
            </div>
            </SectionBrafix>
            <SectionTrackers>
                <div>
                    <img src="../../images/eolica2.png"></img>
                </div>
                <div className="headerTrackers">
                    <h1>Lorem Ipsum Dolor Sit</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi, porta sed diam. Sollicitudin amet turpis nulla nisl, pellentesque enim. Nibh nec odio quisque quis elit, nullam. Morbi mi, amet pellentesque volutpat.
                    </p>
                    <button>FAÇA UM ORÇAMENTO</button>
                    <button>BAIXE O CATALÓGO</button>
                </div>                
            </SectionTrackers>
        </div>
    )
}
const SectionEolica = styled.div`
    background:#fff;
    height:550px;
    text-align:center;
    div{
        width:45%;
        float:right;
        margin: 140px 80px 0px 0px;
    }
    h1{
        font-size:48px;
        line-height: 59px;
    }
    p{
        font-size:24px;
        line-height:29px;        
    }
    img{
        width: 458px;
        height: 320px;  
        object-fit:cover; 
    }
`;
const SectionBrafix = styled.div`
    display:flex;
    justify-content:space-around;
    .headerBrafix{
        padding: 2.5% 0 0 6%;
        width: 45%;
        color:#fff;
    }
    button{
        background:#E6112B;
        margin-right:15px;
    }
    img{
        width: 776px;
        height: 436px;  
    }
`;
const SectionTrackers = styled.div`
    display:flex;
    justify-content:space-around;
    .headerTrackers{
        padding: 2.5% 6% 0 0;
        width: 45%;
        color:#fff;
    }
    button{
        background:#E6112B;
        margin-right:15px;
    }
    img{
        margin-top:1px;
        width: 776px;
        height: 436px;  
    }
`;
export default Eolica