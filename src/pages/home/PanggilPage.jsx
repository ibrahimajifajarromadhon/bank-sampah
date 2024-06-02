import Navbar from "../../components/Navbar";
import { PetugasData } from "../../data/Data";

const PanggilPage = () => {
  const petugas = PetugasData;

  return (
    <>
      <Navbar />
      <div className="px-60 my-14">
        <h1 className="font-bold text-3xl">PROFIL PETUGAS</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {petugas.map((p, i) => (
          <div key={i} className="max-w-xs flex">
            <div className="flex flex-col border border-black mx-5 px-3 rounded-md">
              <img
                src={p.image}
                alt={p.name}
                className="min-w-32 h-32 mx-14 my-5"
              />
              <div className="text-center my-auto">
                <h1 className="font-bold text-xl my-3">{p.name}</h1>
                <a href="/confirm-alamat">
                  <button className="bg-baseColor text-white rounded-full w-full h-10 mt-10 mb-5 font-bold">
                    Call
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PanggilPage;