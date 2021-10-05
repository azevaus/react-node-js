import React from "react";
import styled from "styled-components";
const Brafix = ()=>{
    return(
        <div>
            <SectionBrafix>
                <div className="headerBrafix">
                    <h1>Brafix - Suporte Tipo Fixo</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi, porta sed diam. Sollicitudin amet turpis nulla nisl, pellentesque enim. Nibh nec odio quisque quis elit, nullam. Morbi mi, amet pellentesque volutpat.
                    </p>
                    <button>FAÇA UM ORÇAMENTO</button>
                    <button>BAIXE O CATALÓGO</button>
                </div>
                <div>
                    <img src="./images/suporte.png"></img>
                </div>
            </SectionBrafix>
            <SectionTrackers>
                <div>
                    <img src="./images/trackers.png"></img>
                </div>
                <div className="headerTrackers">
                    <h1>Trackers</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi, porta sed diam. Sollicitudin amet turpis nulla nisl, pellentesque enim. Nibh nec odio quisque quis elit, nullam. Morbi mi, amet pellentesque volutpat.
                    </p>
                    <button>FAÇA UM ORÇAMENTO</button>
                    <button>BAIXE O CATALÓGO</button>
                </div>                
            </SectionTrackers>
            <SectionMono>                
                <div className="headerMono">
                    <h1>Monofileiras</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi, porta sed diam. Sollicitudin amet turpis nulla nisl, pellentesque enim. Nibh nec odio quisque quis elit, nullam. Morbi mi, amet pellentesque volutpat.
                    </p>
                    <button>FAÇA UM ORÇAMENTO</button>
                    <button>BAIXE O CATALÓGO</button>
                </div>
                <div>
                    <img src="./images/monofileira.png"></img>
                </div>
            </SectionMono>
        </div>
    )
}
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
const SectionMono = styled.div`
    display:flex;
    justify-content:space-around;
    .headerMono{
        padding: 2.5% 0 0 6%;
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
export default Brafix