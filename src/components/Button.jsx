import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button className="bg-baseColor hover:bg-green-900 text-white font-bold py-2 px-10 rounded-md">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.node.isRequired,
};

export default Button;