import Navbar from "../../components/Navbar";
import back from "../../assets/img/back.svg";
import Button from "../../components/Button";
import ImageDropdown from "../../components/ImageDropdown";
import dana from "../../assets/img/dana.svg";
import bri from "../../assets/img/bri.svg";
import ovo from "../../assets/img/ovo.svg";
import bca from "../../assets/img/bca.svg";
import gopay from "../../assets/img/gopay.svg";
import bsi from "../../assets/img/bsi.svg";
import shopee from "../../assets/img/shopee.svg";
import mandiri from "../../assets/img/mandiri.svg";
import withdraw from "../../assets/img/withdraw.svg";

const KonfirmasiDitarikPage = () => {
  const options = [
    { value: "1", image: dana },
    { value: "2", image: bri },
    { value: "3", image: ovo },
    { value: "4", image: bca },
    { value: "5", image: gopay },
    { value: "6", image: bsi },
    { value: "7", image: shopee },
    { value: "8", image: mandiri },
  ];
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

export default KonfirmasiDitarikPage;