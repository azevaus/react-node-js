import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "./images/slider1.png" },
    { url: "images/2.jpg" },
    { url: "images/3.jpg" },
    { url: "images/4.jpg" },
    { url: "images/5.jpg" },
  ];

const Slider = () =>{
    return(
        <div>
            <SimpleImageSlider
                width={1720}
                height={740}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    )
}
export default Slider