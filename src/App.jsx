// mengimpor modul-modul yang diperlukan
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/home/HomePage";
import PanggilPage from "./pages/home/PanggilPage";
import JadwalPage from "./pages/home/JadwalPage";
import KategoriPage from "./pages/home/KategoriPage";
import ProfilePage from "./pages/home/ProfilePage";
import TabunganPenarikanPage from "./pages/home/TabunganPenarikanPage";
import KonfirmasiAlamatPage from "./pages/home/KonfirmasiAlamatPage";
import KonfirmasiDiambilPage from "./pages/home/KonfirmasiDiambilPage";
import SudahDiambilPage from "./pages/home/SudahDiambilPage";
import SudahDitarikPage from "./pages/home/SudahDitarikPage";
import KonfirmasiDitarikPage from "./pages/home/KonfirmasiDitarikPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* definisi rute untuk setiap halaman lainnya */}
        <Route path="/" element={<StartPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/tabung-tarik" element={<TabunganPenarikanPage />} />
        <Route path="/confirm-ditarik" element={<KonfirmasiDitarikPage />} />
        <Route path="/sudah-ditarik" element={<SudahDitarikPage />} />
        <Route path="/kategori" element={<KategoriPage />} />
        <Route path="/jadwal" element={<JadwalPage />} />
        <Route path="/panggil" element={<PanggilPage />} />
        <Route path="/confirm-alamat" element={<KonfirmasiAlamatPage />} />
        <Route path="/confirm-diambil" element={<KonfirmasiDiambilPage />} />
        <Route path="/sudah-diambil" element={<SudahDiambilPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
