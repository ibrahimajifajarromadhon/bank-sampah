import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();

  const [showAdditionalMenu, setShowAdditionalMenu] = useState(false);

  useEffect(() => {
    setShowAdditionalMenu(location.pathname !== "/");
  }, [location]);

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
            <div className="flex font-semibold justify-end">
              <a href="/home" className={`px-3 py-2 ${getMenuClass("/home")}`}>
                Home
              </a>
              <a
                href="/tabung-tarik"
                className={`px-3 py-2 ${getMenuClass(
                  "/tabung-tarik",
                  "/confirm-ditarik",
                  "/sudah-ditarik"
                )}`}
              >
                Tabungan/Penarikan
              </a>
              <a
                href="/kategori"
                className={`px-3 py-2 ${getMenuClass("/kategori")}`}
              >
                Kategori Sampah
              </a>
              <a
                href="/jadwal"
                className={`px-3 py-2 ${getMenuClass("/jadwal")}`}
              >
                Penjadwalan
              </a>
              <a
                href="/panggil"
                className={`px-3 py-2 ${getMenuClass(
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
              <button className="bg-white text-black rounded-md h-10 w-40 font-bold">
                Nama Profile
              </button>
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
