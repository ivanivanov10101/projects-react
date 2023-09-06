import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/films' element={<Films/>}/>
      <Route path='/film/:id' element={<MovieEntry/>}/>
      <Route path='/news/:id' element={<NewsFeed/>}/>
      <Route component={NotFound}/>
    </>
  );
}

export default App;
