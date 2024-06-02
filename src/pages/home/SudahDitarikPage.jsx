// mengimpor modul-modul yang diperlukan
import Navbar from "../../components/Navbar";
import back from "../../assets/img/back.svg";
import dompet from "../../assets/img/dompet.svg";

//sebuah arrow function untuk mengatur halaman sudah ditarik
const SudahDitarikPage = () => {
  return (
    <>
      <Navbar />
      <a href="/confirm-ditarik">
        <div className="flex items-center mx-10 my-5 text-textGray">
          <img src={back} alt="" className="max-w-6 h-6" />
          <h1 className="font-bold text-xl mx-2">Kembali </h1>
        </div>
      </a>
      <div className="flex my-20">
        <div className="w-1/2 flex flex-col justify-center items-end mx-10">
          <h1 className="text-2xl font-bold ">
            SELAMAT PENARIKAN <br /> BERHASIL !! <br /> UANG SUDAH DI SAKU
          </h1>
          <p className="text-lg font-light my-5 mx-10">
            Jangan Lupa Menabung ya...
          </p>
        </div>
        <div className="w-1/2">
          <img src={dompet} alt="" className="max-w-72 h-72" />
        </div>
      </div>
    </>
  );
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik 
export default SudahDitarikPage;