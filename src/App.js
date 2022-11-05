import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Restaurant from './components/Restaurant/Restaurant';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/restaurant',
          loader: async () => {
            return fetch ( 'https://www.themealdb.com/api/json/v1/1/search.php?f=a' );
          },
          element: <Restaurant></Restaurant>
        }
      ]
    },
    {
      path: '*',
      element: <div>Oh, Snap! 404 Not Found!!</div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router= { router }></RouterProvider>
    </div>
  );
}

export default App;
