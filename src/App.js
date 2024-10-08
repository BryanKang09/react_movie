import logo from './logo.svg';
import './App.css';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MoviePage from './pages/Movies/MoviePage';
import { Route,Routes } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='/movies'>
          <Route index element={<MoviePage/>}/>
          <Route path=':id' element={<MovieDetailPage/>}/>
        </Route>
      </Route>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
