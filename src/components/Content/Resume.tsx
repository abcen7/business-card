import React from 'react';
import {translate} from '../../utils';

const Resume: React.FC = () => {
    return (
        <div className="content__category">
            <span className="heading_title">{translate().resume.title}</span>
            <ul className="category_description">
                <li>{translate().resume.phrases.schoolOfYoungManager}</li>
                <li>{translate().resume.phrases.yandexLyceum}</li>
                <li>{translate().resume.phrases.civilist}<b>{translate().resume.phrases.civilistJob}</b></li>
                <li>
                    «Bivreost»
                    <a
                        target="_blank"
                        href="https://twitter.com/bivreost" rel="noreferrer">
                        <img
                            className="twitter_gif"
                            src={process.env.PUBLIC_URL + "/images/twitter.gif"}
                            alt=""
                        />
                    </a>
                    {translate().resume.phrases.bivreostJobTime}<b>{translate().resume.phrases.bivreostJob}</b></li>
            </ul>
        </div>
    );
};

export default Resume;