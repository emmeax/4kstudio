import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./contactPage/Contact";
import Header from "./HomePage/Header";
// import Gallery from "./workPage/Gallery";
import Works from "./workPage/Works"; 
import Image404B from "./workPage/Image440B";
import SkateJam from "./workPage/SkateJam";
import SkylaTylaa from "./workPage/SkylaTylaa";
import PalmWine from "./workPage/PalmWine";
import StreetWear from './workPage/StreetWear';
import Image44db from "./workPage/Image44db";
import Rave from "./workPage/Rave";
import Musical from './workPage/Musical';
import Ottawa from './workPage/Ottawa'
import Wale from './workPage/Wale'
import WaleSec from './workPage/WaleSec'
import Crazy from "./workPage/Crazy";
import Love from "./workPage/Love";
import Party from "./workPage/Party";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full bg-[#C9C9C9]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Header" element={<Header />} />
          {/* <Route path="/work" element={<Gallery />} /> */}
          <Route path="/work" element={<Works />} /> 
          <Route path="/Image440B" element={<Image404B />} /> 
          <Route path="/SkateJam" element={<SkateJam />} /> 
          <Route path="/SkylaTylaa" element={<SkylaTylaa />} /> 
          <Route path="/PalmWine" element={<PalmWine/>} /> 
          <Route path="/StreetWear" element={<StreetWear/>} /> 
          <Route path="/Rave" element={<Rave/>} /> 
          <Route path="/Musical" element={<Musical/>} /> 
          <Route path="/Ottawa" element={<Ottawa/>} /> 
          <Route path="/Wale" element={<Wale/>} /> 
          <Route path="/WaleSec" element={<WaleSec/>} /> 
          <Route path="/Image44db" element={<Image44db/>} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/Party" element={<Party/>} />
          <Route path="/Asake" element={<Love/>} />
          <Route path="/Crazy" element={<Crazy/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
