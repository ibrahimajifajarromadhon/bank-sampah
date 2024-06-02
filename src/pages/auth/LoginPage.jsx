// mengimpor modul-modul yang diperlukan
import BankSampah from "../../components/BankSampah";
import trash from "../../assets/img/trash.svg";
import ButtonSignUp from "../../components/ButtonSignUp";

//sebuah arrow function untuk halaman login
const LoginPage = () => {
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
          <p className="text-3xl font-bold text-white">Login.</p>
          <div className="flex mt-3">
            <ButtonSignUp logo="google" text="Sign in with Google" />
            <ButtonSignUp logo="facebook" text="Sign in with Facebook" />
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
            <div className="flex flex-row text-white text-sm">
              <input type="checkbox" className="w-4 h-4 my-auto" />
              <p className="mx-2 font-extralight">Remember me</p>
            </div>
            <a href="/home">
              <button className="text-baseColor bg-white w-full h-12 rounded-md font-bold my-20">
                Login
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik 
export default LoginPage;