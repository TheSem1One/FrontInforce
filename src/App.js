import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/header';
import { Auth } from './Pages/Auth/auth';
import { Main } from './Pages/Main/main';
import { ShortUrlPage } from './Pages/ShortPage/shortpage';
import { useDispatch } from 'react-redux';
import { fetchAuthMe } from './redux/slices/auth';
import React from 'react';
function App() {
  const distpatch = useDispatch();

  React.useEffect(() => {
    
    distpatch(fetchAuthMe());
  }, [])

  return (
    <div className="App">
      <Header />
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/:id' element={<ShortUrlPage/>}/>
      <Route path='/auth' element={<Auth/>} />
     </Routes>

    </div>
  )
}

export default App;
