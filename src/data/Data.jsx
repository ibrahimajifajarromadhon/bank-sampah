// mengimpor modul-modul yang diperlukan
import jadwal from "../assets/img/jadwal.svg";
import tabungan from "../assets/img/tabungan.svg";
import panggil from "../assets/img/panggil.svg";
import kategori from "../assets/img/kategori.svg";
import petugas from "../assets/img/user.svg";
import dana from "../assets/img/dana.svg";
import bri from "../assets/img/bri.svg";
import ovo from "../assets/img/ovo.svg";
import bca from "../assets/img/bca.svg";
import gopay from "../assets/img/gopay.svg";
import bsi from "../assets/img/bsi.svg";
import shopee from "../assets/img/shopee.svg";
import mandiri from "../assets/img/mandiri.svg";

//membuat variabel yang berisi array of object untuk data feature
const FeaturesData = [
  {
    title: "PENJADWALAN",
    image: jadwal,
    description:
      "Lorem ipsum dolor sit amet consectetur assumenda consectetur quia. Temporibus delectus sit nostrum. Ipsam.",
  },
  {
    title: "TABUNGAN/PENARIKAN",
    image: tabungan,
    description:
      "Lorem ipsum dolor sit amet consectetur assumenda consectetur quia. Temporibus delectus sit nostrum. Ipsam.",
  },
  {
    title: "PEMANGGILAN",
    image: panggil,
    description:
      "Lorem ipsum dolor sit amet consectetur assumenda consectetur quia. Temporibus delectus sit nostrum. Ipsam.",
  },
  {
    title: "KATEGORI SAMPAH",
    image: kategori,
    description:
      "Lorem ipsum dolor sit amet consectetur assumenda consectetur quia. Temporibus delectus sit nostrum. Ipsam.",
  },
];

//membuat variabel yang berisi array of object untuk data petugas
const PetugasData = [
  {
    name: "Petugas A",
    image: petugas,
    hp: "089227677823",
    jam: "07.00-12.00",
  },
  {
    name: "Petugas B",
    image: petugas,
    hp: "082333457821",
    jam: "12.00-17.00",
  },
  {
    name: "Petugas C",
    image: petugas,
    hp: "087722637288",
    jam: "07.00-12.00",
  },
];

//membuat variabel yang berisi array of object data gambar untuk dropdown
const GambarDropdown = [
  { value: "1", image: dana },
  { value: "2", image: bri },
  { value: "3", image: ovo },
  { value: "4", image: bca },
  { value: "5", image: gopay },
  { value: "6", image: bsi },
  { value: "7", image: shopee },
  { value: "8", image: mandiri },
];

//untuk mengekspor variabel agar dapat di import/digunakan dengan menggunakan nama yang spesifik
export { FeaturesData, PetugasData, GambarDropdown };
