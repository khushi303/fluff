'use client'
import { Container } from "react-bootstrap";
import React from "react";
import Slider from "react-slick";
import { Slides } from "./common/MapData";
import { BlueStar } from "./common/Icon";

export default function WhatWeDo() {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4.7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div id="about" className="mw_1920 pt_xl_199 pt-5 mt-xl-0 mt-lg-4 mt-3 mx-auto">
                <Container className="custom_container position-relative d-flex align-items-center  justify-content-center flex-column">
                    <h2 data-aos="fade-right" className="text_xl fw-normal ff_bakbak leading_130 text-center header_shadow mb-0">What We Do</h2>
                    <div className="d-inline-block mx-auto position-relative ">
                        <p data-aos="fade-right" className="text_sm fw-normal leading_150 text-center mw_810 mx-auto text-capitalize text_lightgray100 mb-0 mt_20 position-relative d-inline-block">We specialize in helping businesses create exceptional customer experiences that drive loyalty,
                            growth, and success. Our team of experts works closely with you to understand your unique
                            challenges and goals, and then develop tailored strategies to elevate your customer experience. </p>
                        <div className="position-absolute left_whatstar">
                            <BlueStar />
                        </div>
                    </div>
                </Container>
                <div className="position-relative z-1 pt_lg_50 pt-4">
                    <div className="position-absolute right_whatstar d-xl-block d-none">
                        <BlueStar />
                    </div>
                    <Slider {...settings}>
                        {Slides.map((data, id) => {
                            return (
                                <div data-aos="zoom-in" key={id} className="px_12 cur_pointer">
                                    <div className="w-100 slide_box d-flex align-items-center justify-content-center flex-column bg_lightblue">
                                        <div className="mb-1">
                                            {data.svg}
                                        </div>
                                        <p className="leading_140 ff_bakbak fw-normal text-center text_md text-black my-2">{data.heading}</p>
                                        <p className="text-center text_sm fw-normal leading_150 text_lightgray100 mb-0">{data.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}