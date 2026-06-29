import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; // Certifique-se de que a pasta se chama 'pages'
import Cadastro from './pages/Cadastro';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}