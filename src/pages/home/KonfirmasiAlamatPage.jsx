// mengimpor modul-modul yang diperlukan
import Navbar from "../../components/Navbar";
import back from "../../assets/img/back.svg";
import Button from "../../components/Button";

//sebuah arrow function untuk mengatur halaman konfirmasi alamat
const KofirmasiAlamatPage = () => {
  return (
    <>
      <Navbar />
      <a href="/panggil">
        <div className="flex items-center mx-10 my-5 text-textGray">
          <img src={back} alt="" className="max-w-6 h-6" />
          <h1 className="font-bold text-xl mx-2">Kembali </h1>
        </div>
      </a>
      <div className="flex flex-col mx-10 border border-black rounded-lg">
        <h1 className="font-bold text-3xl mx-10 mt-10">Tambah Alamat</h1>
        <div className="flex flex-col mx-10 my-5">
          <input
            type="text"
            placeholder="Nama"
            className="p-5 rounded-md border border-black h-12 my-5"
          />
          <input
            type="text"
            placeholder="Lokasi"
            className="p-5 rounded-md border border-black h-12"
          />
          <textarea
            type="text"
            placeholder="Deskripsi"
            className="p-5 h-20 rounded-md border border-black my-5"
          />
          <input type="file" className="p-2 border border-black" />
          <div className="flex justify-end my-5">
            <Button text="Save Changes" />
          </div>
        </div>
      </div>
      <a href="/confirm-diambil">
        <div className="flex mx-10 mt-5 mb-10">
          <Button text="Panggil" />
        </div>
      </a>
    </>
  );
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik 
export default KofirmasiAlamatPage;