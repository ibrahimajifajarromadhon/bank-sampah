// mengimpor modul-modul yang diperlukan
import Navbar from "../../components/Navbar";
import back from "../../assets/img/back.svg";
import Button from "../../components/Button";
import jam from "../../assets/img/jam.svg";

//sebuah arrow function untuk mengatur halaman konfirmasi diambil
const KofirmasiDiambilPage = () => {
  return (
    <>
      <Navbar />
      <a href="/panggil">
        <div className="flex items-center mx-10 my-5 text-textGray">
          <img src={back} alt="" className="max-w-6 h-6" />
          <h1 className="font-bold text-xl mx-2">Kembali </h1>
        </div>
      </a>
      <div className="flex my-10">
        <div className="w-1/2 flex flex-col justify-center items-end">
          <h1 className="text-2xl font-bold ">
            TUNGGU YA PETUGAS <br />
            SEDANG DALAM <br />
            PERJALANAN !!
          </h1>
          <p className="text-lg font-light my-5">
            Terimakasih Sudah Berpartisipasi
          </p>
          <a href="/sudah-diambil">
            <Button text="Sampah Sudah Diambil" />
          </a>
        </div>
        <div className="w-1/2">
          <img src={jam} alt="" className="max-w-96 h-96" />
        </div>
      </div>
    </>
  );
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik 
export default KofirmasiDiambilPage;