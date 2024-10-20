import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
    console.log("BUTTON CLICKED");
  };

  const myStyle = {
    backgroundImage:
      "url(https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",

    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <div className="top-0 left-0 w-[100%] flex justify-start ">
      <div style={myStyle}>
        <div className="h-90 text-white text-center pt-36">
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            dolor, cupiditate unde consectetur ex commodi a labore quidem autem
            sint vitae repellendus, veniam maiores architecto magni! Molestiae
            iste hic odit. Deleniti doloribus amet, reprehenderit est unde sint,
            saepe alias consequatur perspiciatis debitis porro distinctio,
            aperiam culpa. Repudiandae, perspiciatis, aspernatur, quidem
            consectetur exercitationem ea facilis labore enim nihil placeat
            recusandae sed! Odit porro assumenda eveniet mollitia officiis,
            obcaecati fugiat ea, reiciendis fugit vel voluptatum corrupti
            blanditiis natus iure? Ad at soluta, omnis
          </span>
          <br></br>

          <Button className="justify-center m-10" onClick={handleRedirect}>
            Let's Go
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
