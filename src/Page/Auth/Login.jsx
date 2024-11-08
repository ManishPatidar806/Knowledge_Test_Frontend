import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [ flag, setFlag ] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setFlag(true);
        throw new Error("Network response was not ok");
      }

      const responsedata = await response.json();
      localStorage.setItem("token", responsedata.jwt);
      localStorage.setItem("fullname", responsedata.fullname);
      localStorage.setItem("domain", responsedata.domain);
      localStorage.setItem("place", responsedata.place);
      localStorage.setItem("description", responsedata.description);
      if (responsedata.jwt != null) {
        console.log("Login Success");
        navigate("/home");
      } else {
        setFlag(true);
        console.log("Login falied ");
      }
    } catch (error) {
      setFlag(true);
      console.log("Error", error);
    }
  };

  return (
    <div style={{ backgroundColor: "#EEF2FF" }} className="min-h-screen">
      <div className=" py-40">
        <div className="max-w-4xl mx-auto shadow-lg flex flex-col md:flex-row">
          <div
            className="hidden md:block w-1/2 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dgmsfmeaz/image/upload/v1730360946/KnowledgeTest/b9xqqaxcdg9ykh8cbjt4.avif')",
            }}
          ></div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2 bg-white p-10 text-black"
          >
            <h2 className="text-center text-2xl mb-8">
              <strong>Login</strong>
            </h2>
            <div className="mb-4">
              <input
                className="form-control w-full bg-[#f7f9fc] border-b border-[#dfe7f1] h-10 px-2 placeholder:text-gray-600"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              {flag && <div className="text-red-600">Enter valid Email</div>}
            </div>
            <div className="mb-4">
              <input
                className="form-control w-full bg-[#f7f9fc] border-b border-[#dfe7f1] h-10 px-2 placeholder:text-gray-600"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              {flag && <div className="text-red-600">Enter valid Password</div>}
            </div>
            <div className="mb-4">
              <Button
                className="btn btn-primary w-full text-white py-2 rounded  transition-transform active:translate-y-1 "
                type="submit"
              >
                Login
              </Button>
            </div>

            <a href="/signup" className="text-center text-sm text-blue-700 ">
              You don't have an account? Click here.
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
