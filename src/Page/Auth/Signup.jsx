import { Button } from "@/components/ui/button";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      fullname: event.target.fullname.value,
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    };
    try {
      const response = await fetch("http://localhost:8080/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(JSON.stringify(data));

      if (!response.status) {
        throw new Error("Network response was not ok");
      }
      const responsedata = await response.json();
      localStorage.setItem("token", responsedata.jwt);
      if (responsedata.jwt != null) {
        console.log("Register Successfully");
        navigate("/home");
      } else {
        console.log("Register falied ");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1652986766649-1f3382b0e98b?q=80&w=2121&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-center min-h-screen bg-gray-900 bg-opacity-50">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex justify-center mb-6">
            <i className="fas fa-play-circle text-4xl text-purple-500"></i>
          </div>
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Create your Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-white text-start text-sm mb-2"
                htmlFor="fullname"
              >
                FullName
              </label>
              <input
                className="w-full px-3 py-2 text-gray-50 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                name="fullname"
                placeholder="FullName"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-start text-sm mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full px-3 py-2 text-gray-50 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                name="username"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-start text-sm mb-2"
                htmlFor="email"
              >
                Your email
              </label>
              <input
                className="w-full px-3 py-2 text-gray-50 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="email"
                name="email"
                placeholder="name@company.com"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-start text-sm mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 text-gray-50 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-start text-sm mb-2"
                htmlFor="confirm-password"
              >
                Confirm password
              </label>
              <input
                className="w-full px-3 py-2 text-gray-50 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>

            <div className="mb-4">
              <label className=" pl-1 flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-purple-500"
                />
                <span className="ml-2 text-white  text-sm">
                  I accept the{" "}
                  <a href="#" className="text-purple-500">
                    Terms and Conditions
                  </a>
                </span>
              </label>
            </div>
            <div className="mb-4">
              <Button className="w-full py-2 ">Register</Button>
            </div>
            <div className="text-center">
              <a href="/login" className="text-purple-500 text-sm">
                Already have an account?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
