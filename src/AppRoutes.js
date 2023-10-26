import Home from "./components/Home/home"
import Booking from "./components/Booking/booking"
import Checkout from "./components/Checkout/checkout"

const AppRoutes = [
    {
        path: "/Rave-to-the-Grave",
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