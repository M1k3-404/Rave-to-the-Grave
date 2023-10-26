import Home from "./components/Home/home"
import Booking from "./components/Booking/booking"

const AppRoutes = [
    {
        path: "/Rave-to-the-Grave",
        component: <Home />,
    },

    {
        path: "/booking",
        component: <Booking />,
    },
]

export default AppRoutes