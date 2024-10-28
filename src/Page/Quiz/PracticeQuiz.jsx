import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import { useNavigate } from "react-router-dom";

const PracticeQuiz = () => {
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

      const response = await fetch(`http://localhost:8080/quiz/practicequestion?type=${encodeURIComponent(type)}`, {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        
      });

      if (response.ok) {
        const data = await response.json().then((data) => {
          console.log("Data is",data);
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

  const handleSubmit = () => {
    if (submitedAnswer === currentQuestion?.answer) {
      setMarks((prevMarks) => prevMarks + 1);
    }
    setTotalQuestion((prev) => prev + 1);
    if (totalquestion + 1 === 5) {
      console.log(marks + 1);

      localStorage.setItem("marks", marks + 1);
      localStorage.setItem("totalQuestion", totalquestion + 1);
      navigate("/result");
    }
    setCurrentQuestionIndex((prev) => prev + 1);
    setChecked(null);
    setSubmitedAnswer("");
  };

  return (
    <div className="bg-black h-100vh">
      <Navbar />
      <h1 className="text-xl text-black">Topic Name </h1>

      <div className=" bg-gray-900 flex justify-center items-center m-10 pb-10 rounded-lg shadow-gray-800 shadow-lg">
        <div className=" w-[50%] h-96">
          <div className="m-[10%]   ">
            <div className="mb-4 flex justify-between">
              <p className="text-sm text-start text-gray-400">
                Question {totalquestion + 1} of 5
              </p>
              <p className="text-sm text-start text-green-400">2:00:21</p>
            </div>
            <div className="mb-6">
              <p className="text-lg font-semibold text-white text-left">
                {currentQuestion?.question}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] pt-10 p-3 mr-16 mt-6 text-white h-96">
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
              Submit answer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeQuiz;
