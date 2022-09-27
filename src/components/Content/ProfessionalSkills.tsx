import React from 'react';

const ProfessionalSkills = () => {
  return (
    <div className="content__category">
      <span className="heading_title">My stack</span>
      <div className="category_description">
        <p>I have knowledge in 4 programming languages: Python, PHP, JavaScript, TypeScript</p>
        <div className="list_languages">
          <img src="https://img.shields.io/badge/-Python-black?style=for-the-badge&logo=python" alt=""/>
          <img src="https://img.shields.io/badge/-PHP-black?style=for-the-badge&logo=php" alt=""/>
          <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logo=typescript" alt=""/>
          <img src="https://img.shields.io/badge/-JavaScript-black?style=for-the-badge&logo=javascript" alt=""/>
          {/*![PHP](https://img.shields.io/badge/-PHP-black?style=for-the-badge&logo=php)*/}
          {/*![Laravel](https://img.shields.io/badge/-Laravel-black?style=for-the-badge&logo=laravel)*/}
          {/*![TypeScript](https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logo=typescript)*/}
          {/*![React.JS](https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react)*/}
          {/*![MySQL](https://img.shields.io/badge/-MySQL-black?style=for-the-badge&logo=mysql)*/}
          {/*![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logo=PostgreSQL)*/}
        </div>
        <div className="list_technologies">
          <p className="heading_subtitle">Backend</p>
          <div>
            <img src="https://img.shields.io/badge/-Flask-black?style=for-the-badge&logo=Flask" alt=""/>
            <img src="https://img.shields.io/badge/-FastAPI-black?style=for-the-badge&logo=fastapi" alt=""/>
            <img src="https://img.shields.io/badge/-Laravel-black?style=for-the-badge&logo=laravel" alt=""/>
          </div>
          <p className="heading_subtitle">Frontend</p>
          <div>
            <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react" alt=""/>
            <img src="https://img.shields.io/badge/-Sass-black?style=for-the-badge&logo=sass" alt=""/>
          </div>
          <p className="heading_subtitle">Databases</p>
          <div>
            <img src="https://img.shields.io/badge/-MySQL-black?style=for-the-badge&logo=mysql" alt=""/>
            <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logo=PostgreSQL" alt=""/>
          </div>
          <p className="heading_subtitle">Other</p>
          <div>
            <img src="https://img.shields.io/badge/-git-black?style=for-the-badge&logo=git" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkills;