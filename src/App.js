import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Features from './components/Features';
import Error from './components/Error';

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path='/features' element={<Features />}/>
          <Route path='/*' element={<Error />}/>

        </Route>
      </Routes>
   
  );
}

export default App;
