import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/app/components/Header";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { HomePage } from "@/app/pages/HomePage";
import { MusicPage } from "@/app/pages/MusicPage";
import { VisualsPage } from "@/app/pages/VisualsPage";
import { ShopPage } from "@/app/pages/ShopPage";
import { ContactPage } from "@/app/pages/ContactPage";


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/visuals" element={<VisualsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}