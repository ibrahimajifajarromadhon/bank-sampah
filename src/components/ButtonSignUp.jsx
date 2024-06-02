// mengimpor modul-modul yang diperlukan
import PropTypes from "prop-types";
import google from "../assets/img/google.svg";
import facebook from "../assets/img/fb.svg";

//membuat arrow function untuk button sign up yang bersifat reusable components
const ButtonSignUp = ({ logo, text }) => {
  return (
    <>
      {logo === "google" ? (
        <button className="bg-white text-black text-sm font-bold py-2 px-4 rounded mt-4 flex items-center justify-center">
          <img src={google} alt="Google Logo" className="w-6 h-8 mr-2" />
          {text}
        </button>
      ) : (
        <button className="bg-blue text-white text-sm font-bold py-2 px-4 rounded mt-4 flex items-center justify-center mx-5">
          <img src={facebook} alt="Facebook Logo" className="w-6 h-8 mr-2" />
          {text}
        </button>
      )}
    </>
  );
};

//untuk memastikan bahwa properti yang diberikan ke komponen sesuai dengan tipe data
ButtonSignUp.propTypes = {
  logo: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik 
export default ButtonSignUp;