import { BrowserRouter, Routes, Route } from "react-router-dom";
import dynamic from 'react-dynamic';

const MainPage = dynamic(() => import('./MainPage'));
const NotFond = dynamic(() => import('./NotFond'));

function RouteFactor() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFond />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteFactor;
