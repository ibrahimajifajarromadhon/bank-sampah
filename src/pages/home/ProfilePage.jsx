import Navbar from "../../components/Navbar";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap px-24 pr-60 bg-baseColor h-max w-sreen m-10 rounded-lg">
        <div className="flex flex-col text-white w-full">
          <h1 className="text-3xl font-bold my-10">User Management</h1>
          <div className="flex flex-col my-10">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="text-sm font-extralight my-3">
              Name, Surname, Email address
            </p>
            <input
              type="text"
              placeholder="Username"
              defaultValue="Faza"
              className="p-5 rounded-md h-12 text-black"
            />
            <input
              type="text"
              placeholder="Email"
              defaultValue="faza@gmail.com"
              className="my-4 p-5 rounded-md h-12 text-black"
            />
            <button className="bg-white text-baseColor h-12 w-44 rounded-xl font-bold my-2">
              Save Changes
            </button>
          </div>
          <div className="bg-black h-0.5 w-full"></div>

          <div className="flex flex-col my-12">
            <h1 className="text-2xl font-semibold">Password</h1>
            <p className="text-sm font-extralight my-3">
              Your email address is faza@gmail.com
            </p>
            <input
              type="password"
              placeholder="Current Password"
              className="p-5 rounded-md h-12 text-black"
            />
            <input
              type="password"
              placeholder="New Password"
              className="my-4 p-5 rounded-md h-12 text-black"
            />
            <button className="bg-white text-baseColor h-12 w-44 rounded-xl font-bold my-2">
              Changes Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik 
export default ProfilePage;