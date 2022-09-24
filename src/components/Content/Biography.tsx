import React from 'react';

const Biography = () => {
  return (
    <>
      <span className="content__block">Hello, I am fullstack web developer based in Russia!</span>
      <div className="main_biography">
        <div className="main_biography__titles">
          <h1 className="titles__title">Kirill Sermyagin</h1>
          <p className="titles__subtitle">Fullstack Web Developer</p>
        </div>
        <img
          className="main_biography__avatar"
          src={process.env.PUBLIC_URL + "/images/me_avatar.png"}
          alt=""
        />
      </div>
    </>
  );
};

export default Biography;