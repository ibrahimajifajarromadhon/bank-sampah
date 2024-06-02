//membuat arrow function untuk tulisan bank sampah
const BankSampah = () => {
  return (
      <div className="text-baseColor text-2xl font-bold px-5 py-3">
        <a href="/">
          BANK
          <br /> 
          SAMPAH
        </a>
    </div>
  );
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik 
export default BankSampah;