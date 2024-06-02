// mengimpor modul-modul yang diperlukan
import Navbar from "../../components/Navbar";
import { FeaturesData } from "../../data/Data";

//membuat arrow function untuk halaman home/features
const HomePage = () => {
  
  //sebuah variabel yang menampung data petugas
  const features = FeaturesData;

  return (
    <>
      <Navbar />
      <h1 className="font-bold text-4xl text-center mt-20 mb-5">FEATURES</h1>
      <div className="flex flex-wrap justify-center items-center">
        {features.map((f, i) => (
          <div key={i} className="max-w-xs flex">
            <div className="flex flex-col p-5">
              <img src={f.image} alt={f.title} className="min-w-48 h-48" />
              <div className="text-center">
                <h1 className="font-bold text-xl my-2">{f.title}</h1>
                <p className="text-md">{f.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik
export default HomePage;
