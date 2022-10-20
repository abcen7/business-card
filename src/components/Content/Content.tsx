import React from 'react';
import Animation from "./Animation";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import ProfessionalSkills from "./ProfessionalSkills";
import PersonalSkills from "./PersonalSkills";
import Biography from "./Biography";
import Testimonials from "./Testimonials";
import ContactWithMe from "./ContactWithMe";

const Content = () => {
    return (
        <div className="content">
            <Animation/>
            <Biography/>
            <AboutMe/>
            <Resume/>
            <ProfessionalSkills/>
            <PersonalSkills/>
            <Testimonials/>
            <ContactWithMe/>
        </div>
    );
};

export default Content;