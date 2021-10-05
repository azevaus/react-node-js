import React from 'react';
import styled from 'styled-components';
const Solar = ()=>{
    return (
        <SectionSolar>            
            <div>
                <h1>SOLAR</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, proin vehicula commodo fermentum. In eu sit suspendisse odio aliquet vestibulum, feugiat. Ipsum tellus sapien amet sed enim morbi. Dictum volutpat, luctus venenatis quam dui nisi, facilisi sapien vitae.</p>
            </div>
            <div>
                <img src="../../images/solar.png"></img>
            </div>
        </SectionSolar>
    )
}
const SectionSolar = styled.div`
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
export default Solar