// mengimpor modul-modul yang diperlukan
import BankSampah from "../../components/BankSampah";
import trash from "../../assets/img/trash.svg";
import ButtonSignUp from "../../components/ButtonSignUp";

//sebuah arrow function untuk halaman register
const RegisterPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2">
        <BankSampah />
        <div className="flex items-center">
          <img src={trash} alt="" />
        </div>
      </div>
      <div className="w-3/4 bg-baseColor">
        <div className="flex flex-col items-start mx-36 my-20">
          <p className="text-3xl font-bold text-white">Get`s started.</p>
          <div className="flex text-white text-md my-2">
            <p className="font-extralight">Already have an account?</p>
            <a href="/login" className="font-bold ml-2">
              Log in
            </a>
          </div>
          <div className="flex">
            <ButtonSignUp logo="google" text="Sign up with Google" />
            <ButtonSignUp logo="facebook" text="Sign up with Facebook" />
          </div>

          <div className="flex justify-between my-5 w-full">
            <div className=" bg-white h-px w-1/2 my-3"></div>
            <div className="text-white font-bold">or</div>
            <div className=" bg-white h-px w-1/2 my-3"></div>
          </div>
          <div className="flex flex-col w-full font-plus-jakarta-sans">
            <input
              type="text"
              placeholder="Username"
              className="p-5 rounded-md h-12"
            />
            <input
              type="password"
              placeholder="Password"
              className="my-4 p-5 rounded-md h-12 "
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-5 rounded-md h-12"
            />
            <div className="flex flex-row my-5 text-white text-sm">
              <input type="checkbox" className="w-4 h-4 my-auto" />
              <p className="mx-2 font-extralight">I agree to platforms</p>
              <p className="font-bold">Terms of service</p>
              <p className="mx-2">and</p>
              <p className="font-bold">Privacy policy</p>
            </div>
            <a href="/login">
              <button className="text-baseColor bg-white w-full h-12 rounded-md font-bold">
                Sign Up
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik 
export default RegisterPage;