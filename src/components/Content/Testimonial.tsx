import React from 'react';

interface ITestimonialProps {
  customer: {
    customerName: string,
    customerJob: string,
    customerAvatarPath: string,
  },
  testimonial: {
    description: string
  }
}

const Testimonial: React.FC<ITestimonialProps> = (props: ITestimonialProps) => {
  return (
    <div className="testimonial">
      <div className="testimonial__customer">
        <div className="customer__description">
          <h3 className="description__name">{props.customer.customerName}</h3>
          <p className="description__job">{props.customer.customerJob}</p>
        </div>
        <img
          className="testimonial__avatar"
          src={process.env.PUBLIC_URL + props.customer.customerAvatarPath}
          alt=""
        />
      </div>
      <div className="testimonial__description">
        <p>{props.testimonial.description}</p>
      </div>
    </div>
  );
};

export default Testimonial;