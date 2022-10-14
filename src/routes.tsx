import { Routes, Route  } from 'react-router-dom';
import Home from './pages/home';

const AppRouter = () => (
  <Routes>
    <Route path='*' element={<div>Erro 404</div>}/>
    <Route path='/' element={<Home />} />
  </Routes>
);

export default AppRouter