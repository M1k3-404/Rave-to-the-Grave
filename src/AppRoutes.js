import Home from "./components/Home/home"
import Booking from "./components/Booking/booking"
import Checkout from "./components/Checkout/checkout"

const AppRoutes = [
    {
        path: "/",
        component: <Home />,
    },

    {
        path: "/booking",
        component: <Booking />,
    },

    {
        path: "/checkout",
        component: <Checkout />,
    },
]

export default AppRoutes