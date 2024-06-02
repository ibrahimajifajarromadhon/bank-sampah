import jadwal from "../assets/img/jadwal.svg";
import tabungan from "../assets/img/tabungan.svg";
import panggil from "../assets/img/panggil.svg";
import kategori from "../assets/img/kategori.svg";
import petugas from "../assets/img/user.svg";

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

const PetugasData = [
  {
    name: "Petugas A",
    image: petugas,
    hp: "089227677823",
    jam: "07.00-12.00"
  },
  {
    name: "Petugas B",
    image: petugas,
    hp: "082333457821",
    jam: "12.00-17.00"
  },
  {
    name: "Petugas C",
    image: petugas,
    hp: "087722637288",
    jam: "07.00-12.00"
  },
];

export { FeaturesData, PetugasData };