import React from 'react';
import Slider from "react-slick";
import Testimonial from "./Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <span className="heading_title">Testimonials</span>
      <div className="testimonials">
        <Slider
          {...sliderSettings}
          className="slider"
        >
          <Testimonial
            customer={{
              customerName: "Rodion Vikol",
              customerJob: "CEO of Bivreost",
              customerAvatarPath: "/images/rodion_sergeevich.jpg"
            }}
            testimonial={{
              description: '"Most people just talk about it when they have a problem, but Kirill is not like that. I like that along with the occurrence of a problem, he suggests a way to solve it.I think this is one of the important skills"'
            }}
          />
          <Testimonial
            customer={{
              customerName: "Andrew Ananiev",
              customerJob: "CEO of LLC Civilist",
              customerAvatarPath: "/images/andrew_gennadievich.jpg"
            }}
            testimonial={{
              description: '"Our work with Kirill is productive. In a short time, he created a project from scratch according to a given technical task and still supports it"'
            }}
          />
          <Testimonial
            customer={{
              customerName: "Rodion Vikol",
              customerJob: "CEO of Bivreost",
              customerAvatarPath: "/images/rodion_sergeevich.jpg"
            }}
            testimonial={{
              description: '"Most people just talk about it when they have a problem, but Kirill is not like that. I like that along with the occurrence of a problem, he suggests a way to solve it. I think this is one of the important skills"'
            }}
          />
          <Testimonial
            customer={{
              customerName: "Daniel Wilson",
              customerJob: "Chief designer of Bivreost",
              customerAvatarPath: "/images/daniel_wilson.png"
            }}
            testimonial={{
              description: '"Kirill is very pleasant to work with, he works great in a team, it is very easy to interact with him"'
            }}
          />
          <Testimonial
            customer={{
              customerName: "Andrew Blight",
              customerJob: "Backend developer of Bivreost",
              customerAvatarPath: "/images/andrey_blight.jfif"
            }}
            testimonial={{
              description: '"Kirill is a competent developer, he has high leadership skills, and he also manages the team perfectly"'
            }}
          />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;