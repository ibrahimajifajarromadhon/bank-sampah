// mengimpor modul-modul yang diperlukan
import { useState } from "react";
import PropTypes from "prop-types";

//membuat arrow function untuk drop down jenis penarikan pada halaman penarikan
const ImageDropdown = ({ options }) => {

  //sebuah state untuk opsi yang dipilih
  const [selectedOption, setSelectedOption] = useState(null);
  //sebuah state untuk menentukan apakah elemen terbuka atau tidak
  const [isOpen, setIsOpen] = useState(false);

  //sebuah arrow function untuk menangani klik pada opsi
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <div>
        <button
          type="button"
          className="inline-flex justify-start w-full rounded-md border border-gray-300 shadow-sm bg-white px-4 p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? (
            <>
              <img
                src={selectedOption.image}
                alt={selectedOption.text}
                className="w-12 h-7 mr-2"
              />
              {selectedOption.text}
            </>
          ) : (
            <h1 className="text-lg font-medium text-start text-textGray">
              Pilih penarikan
            </h1>
          )}
          <svg
            className="-mr-1 m-1 h-5 w-5 ml-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 9.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1 grid grid-cols-2 gap-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="flex items-center justify-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                <img
                  src={option.image}
                  alt={option.text}
                  className="w-12 h-8 mr-2"
                />
                {option.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

//untuk memastikan bahwa properti yang diberikan ke komponen sesuai dengan tipe data
ImageDropdown.propTypes = {
  options: PropTypes.array,
  map: PropTypes.node,
};

//untuk mengekspor components agar dapat di import/digunakan components lainnya tanpa menggunakan nama yang spesifik 
export default ImageDropdown;