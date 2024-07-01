import { createBrowserRouter } from "react-router-dom";
import { Homes, AddRestaurant } from "../pages/index";
import EditRestaurant from "../pages/EditRestaurant";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homes />,
  },
  {
    path: "/add",
    element: <AddRestaurant />,
  },
  {
    path: "/edit/:id",
    element: <EditRestaurant />,
  },
]);

export default router;
