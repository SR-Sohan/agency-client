import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import './WorkSlider.css';

//Fake Images
const carouselImg = [
    {
        id: 1,
        img: carousel1
    },
    {
        id: 2,
        img: carousel2
    },
    {
        id: 3,
        img: carousel3
    },
    {
        id: 4,
        img: carousel4
    },
    {
        id: 5,
        img: carousel5
    },
];

//Slider Settings
const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

const WorkSlider = () => {
    return (
        <div className="work-slider d-flex align-items-center justify-content-center mt-5">
            <Container > 
            <h1 style={{color: '#fff'}} className="text-center brand-text">Here are some of <span style={{color: '#7AB259'}}>our works</span></h1>
                <Slider {...settings}>
                   {
                       carouselImg.map( img => <div key={img.id} className="single-slide"> 
                           <img  className="img-fluid mb-5" src={img.img} alt=""/>
                       </div>)
                   }
                </Slider>
            </Container>
        </div>
    );
};

export default WorkSlider;