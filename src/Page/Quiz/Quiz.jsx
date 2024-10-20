import { Button } from "@/components/ui/button";


const Quiz = () => {
  return (
   <>
        <h1 className="text-xl text-black ">Topic Name </h1>

      <div className=" bg-gray-900 flex justify-center items-center m-10 pb-10 rounded-lg shadow-slate-300 shadow-lg">
        <div className=" w-[50%] h-96">
          <div className="m-[10%]   ">
            <div className="mb-4 flex justify-between">
              <p className="text-sm text-start text-gray-400">
                Question 6 of 10
              </p>
              <p className="text-sm text-start text-green-400">
                2:00:21
              </p>
            </div>
            <div className="mb-6">
              <p className="text-lg font-semibold text-white text-left">
                Which of these color contrast ratios defines the minimum WCAG
                2.1 Level AA requirement for normal text?
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] pt-10 p-3 mr-6 text-white  h-96">
         
            <div className="space-y-4 ">
              <button className="w-full bg-gray-700 p-3 rounded-lg text-left flex items-center gap-5 hover:bg-slate-500">
                <span>A</span>
                <span>4.5 : 1</span>
              </button>
              <button className="w-full bg-gray-700 p-3 rounded-lg text-left flex items-center gap-5 hover:bg-slate-500">
                <span>B</span>
                <span>3 : 1</span>
              </button>
              <button className="w-full bg-gray-700 p-3 rounded-lg text-left flex items-center gap-5 hover:bg-slate-500">
                <span>C</span>
                <span>2.5 : 1</span>
              </button>
              <button className="w-full bg-gray-700 p-3 rounded-lg text-left flex items-center gap-5 hover:bg-slate-500">
                <span>D</span>
                <span>5 : 1</span>
              </button>
            </div>
            <div className="mt-6">
              <Button className="w-[50%] ">Submit answer</Button>
            </div>

        </div>
      </div>
      </>
  );
};

export default Quiz;
