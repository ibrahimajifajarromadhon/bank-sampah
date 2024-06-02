// mengimpor modul-modul yang diperlukan
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

//membuat arrow function untuk mengatur navbar yang bersifat reusable components
const Navbar = () => {
  //sebuah variabel untuk mengakses lokasi url
  const location = useLocation();

  //sebuah state untuk menampilkan menu tambahan
  const [showAdditionalMenu, setShowAdditionalMenu] = useState(false);

  //sebuah effect untuk memperbarui menu tambahan
  useEffect(() => {
    setShowAdditionalMenu(location.pathname !== "/");
  }, [location]);

  //sebuah arrow function untuk mendapatkan menu kelas
  const getMenuClass = (...paths) => {
    return paths.includes(location.pathname) ? "text-green-500" : "text-white";
  };

  return (
    <nav className="bg-baseColor px-5 py-3">
      <div className="flex justify-between items-center text-white">
        <div className="flex w-full lg:w-auto">
          <a href="/" className="text-xl font-bold">
            BANK
            <br /> SAMPAH
          </a>
        </div>
        {location.pathname === "/" && (
          <div>
            <a href="/" className="text-xl font-bold">
              DESA
              <br /> SAMBUNGAN
            </a>
          </div>
        )}
        {showAdditionalMenu && (
          <>
            <div className="font-semibold">
              <a
                href="/home"
                className={`px-3 py-2 text-lg ${getMenuClass("/home")}`}
              >
                Home
              </a>
              <a
                href="/tabung-tarik"
                className={`px-3 py-2 text-lg ${getMenuClass(
                  "/tabung-tarik",
                  "/confirm-ditarik",
                  "/sudah-ditarik"
                )}`}
              >
                Tabungan/Penarikan
              </a>
              <a
                href="/kategori"
                className={`px-3 py-2 text-lg ${getMenuClass("/kategori")}`}
              >
                Kategori Sampah
              </a>
              <a
                href="/jadwal"
                className={`px-3 py-2 text-lg ${getMenuClass("/jadwal")}`}
              >
                Penjadwalan
              </a>
              <a
                href="/panggil"
                className={`px-3 py-2 text-lg ${getMenuClass(
                  "/panggil",
                  "/confirm-alamat",
                  "/confirm-diambil",
                  "/sudah-diambil"
                )} `}
              >
                Pemanggilan
              </a>
            </div>
            <a href="/profile">
              <button className="bg-white text-black rounded-md h-auto w-auto px-10 py-2 font-bold text-lg">
                Nama Profile
              </button>
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik 
export default Navbar;