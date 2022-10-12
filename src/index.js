import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CocktailDetail from './component/CocktailDetail/CocktailDetail';
import MainPage from './component/MainPage/MainPage';
import PageNotFound from './component/PageNotFound/PageNotFound';
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <PageNotFound />,
    },
    {
        path: "cocktail/:id",
        element: <CocktailDetail />,
    }
])

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
    <RouterProvider router={router} />
);