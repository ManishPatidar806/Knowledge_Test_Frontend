import { Route, Routes } from "react-router-dom";

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
import Result from "./Page/Quiz/Result";

function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        {token != null ? (
          <>
        {/* Navbar ka kam abhe baki he */}
            <Route path="/home" element={[<Home />]} />
            <Route path="/certification" element={[<ComingSoon />]} />
            <Route path="/notes" element={[<Notes />]} />
            <Route path="/result" element={[<Result />]} />
            <Route path="/profile" element={[<Profile />]} />
            <Route path="/codingtest" element={[<ComingSoon />]} />
            <Route path="/quiz" element={[<Quiz />]} />{" "}
          </>
        ) : (
          <Route path="/*" element={<NotFound />} />
        )}
      </Routes>
    </>
  );
}

export default App;
