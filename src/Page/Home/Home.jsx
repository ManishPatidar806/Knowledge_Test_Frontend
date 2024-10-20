import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function execution() {
    navigate("/quiz");
    console.log("Clicked is work");
  }

  return (
    <div className="bg-slate-900">
      <h1 className="text-xl text-white m-10 bg-slate-900">Quiz Section</h1>
      <div className="grid grid-cols-2 gap-4 mt-20 p-5 m-5">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="flex justify-center items-center">
            <div className="bg-gray-800 text-white rounded-lg shadow-lg flex max-w-4xl">
              <img
                src="https://return.co.de/media/images/shoot-n-design-cfR-V1QuEKw-unsplash.jpg"
                alt="Office workspace with laptops and other equipment"
                className="rounded-l-lg object-cover"
                style={{ width: "300px" }}
              />
              <div className="p-2 text-start">
                <h2 className="text-lg font-bold mb-2 ">Java as Developer</h2>
                <p className="text-gray-400 text-sm">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order. Here are the
                  biggest enterprise technology acquisitions of 2021 so far, in
                  reverse chronological order.
                </p>
                <div className=" pt-2 pb-1 flex justify-end">
                  <Button
                    onClick={execution}
                    className=" w-[35%]   font-bold py-1 px-3 rounded  "
                  >
                    <span>Explore</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
