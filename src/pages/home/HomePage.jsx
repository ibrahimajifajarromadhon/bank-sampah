import Navbar from "../../components/Navbar";
import { FeaturesData } from "../../data/Data";

const HomePage = () => {
  const features = FeaturesData;

  return (
    <>
      <Navbar />
      <h1 className="font-bold text-3xl text-center mt-10 mb-5">FEATURES</h1>
      <div className="flex flex-wrap justify-center">
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

export default HomePage;
