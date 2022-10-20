import React from 'react';
import {translate} from "../../utils";

const AboutMe = () => {

    return (
        <div className="content__category">
            <span className="heading_title">{ translate().aboutMe.title }</span>
            <p className="category_description">
                { translate().aboutMe.description }
            </p>
        </div>
    );
};

export default AboutMe;