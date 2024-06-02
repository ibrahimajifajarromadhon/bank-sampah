// mengimpor modul-modul yang diperlukan
import Navbar from "../../components/Navbar";
import { useState } from "react";
import kayu from "../../assets/img/kayu.svg";
import buah from "../../assets/img/buah-busuk.svg";
import botol from "../../assets/img/botol.svg";
import plastik from "../../assets/img/plastik.svg";
import gambar from "../../assets/img/image.svg";

//sebuah arrow function untuk mengatur halaman kategori sampah
const KategoriPage = () => {

  //sebuah state kategori, halaman saat ini dan variabel jumlah item per halaman
  const [selectedCategory, setSelectedCategory] = useState("ORGANIK");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  //sebuah variabel images yang berisi array of object untuk data kategori sampah
  const images = [
    {
      name: "KAYU",
      category: "ORGANIK",
      url: kayu,
      type: "ORGANIK KERING",
    },
    {
      name: "BUAH BUSUK",
      category: "ORGANIK",
      url: buah,
      type: "ORGANIK BASAH",
    },
    {
      name: "BOTOL",
      category: "ANORGANIK",
      url: botol,
      type: "ANORGANIK KERING",
    },
    {
      name: "PLASTIK",
      category: "ANORGANIK",
      url: plastik,
      type: "ANORGANIK KERING",
    },
    {
      name: "KAYU 2",
      category: "ORGANIK",
      url: kayu,
      type: "ORGANIK KERING",
    },
    {
      name: "BUAH BUSUK 2",
      category: "ORGANIK",
      url: buah,
      type: "ORGANIK BASAH",
    },
    {
      name: "BOTOL 2",
      category: "ANORGANIK",
      url: botol,
      type: "ANORGANIK KERING",
    },
    {
      name: "PLASTIK 2",
      category: "ANORGANIK",
      url: plastik,
      type: "ANORGANIK KERING",
    },
  ];

  //sebuah arrow function untuk mengatur button organik dan anorgani ketika di klik
  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  //sebuah arrow function untuk memperbarui halaman yang ditampilkan berdasarkan page number yang dipilih
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //untuk memfilter gambar berdasarkan kategori yang dipilih
  const filteredImages = images.filter(
    (image) => image.category === selectedCategory
  );
  //untuk menghitung total halaman
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);

  //untuk menampilkan gambar pada halaman tertentu
  const displayedImages = filteredImages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-between mx-10 my-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold my-2">Kategori Sampah</h1>
          <p className="text-xl font-semibold">Informasi</p>
          <p className="my-2">
            Sampah adalah sisa buangan dari suatu produk atau barang yang sudah
            tidak digunakan lagi, tetapi masih dapat di daur ulang menjadi
            barang yang bernilai. Sampah bisa di kategorikan menjadi 2 yaitu:
          </p>
          <p className="my-1">
            1. Sampah organik adalah sampah yang berasal dari sisa makhluk hidup
            yang mudah terurai secara alami tanpa proses campur tangan manusia
            untuk dapat terurai.
          </p>
          <p>
            2. Sampah anorganik adalah sampah yang sudah tidak dipakai lagi dan
            sulit terurai. Sampah anorganik yang tertimbun di tanah dapat
            menyebabkan pencemaran tanah karena sampah anorganik tergolong zat
            yang sulit terurai dan sampah itu akan tertimbun dalam tanah dalam
            waktu lama.
          </p>

          <div className="mt-4">
            <button
              className={`px-10 py-2 rounded-xl font-bold ${
                selectedCategory === "ORGANIK"
                  ? "bg-baseColor text-white"
                  : "bg-white border border-black text-black"
              }`}
              onClick={() => handleButtonClick("ORGANIK")}
            >
              Sampah Organik
            </button>
            <button
              className={`px-10 py-2 rounded-xl mx-10 font-bold ${
                selectedCategory === "ANORGANIK"
                  ? "bg-baseColor text-white"
                  : "bg-white border border-black text-black"
              }`}
              onClick={() => handleButtonClick("ANORGANIK")}
            >
              Sampah Anorganik
            </button>
          </div>
          <div className="mt-4 max-w-lg">
            {displayedImages.map((image, i) => (
              <div
                key={i}
                className="border border-gray p-2 my-5 flex items-center rounded-2xl"
              >
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-40 h-28 object-cover rounded-md"
                />
                <div className="flex flex-col mx-5 text-gray">
                  <h1 className="font-bold text-2xl">{image.name}</h1>
                  <h1 className="font-semibold text-sm">{image.type}</h1>
                </div>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex space-x-2 mt-4 mx-60">
              {[...Array(totalPages).keys()].map((number) => (
                <button
                  key={number}
                  className={`w-8 h-8 rounded-full border border-gray-500 ${
                    currentPage === number + 1
                      ? "bg-gray text-white"
                      : "bg-white text-gray"
                  }`}
                  onClick={() => handlePageChange(number + 1)}
                >
                  {number + 1}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-end justify-end">
          <img src={gambar} alt="Gambar" className="mt-4 w-svh h-lg" />
        </div>
      </div>
    </>
  );
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik 
export default KategoriPage;