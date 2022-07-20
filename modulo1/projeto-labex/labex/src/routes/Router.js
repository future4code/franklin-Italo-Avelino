import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AdminHomePage } from "../pages/AdminHomePage"
import { ApplicationFormPage } from "../pages/ApplicationFormPage"
import { CreateTrip } from "../pages/CreateTrip"
import { HomePage } from "../pages/HomePage"
import { ListTripsPage } from "../pages/ListTripsPage"
import { LoginPage } from "../pages/LoginPage"
import { TripDatailsPage } from "../pages/TripDetailsPage"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="lista" element={<ListTripsPage />} />
                <Route path="lista/formulario" element={<ApplicationFormPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="administrador" element={<AdminHomePage />} />
                <Route path="administrador/detalhes" element={<TripDatailsPage />} />
                <Route path="administrador/criar" element={<CreateTrip />} />
            </Routes>
        </BrowserRouter>
    )
}
