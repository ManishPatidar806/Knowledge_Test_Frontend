import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Data from "../data/Data";

const Home = () => {
  const navigate = useNavigate();

  function executionPractice(type) { 
    console.log(`Data is ${Data}`);
     
    localStorage.removeItem('type')
    localStorage.setItem('type',type)
    navigate("/practicequiz");
    console.log("Clicked is work");
  }

  function executionCertificate(type) {


    localStorage.removeItem('type')
    localStorage.setItem('type',type)

    navigate("/certificationquiz");
    console.log("Clicked is work");
  }

  return (
    <div className="bg-gray-950">
      <Navbar />
      <h1 className="text-xl text-white m-10 bg-gray-950">Quiz Section</h1>
      <div className="grid grid-cols-3  m-20 ">
        {Data.map((item , i) => (
          <div
            key={i}
            className="max-w-sm m-5 rounded overflow-hidden shadow-lg bg-gray-900 text-white"
          >
            <img
              className="w-full"
              src="https://media.istockphoto.com/id/1800292591/photo/sql-structured-query-language-technology-concept-icon-virtual-screen.jpg?s=612x612&w=0&k=20&c=Natt2t_aFsr-KlPiMMQUPKIX6sbDb2hOTRhUFcSq6cA="
              alt="A desk setup with a laptop, lamp, and plant"
            />
            <div className="px-6 py-4 text-start">
              <div className="font-bold text-xl mb-2">
               {item.name}
              </div>
              <p className="text-gray-400 text-base">
               {item.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-5 flex justify-between">
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex justify-start "
                onClick={()=>{executionPractice(item.type)}}
              >
                <span>Read more</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex justify-start "
                onClick={()=>{executionCertificate(item.type)}}
              >
                <span>Explore more</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
