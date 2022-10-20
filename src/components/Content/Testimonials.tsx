import React from 'react';
import Slider from "react-slick";
import Testimonial from "./Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {translate} from '../../utils';

const Testimonials: React.FC = () => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="content__category">
            <span className="heading_title">{translate().testimonials.title}</span>
            <div className="testimonials">
                <Slider
                    {...sliderSettings}
                    className="slider"
                >
                    <Testimonial
                        customer={{
                            customerName: translate().testimonials.rodionVikol,
                            customerJob: translate().testimonials.ceoOfBivreost,
                            customerAvatarPath: "/images/rodion_sergeevich.jpg"
                        }}
                        testimonial={{
                            description: translate().testimonials.rodionVikolTestimonial
                        }}
                    />
                    <Testimonial
                        customer={{
                            customerName: translate().testimonials.andrewAnaniev,
                            customerJob: translate().testimonials.ceoOfCivilist,
                            customerAvatarPath: "/images/andrew_gennadievich.jpg"
                        }}
                        testimonial={{
                            description: translate().testimonials.andrewAnanievTestimonial,
                        }}
                    />
                    <Testimonial
                        customer={{
                            customerName: translate().testimonials.danielWilson,
                            customerJob: translate().testimonials.chiefDesignerOfBivreost,
                            customerAvatarPath: "/images/daniel_wilson.png"
                        }}
                        testimonial={{
                            description: translate().testimonials.danielWilsonTestimonial,
                        }}
                    />
                    <Testimonial
                        customer={{
                            customerName: translate().testimonials.andrewBlight,
                            customerJob: translate().testimonials.backendDeveloper,
                            customerAvatarPath: "/images/andrey_blight.jfif"
                        }}
                        testimonial={{
                            description: translate().testimonials.andrewBlightTestimonial,
                        }}
                    />
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;