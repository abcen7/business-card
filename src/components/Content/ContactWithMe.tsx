import React from 'react';

const ContactWithMe: React.FC = () => {
  return (
    <>
      <div className="content__category">
        <span className="heading_title">Contact with me</span>
        <div className="category_description">
          <div className="contact_telegram">
            <p>If You want to work with me You can message to me on telegram</p>
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