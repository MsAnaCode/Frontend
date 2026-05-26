<<<<<<< feature/pratica07
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Faltas from './pages/Faltas';
import Notas from './pages/Notas';
import Boletos from './pages/Boletos';
import Requerimentos from './pages/Requerimentos';
import Login from './pages/Login';
=======
import { Routes, Route } from 'react-router';
import Layout from './Components/Layout/Layout';
import Dashboard from './Pages/Dashboard';
import Faltas from './Pages/Faltas';
import Notas from './Pages/Notas';
import Boletos from './Pages/Boletos';
import Requerimentos from './Pages/Requerimentos';
>>>>>>> develop

function App() {
  const { autenticado } = useAuth();

  return (
    <Routes>
<<<<<<< feature/pratica07
      <Route 
        path="/login" 
        element={!autenticado ? <Login /> : <Navigate to="/" />} 
      />

      <Route 
        path="/" 
        element={autenticado ? <Layout /> : <Navigate to="/login" />}
      >
=======
      <Route path="/" element={<Layout />}>
>>>>>>> develop
        <Route index element={<Dashboard />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="notas" element={<Notas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requerimentos />} />
      </Route>
<<<<<<< feature/pratica07

      <Route path="*" element={<Navigate to={autenticado ? "/" : "/login"} />} />
    </Routes>
  );
}

export default App;
=======
    </Routes>
  );
}
>>>>>>> develop
