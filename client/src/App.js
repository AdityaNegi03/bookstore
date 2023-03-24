import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Books from './pages/Books.jsx';
import Add from './pages/Add.jsx';
import Update from './pages/update.jsx';
import './style.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books/>,
  },
  {
    path: "/Add",
    element: <Add/>,
  },
  {
    path: "/Update",
    element: <Update/>,
  }
]);


function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
