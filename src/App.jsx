import { Route, Routes } from "react-router-dom";

import "./App.css";

import Notes from "./Page/Notes/Notes";
import Certification from "./Page/Certification/Certification";
import Profile from "./Page/Profile/Profile";

import Navbar from "./Page/Home/Navbar";
import Dashboard from "./Page/Dashboard/Dashboard";
import Home from "./Page/Home/Home";
import Quiz from "./Page/Quiz/Quiz";
import Login from "./Page/Auth/Login";
import Signup from "./Page/Auth/Signup";
import CodingTest from "./Page/CodingTest/CodingTest";
import NotFound from "./Page/NotFound/NotFound";
import ComingSoon from "./Page/CominSoon/CominSoon";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={[<Navbar />, <Home />]} />
        <Route path="/certification" element={[<Navbar />, <ComingSoon />]} />
        <Route path="/notes" element={[<Navbar />, <Notes />]} />
        <Route path="/profile" element={[<Navbar />, <Profile />]} />
        <Route path="/codingtest" element={[<Navbar />, <ComingSoon />]} />
        <Route path="/quiz" element={[<Navbar />, <Quiz />]} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
