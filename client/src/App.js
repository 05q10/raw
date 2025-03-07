import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Hello from './pages/Hello';
import Bye from './pages/Bye';
import Anushka from './pages/Anushka';
import Ria from './pages/Ria';
import Jiya from './pages/Jiya';
import Femme from './pages/Femme';
import Video from './pages/Video';
import JobBoard from "./women/JobBoard";
import Shopping from "./women/Shopping";
import Cook from "./women/Cook";
import Health from "./women/Health";
import WomenProfessionalDashboard from "./women/WomenProfessionalDashboard";
import Beauty from "./women/Beauty";

function App() {



  return (
    <>
    <BrowserRouter>
      <RoutesWeb />
    </BrowserRouter>
    </>
  );
}

const RoutesWeb = () => {
  const location = useLocation(); // Get the current route

  return (
      <>
      {/* {loading && <Loader />} */}
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/bye" element={<Bye />} />
        <Route path="/ank" element={<Anushka />} />
        <Route path="/ria" element={<Ria />} />
        <Route path="/jiya" element={<Jiya />} />
        <Route path="/femme" element={<Femme />} />
        <Route path="/video" element={<Video />} />
        <Route path="/women/job" element={<JobBoard />} />
        <Route path="/women/shop" element={<Shopping />} />
        <Route path="/women/cook" element={<Cook />} />
        <Route path="/women/health" element={<Health />} />
        <Route path="/women/prof" element={<WomenProfessionalDashboard />} />
        <Route path="/women/beauty" element={<Beauty />} />
      </Routes>
      {/* {!isAdminRoute && <Footer />}       Conditionally render Footer */}
      </>
  );
};

export default App;
