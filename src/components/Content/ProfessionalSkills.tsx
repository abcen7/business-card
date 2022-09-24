import React from 'react';

const ProfessionalSkills = () => {
  return (
    <div className="content__category">
      <span className="heading_title">My stack</span>
      <div className="category_description">
        <p>I have knowledge in 4 programming languages: Python, PHP, JavaScript, TypeScript</p>
        <div className="list_languages">
          <img src={process.env.PUBLIC_URL + "/images/python.png"} alt=""/>
          <img src={process.env.PUBLIC_URL + "/images/php.png"} alt=""/>
          <img src={process.env.PUBLIC_URL + "/images/js.png"} alt=""/>
          <img src={process.env.PUBLIC_URL + "/images/ts.png"} alt=""/>
        </div>
        <div className="list_technologies">
          <p className="heading_subtitle">Backend</p>
          <div>
            <img width="32px" src={process.env.PUBLIC_URL + "/images/flask.png"} alt=""/>
            <img width="128px" src={process.env.PUBLIC_URL + "/images/fastapi.png"} alt=""/>
            <img width="96px" src={process.env.PUBLIC_URL + "/images/laravel.png"} alt=""/>
          </div>
          <p className="heading_subtitle">Frontend</p>
          <div>
            <img width="96px" src={process.env.PUBLIC_URL + "/images/react.png"} alt=""/>
            <img width="48px" src={process.env.PUBLIC_URL + "/images/scss.png"} alt=""/>
            <img width="32px" src={process.env.PUBLIC_URL + "/images/css.png"} alt=""/>
          </div>
          <p className="heading_subtitle">Databases</p>
          <div>
            <img width="64px" src={process.env.PUBLIC_URL + "/images/mysql.png"} alt=""/>
            <img width="32px" src={process.env.PUBLIC_URL + "/images/postgresql.png"} alt=""/>
          </div>
          <p className="heading_subtitle">Other</p>
          <div>
            <img width="64px" src={process.env.PUBLIC_URL + "/images/git.png"} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkills;