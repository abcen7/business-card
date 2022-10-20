import React from 'react';
import {translate} from '../../utils';

const PersonalSkills = () => {
    return (
        <div className="content__category">
            <span className="heading_title">{translate().personalSkills.title}</span>
            <ul className="category_description"
                dangerouslySetInnerHTML={{__html: translate().personalSkills.description}}>
            </ul>
        </div>
    );
};

export default PersonalSkills;