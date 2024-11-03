import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
    console.log("BUTTON CLICKED");
  };

  return (
    <div
      className="top-0 left-0 min-w-screen flex justify-center items-center  min-h-screen "
      style={{ backgroundColor: "#EEF2FF" }}
    >
      <div className="text-7xl ">
      <div className="flex justify-center">
        <img
          src="https://res.cloudinary.com/dgmsfmeaz/image/upload/v1730374286/KnowledgeTest/mubfwt8ure39b34fnqiz.png"
          height="auto"
          width="auto"
        /></div>
        Welcome to the Knowledge Test
        <br></br>
        <div className="flex justify-center">
          <Button
            className="m-10 p-5 h-12 w-auto text-2xl  "
            onClick={handleRedirect}
          >
            <span>
              <strong>Let's Go </strong>{" "}
            </span>
            <i className="fas fa-arrow-right ml-2 "></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
