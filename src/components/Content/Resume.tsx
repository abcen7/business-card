import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="content__category">
      <span className="heading_title">Resume</span>
      <ul className="category_description">
        <li>«School Of Young Manager» [2019 - 2020] Studied as a php developer</li>
        <li>«Yandex.Lyceum» [2020 - 2022] Studied as a python developer</li>
        <li>«LLC Civilist» [2022 - to present] as a <b>fullstack web developer</b></li>
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
          [2022 - to present] as a <b>technical director</b></li>
      </ul>
    </div>
  );
};

export default Resume;