import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menu = [
    {
      name: "Quizs",
      path: "/home",
    },
    {
      name: "Notes",
      path: "/notes",
    },
    {
      name: "Tutorial",
      path: "/tutorial",
    },

    {
      name: "CodingTest",
      path: "/codingtest",
    },

    {
      name: "Profile",
      path: "/profile",
    },
  ];

  const navigate = useNavigate();

  function execuiton(path) {
    navigate(path);
  
  }

  return ( 
    <div className=" flex justify-center">
      <div className=" list-none md:w-[50%] rounded-full  bg-white" >
        <div className="m-3 sm:flex justify-evenly ">
          {menu.map((item, i) => (
            <Button
              variant="link"
              className="no-underline text-black normal-case"
              key={i}
              onClick={() => execuiton(item.path)}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
