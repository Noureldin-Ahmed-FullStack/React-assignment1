import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Layout from './Components/Layout';
import Main from './Components/Main';
import NavbarComponent from './Components/NavbarComponent';
import Portfolio from './Components/Portfolio';
import { RouterProvider, createBrowserRouter } from "react-router-dom"


function App() {
  let Routes = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { path: "/", element: <Main /> },
        { path: "home", element: <Main /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <h2>404</h2> },
      ]
    },


  ])
  return (
    <div>
      {/* <NavbarComponent /> */}
      {/* <Main /> */}
     
        <RouterProvider router={Routes} />
      
      {/* <Portfolio /> */}
      {/* <About /> */}
    </div>
  );
}

export default App;
