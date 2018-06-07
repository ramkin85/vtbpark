import React from "react";
import Slider from "react-slick";

import "./../../../node_modules/slick-carousel/slick/slick.css";
import "./../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./Banner.css";

class Banner extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div>
                    <img width="100%" alt="900x500" src="/banner/banner1.jpg" />
                </div>
                <div>
                    <img width="100%" alt="900x500" src="/banner/banner2.jpg" />
                </div>
            </Slider>
        );
    }
}


 export default Banner;