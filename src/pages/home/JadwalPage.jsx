// mengimpor modul-modul yang diperlukan
import Navbar from "../../components/Navbar";
import { PetugasData } from "../../data/Data";
import kalender from "../../assets/img/kalender.svg";

//membuat arrow function untuk halaman jadwal petugas
const JadwalPage = () => {

  //sebuah variabel yang menampung data petugas
  const petugas = PetugasData;

  return (
    <>
      <Navbar />
      <div className="flex justify-between mx-10 my-3">
        <div>
          <h1 className="font-bold text-3xl">
            Jadwal Petugas Bank Sampah <br />
            Desa Sembungan
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <img src={kalender} alt="" className="min-w-10 h-12 mr-2" />
          <button className="bg-baseColor text-white rounded-full w-full h-10 font-bold text-sm px-5">
            Hari ini / Senin - 20 mei - 2024
          </button>
        </div>
      </div>
      <div className="bg-baseColor h-1 w-full mb-10"></div>
      <div className="flex flex-wrap justify-center">
        {petugas.slice(0, 2).map((p, i) => (
          <div key={i} className="max-w-xs flex mx-40 px-3">
            <div>
              <button className="bg-baseColor text-white rounded-full w-full h-10 mt-10 mb-5 font-bold">
                {p.jam}
              </button>
              <div className="flex flex-col border border-black rounded-md">
                <img
                  src={p.image}
                  alt={p.name}
                  className="min-w-16 h-16 mx-14 my-5"
                />
                <div className="text-center my-auto">
                  <h1 className="font-bold text-xl my-3">{p.name}</h1>
                </div>
              </div>
              <div className="flex flex-col items-center font-bold my-3">
                <h1>Nama : {p.name}</h1>
                <h1>No Hp : {p.hp}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik
export default JadwalPage;