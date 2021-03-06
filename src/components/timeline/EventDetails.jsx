import React from 'react';
import PropTypes from 'prop-types';
import './EventDetails.css';
import Image from 'react-bootstrap/Image';
import imagePlaceholder from '../../resources/image-placeholder.jpeg';

const EventDetails = ({ date, description, title }) => {
  return (
    <div className="event-details-container">
      <div className="event-details-content">
        <Image className="event-details-image" src={imagePlaceholder} fluid />
        <div className="event-details-date-container">
          <div className="line2" />
          <svg
            className="event-details-svg"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <circle
              cx="50%"
              cy="50%"
              r="35"
              stroke="black"
              strokeWidth="18"
              fill="white"
            />
          </svg>
          <div className="event-details-date">{date}</div>
        </div>
        <div className="event-details-title">{title}</div>
        <div className="event-details-description">{description}</div>
      </div>
      <div className="event-details-svg">
        <div className="line1" />
      </div>
    </div>
  );
};

EventDetails.propTypes = {
  controllers: PropTypes.shape({
    moveNext: PropTypes.func,
  }),
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

EventDetails.defaultProps = {
  controllers: {},
  date: '',
  description:
    'Aung San founded The Communist Party of Burma and The Burmese Revolutionary Party (which later became the Socialist Party). Him and 29 other members traveled to Japan to train alongside the expanding Japanese military. ',
  title: 'The Thirty Comrades',
};

export default EventDetails;
