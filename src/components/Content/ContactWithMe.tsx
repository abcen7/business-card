import React from 'react';
import { translate } from '../../utils';

const ContactWithMe: React.FC = () => {
  return (
    <>
      <div className="content__category">
        <span className="heading_title">{translate().contactWithMe.title}</span>
        <div className="category_description">
          <div className="contact_telegram">
              <p>{translate().contactWithMe.description}</p>
            <a href="https://t.me/abcen7">
              <img
                className="telegram_gif"
                src={process.env.PUBLIC_URL + "/images/telegram.gif"}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactWithMe;