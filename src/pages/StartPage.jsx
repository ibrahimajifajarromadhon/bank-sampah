import img from "../assets/img/start.svg";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const StartPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center px-10">
        <div className="w-1/2">
          <h1 className="text-3xl mt-32 font-bold">
            SELAMAT DATANG DI BANK SAMPAH!
          </h1>
          <p className="text-lg mt-5">
            Ubah barang tidak terpakai menjadi sesuatu yang lebih berharga
          </p>
          <div className="flex flex-col mt-20 w-32">
            <a href="/login" className="mb-3">
              <Button text="LOGIN" />
            </a>
            <a href="/register">
              <Button text="START" />
            </a>
          </div>
        </div>
        <div className="w-3/4 flex justify-center items-center">
          <img src={img} alt="" className="w-96 h-96 mt-14" />
        </div>
      </div>
    </>
  );
};

export default StartPage;