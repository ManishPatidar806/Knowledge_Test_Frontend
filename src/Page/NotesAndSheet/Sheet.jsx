import Navbar from "../Home/Navbar";

const Sheet = () => {
  return (
    <div className="bg-gray-950 ">
      <Navbar />
      <div className="grid grid-cols-3  m-20 ">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
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
                Noteworthy technology acquisitions 2021
              </div>
              <p className="text-gray-400 text-base">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            <div className="px-6 pt-4 pb-5">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex justify-start ">
                <span>Read more</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sheet;
