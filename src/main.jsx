import { StrictMode } from 'react'
import './index.css'
import { Layout } from './components/Layout/Layout.jsx';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import * as ReactDOM from "react-dom/client";
import { SheetConnection } from './pages/SheetConnection/SheetConnection.jsx';
import { File } from './pages/File/File.jsx';
import { ListProducts } from './pages/listProducts/ListProducts.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "products_shopify",
        element: <ListProducts />,
      },
      {
        path: "sheet",
        element: <SheetConnection />,
      },
      {
        path: "file/:id",
        element: <File />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
