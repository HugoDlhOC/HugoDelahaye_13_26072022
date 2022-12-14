import PropTypes from "prop-types";

/**
 * component Guarantee represent one Guarantee of a bank
 * @param imgSrc
 * @param imgAlt
 * @param title
 * @param content
 * @returns {JSX.Element}
 */
export const Guarantee = ({ imgSrc, imgAlt, title, content }) => {
  return (
    <div className="feature-item">
      <img src={imgSrc} alt={imgAlt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

Guarantee.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
