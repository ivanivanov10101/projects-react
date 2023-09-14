import './App.css';
import {Route} from "react-router-dom";

const Home = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const MovieEntry = React.lazy(() => import('./pages/MovieEntry'));
const Profile = React.lazy(() => import('./pages/Profile'));

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
