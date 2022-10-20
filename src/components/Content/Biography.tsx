import React from 'react';
import { translate } from '../../utils';

const Biography = () => {
  return (
    <>
      <span className="content__block">{translate().biography.block}</span>
      <div className="main_biography">
        <div className="main_biography__titles">
          <h1 className="titles__title">{translate().biography.title}</h1>
          <p className="titles__subtitle">{translate().biography.subtitle}</p>
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