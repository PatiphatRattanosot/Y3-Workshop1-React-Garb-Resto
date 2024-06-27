import { createBrowserRouter } from "react-router-dom";
import { Homes, AddRestaurant } from "../pages/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homes />,
  },
  {
    path: "/add",
    element: <AddRestaurant />,
  },
]);

export default router;
