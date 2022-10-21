import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Orders from './Components/Orders/Orders';
import Home from './Components/Home/Home';
import About from './Components/About/About';
function loader() {
  return fetch('tshirts.json')
  .then(res => res.json())
  .then(data => data);
}
function App() {
  const router = createBrowserRouter([
    {path: '/', 
     element: <Main></Main>,
     children:[
      {path: '/home', 
       loader: loader,
       element: <Home></Home>},
      {path: '/orders', element: <Orders></Orders>},
      {path: '/about', element: <About></About>}
     ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
