// mengimpor modul-modul yang diperlukan
import Navbar from "../../components/Navbar";
import purse from "../../assets/img/purse.svg";
import view from "../../assets/img/view.svg";
import add from "../../assets/img/add.svg";
import money from "../../assets/img/money.svg";
import wallet from "../../assets/img/e-wallet.svg";
import arrow from "../../assets/img/arrow.svg";

//sebuah arrow function untuk mengatur halaman tabungan+penarikan
const TabunganPenarikanPage = () => {
  return (
    <>
      <Navbar />
      <div className="mx-10 my-5 text-baseColor">
        <h1 className="font-bold text-3xl">Hi, FAZA </h1>
      </div>
      <div className="bg-baseColor h-0.5 w-full"></div>
      <div className="flex justify-between border border-black w-full px-10 py-3 text-gray">
        <div className="flex flex-wrap items-center">
          <img src={purse} alt="" className="max-w-12 h-12" />
          <div className="flex flex-col mx-5">
            <h1 className="text-2xl font-bold">Total Balance</h1>
            <h1 className="text-xl font-medium">Equivalent to IDR</h1>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <h1 className="text-2xl font-bold mx-5">Tap to show</h1>
          <img src={view} alt="" className="max-w-12 h-12" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-10">
        <a href="/confirm-ditarik">
          <div className="flex flex-wrap items-center">
            <div className="mx-3">
              <h1 className="text-2xl font-bold text-baseColor">IDR</h1>
              <div className="w-10 bg-baseColor h-1"></div>
            </div>
            <img src={add} alt="" className="max-w-10 h-10" />
          </div>
        </a>
        <a href="/confirm-ditarik">
          <div className="flex flex-col items-center justify-center border border-baseColor bg-bgGray rounded-xl my-10 px-20 py-10">
            <h1 className="text-2xl text-textGray font-bold">Active Balance</h1>
            <img src={money} alt="" className="max-w-36 h-36" />
            <h1 className="text-xl text-textGray font-semibold">Kirim</h1>
          </div>
        </a>
      </div>
      <a href="/confirm-ditarik">
        <div className="flex justify-between bg-bgGray border border-baseColor p-3 w-full">
          <div className="flex flex-wrap items-center mx-5">
            <img src={wallet} alt="" className="max-w-14 h-14" />
            <h1 className="text-2xl text-textGray font-bold mx-3">
              e-Wallet Center
            </h1>
          </div>
          <div className="flex items-center mx-5">
            <img src={arrow} alt="" className="max-w-8 h-8" />
          </div>
        </div>
      </a>
    </>
  );
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik 
export default TabunganPenarikanPage;