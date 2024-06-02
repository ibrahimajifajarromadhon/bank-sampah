// mengimpor modul-modul yang diperlukan
import img from "../assets/img/start.svg";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

//sebuah arrow function untuk mengatur halaman awal/start
const StartPage = () => {
  return (
    <>
    <Navbar />
      <div className="flex justify-center items-center px-10 h-screen">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">
            SELAMAT DATANG DI BANK SAMPAH!
          </h1>
          <p className="text-lg mt-5">
            Ubah barang tidak terpakai menjadi sesuatu yang lebih berharga
          </p>
          <div className="flex flex-col mt-10">
            <a href="/login" className="mb-3">
              <Button text="LOGIN" />
            </a>
            <a href="/register">
              <Button text="START" />
            </a>
          </div>
        </div>
        <div className="w-3/4 flex justify-center items-center">
          <img src={img} alt="" className="w-96 h-96" />
        </div>
      </div>
    </>
  );
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik 
export default StartPage;