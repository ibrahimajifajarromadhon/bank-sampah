// mengimpor modul-modul yang diperlukan
import Navbar from "../../components/Navbar";
import back from "../../assets/img/back.svg";
import Button from "../../components/Button";
import ImageDropdown from "../../components/ImageDropdown";
import withdraw from "../../assets/img/withdraw.svg";
import { GambarDropdown } from "../../data/Data";

//sebuah arrow function untuk mengatur halaman konfirmasi ditarik
const KonfirmasiDitarikPage = () => {

  //sebuah variabel yang menampung data gambar untuk dropdown
  const options = GambarDropdown;

  return (
    <>
      <Navbar />
      <a href="/tabung-tarik">
        <div className="flex items-center mx-10 my-5 text-textGray">
          <img src={back} alt="" className="max-w-6 h-6" />
          <h1 className="font-bold text-xl mx-2">Kembali </h1>
        </div>
      </a>
      <div className="flex flex-col mx-10 border border-black rounded-lg">
        <h1 className="font-bold text-3xl mx-10 mt-10">Kirim Cepat</h1>
        <div className="flex flex-col mx-10 my-5">
          <ImageDropdown options={options} />
          <input
            type="number"
            placeholder="Masukan No.Rekening/No.Hp"
            className="p-5 rounded-md border border-black h-12 my-5"
          />
          <input
            type="text"
            placeholder="Nama Pemilik Akun"
            className="p-5 rounded-md border border-black h-12"
          />
          <a href="/sudah-ditarik">
            <div className="flex my-5">
              <img src={withdraw} alt="" className="max-w-12 h-12 mr-5" />
              <Button text="WITHDRAW" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik
export default KonfirmasiDitarikPage;