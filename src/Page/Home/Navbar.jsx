import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menu = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Certification",
      path: "/certification",
    },
    {
      name: "Notes",
      path: "/notes",
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
    console.log("path is executed");
  }

  return (
    <div className=" flex justify-center">
      <div className=" list-none w-[50%] rounded-full bg-slate-500 ">
        <div className="m-3 flex justify-evenly ">
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
