// mengimpor modul-modul yang diperlukan
import PropTypes from "prop-types";

//membuat arrow function untuk button yang bersifat reusable components
const Button = ({ text }) => {
  return (
    <button className="bg-baseColor hover:bg-green-900 text-white font-bold py-2 px-10 rounded-md">
      {text}
    </button>
  );
};

//untuk memastikan bahwa properti yang diberikan ke komponen sesuai dengan tipe data
Button.propTypes = {
  text: PropTypes.node.isRequired,
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik 
export default Button;