import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material"
import img3 from "./Img/incredible-india.jpg"
import img4 from "./Img/know-school-banner.jpg"
import img5 from "./Img/modi.jpg"
import img6 from "./Img/ppc24-1.jpg"
// import img7 from "./Img/."
import { FaCaretDown } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Responsive() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    let caruslimgs = [
        { imga: img3, widt: 100 },
        { imga: img4, widt: 100 },
        { imga: img5, widt: 100 },
        { imga: img6, widt: 100 },
    ]
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    {/* {caruslimgs.map((v, i) => { */}
                        // <div key={i}>
                        {/* <Box component="img" src={v.imga} sx={{ width: "100px", height: "100px" }} /> */}
                        // </div>
                    {/* })} */}
                    nabbagay
                </div>

                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
            </Slider>
        </div>
    );
}

export default Responsive;
