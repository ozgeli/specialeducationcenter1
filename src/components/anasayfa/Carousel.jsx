import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800, // A bit slower transition for a smooth fade effect
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true, // Enable fade effect
        cssEase: 'linear',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div className="carousel-item">
                    <img src="/images/slide1.jpg" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                    <img src="/images/slide2.jpg" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src="/images/slide3.jpg" alt="Slide 3" />
                </div>
                <div className="carousel-item">
                    <img src="/images/slide4.jpg" alt="Slide 4" />
                </div>
            </Slider>
        </div>
    );
}

// Custom arrow components for slick slider
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

export default Carousel;
