import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Hello from './pages/Hello';
import Bye from './pages/Bye';
import Anushka from './pages/Anushka';
import Ria from './pages/Ria';
import Jiya from './pages/Jiya';
import Femme from './pages/Femme';

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
      </Routes>
      {/* {!isAdminRoute && <Footer />}       Conditionally render Footer */}
      </>
  );
};

export default App;
