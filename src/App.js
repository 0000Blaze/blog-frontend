import React from "react";
import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
    const { user } = useContext(Context);
    return (
        <Router>
            <TopBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route exact path="/post/:postId" element={<Single />} />
            </Routes>
            <Routes>
                <Route
                    exact
                    path="/write"
                    element={user ? <Write /> : <Register />}
                />
            </Routes>
            <Routes>
                <Route
                    exact
                    path="/settings"
                    element={user ? <Settings /> : <Register />}
                />
            </Routes>
            <Routes>
                <Route
                    exact
                    path="/login"
                    element={user ? <Home /> : <Login />}
                />
            </Routes>
            <Routes>
                <Route
                    exact
                    path="/register"
                    element={user ? <Home /> : <Register />}
                />
            </Routes>
        </Router>
    );
}

export default App;
