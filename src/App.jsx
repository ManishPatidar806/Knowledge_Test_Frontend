import { Route, Routes } from "react-router-dom";

import Notes from "./Page/NotesAndSheet/Notes";

import Profile from "./Page/Profile/Profile";

import Dashboard from "./Page/Dashboard/Dashboard";
import Home from "./Page/Home/Home";

import Login from "./Page/Auth/Login";
import Signup from "./Page/Auth/Signup";

import NotFound from "./Page/NotFound/NotFound";
import ComingSoon from "./Page/CominSoon/CominSoon";
import Result from "./Page/Quiz/Result";

import CertificationQuiz from "./Page/Quiz/CertificationQuiz";
import PracticeQuiz from "./Page/Quiz/PracticeQuiz";
import Tutorial from "./Page/NotesAndSheet/Tutorial";
import Failed from "./Page/Quiz/Failed";
import ExamPassed from "./Page/Quiz/ExamPassed";

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
            <Route path="/home" element={[<Home />]} />
            <Route path="/notes" element={[<Notes />]} />
            <Route path="/result" element={[<Result />]} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/profile" element={[<Profile />]} />
            <Route path="/codingtest" element={[<ComingSoon />]} />
            <Route path="/failed" element={<Failed />} />
            <Route path="/exampassed" element={<ExamPassed />} />
            <Route path="/practicequiz" element={<PracticeQuiz />} />
            <Route path="/certificationquiz" element={<CertificationQuiz />} />
          </>
        ) : (
          <Route path="/*" element={<NotFound />} />
        )}

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
