import '@/main.scss'
import {Suspense, useState} from "react";
// import LoadingSpinner from "@/components/shared/LoadingSpinner";
import Providers from "@/helpers/Providers";
import Toggle from "@/components/Toggle";
import Nav from "@/components/Nav";
import {Route, Routes} from "react-router-dom";
import Home from "@/pages/index";
import Profile from "@/pages/profile";
import Films from "@/pages/films";
import ThemeToggle from "@/components/ThemeToggle";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true)
  function toggleDarkMode() {
    setDarkMode(modeToggle => !modeToggle)
  }
  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
     {/*<Suspense fallback={<div><LoadingSpinner/></div>}>*/}
      <Providers>
        {/*<Toggle>*/}
    {/*//       <Nav>*/}
             <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    {/*//       </Nav>*/}
    {/*//         <Routes>*/}
    {/*//           <Route path='/' element={<Home/>}/>*/}
    {/*//           <Route exact path='/profile' element={<Profile/>}/>*/}
    {/*//           <Route path='/films' element={<Films/>}/>*/}
    {/*//           /!*<Route path='/film/:id' element={<MovieList/>}/>*!/*/}
    {/*//           /!*<Route path='/news/:id' element={<NewsEntry/>}/>*!/*/}
    {/*//         </Routes>*/}
            <Component {...pageProps} />
         {/*</Toggle>*/}
      </Providers>
     {/*</Suspense>*/}
    </div>
  );
}
