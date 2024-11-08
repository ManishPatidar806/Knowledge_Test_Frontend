import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import { useNavigate } from "react-router-dom";

const CertificationQuiz = () => {
  const [question, setQuestion] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [marks, setMarks] = useState(0);
  const [totalquestion, setTotalQuestion] = useState(0);
  const [submitedAnswer, setSubmitedAnswer] = useState("");
  const navigate = useNavigate();
  const [checked, setChecked] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      const token = localStorage.getItem("token");
      const type = localStorage.getItem("type");

      console.log(type);
      

      const response = await fetch(
        `http://localhost:8080/quiz/certificatequiz?type=${type}`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json().then((data) => {
          console.log("Data is", data);

          setQuestion(data);
        });
      }
    };

    fetchdata();
  }, []);

  const currentQuestion = question[currentQuestionIndex];

  function setoption(option) {
    setSubmitedAnswer(option);
    setChecked(option);
  }

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `http://localhost:8080/quiz/checkcertificateanswer?answer=${encodeURIComponent(
        currentQuestion?.answer
      )}&id=${encodeURIComponent(currentQuestion?.questionId)}`,
      {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response) {
      setMarks((prevMarks) => prevMarks + 1);
    }
    setTotalQuestion((prev) => prev + 1);
    if (totalquestion + 1 === 2) {
      console.log(marks + 1);
      localStorage.setItem("marks", marks);
      localStorage.setItem("totalQuestion", totalquestion + 1);

      let percentage = ((marks + 1) / (totalquestion + 1)) * 100;
      console.log("Percentage is ", percentage);

      if (percentage >= 0.0) {
        navigate("/exampassed");
      } else {
        navigate("/failed");
      }
    }
    setCurrentQuestionIndex((prev) => prev + 1);
    setChecked(null);
    setSubmitedAnswer("");
  };

  return (
    <div className=" min-h-screen" style={{ backgroundColor: "#EEF5FF" }}>
      <div className="py-[3%]">
        <Navbar />
      </div>
      <h1 className="text-3xl text-center text-black ">
        Quiz :{" "}
        <strong className="text-3xl text-purple-600">
          {currentQuestion?.type.toUpperCase()}{" "}
        </strong>
      </h1>

      <div className=" bg-gray-900 xl:mx-[10%] 2xl:mx-[15%] flex flex-col md:flex-row justify-center items-center m-10 pb-10 rounded-lg shadow-gray-800 shadow-lg">
        <div className=" md:w-[50%] w-[90%] h-96">
          <div className="m-[10%]   ">
            <div className="mb-4 flex justify-between">
              <p className="text-sm text-start text-gray-400">
                Question {totalquestion + 1} of 30
              </p>
            </div>
            <div className="mb-6">
              <p className="text-lg font-semibold text-white text-left">
                {currentQuestion?.question}
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-[90%] pt-10 p-3 md:mr-16 mt-6 text-white h-96">
          <div className="space-y-5">
            {currentQuestion?.options?.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="hosting"
                  value={option}
                  className="hidden peer"
                  checked={checked === option}
                  onChange={() => setoption(option)}
                  required
                />
                <label
                  htmlFor={`option-${index}`}
                  className="inline-flex items-center bg-gray-800 hover:bg-slate-700 justify-between w-full  text-white  border-gray-700 rounded-lg cursor-pointer  dark:peer-checked:text-blue-400 peer-checked:border-blue-500 peer-checked:text-blue-500 "
                >
                  <span className="w-full bg-gray-800 p-3 rounded-lg text-left flex items-center gap-5 hover:bg-slate-700">
                    <span>{String.fromCharCode(65 + index)}</span>
                    <span>{option}</span>
                  </span>
                </label>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <Button onClick={handleSubmit} className="w-[40%]">
              Submit 
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationQuiz;
