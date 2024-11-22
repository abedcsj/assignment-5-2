import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CrudPage from "./components/Pages/CrudPage";
import DetailPage from "./components/Pages/DetailPage";
import UpdatePage from "./components/Pages/UpdatePage";
import CreatePage from "./components/Pages/CreatePage";
import Navbar from "./components/Common/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/list" />} />
                <Route path="/list" element={<CrudPage />} />
                <Route path="/detail/:id" element={<DetailPage />} />
                <Route path="/update/:id" element={<UpdatePage />} />
                <Route path="/create" element={<CreatePage />} />
            </Routes>
        </Router>
    );
}

export default App;
