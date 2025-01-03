import React, { useContext, useState } from "react";
import google from "../../assets/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import { Slide, toast } from "react-toastify";

const Sign = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const { signInUser, loading, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const validate = () => {
    const newErrors = {};
    if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters, including a letter and a number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      signInUser(formData.email, formData.password)
        .then((userCredential) => {
          // Sign in
          toast.success(
            `${formData.email} , you were able to login correctly.`,
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Slide,
            }
          );
          navigate(from);
        })
        .catch((error) => {
          toast.error(`${error.message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          });
        });
    }
  };

  const HandleGoogleLogin = () => {
    signInWithGoogle()
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success(
          `${user?.displayName}, you were able to login correctly.`,
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          }
        );
        navigate(from);
      })
      .catch((error) => {
        toast.error(`${error.message}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      });
  };
  return (
    <div className="bg-gray-100">
      <div className="container">
        <div className="py-20 font-poppins flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-4">
              Log in to Exclusive
            </h1>
            <p className="text-gray-600 text-center mb-6">
              Enter your details below
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
              <div className="mt-3">
                <p className="capitalize text-secondary2 text-base hover:underline block text-end">
                  Forget Password?
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary2 text-white py-4 hover:bg-red-600 transition capitalize rounded-sm"
              >
                {loading ? (
                  <div class="flex flex-row items-center justify-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-primary_white animate-bounce"></div>
                    <div class="w-2 h-2 rounded-full bg-primary_white animate-bounce [animation-delay:-.3s]"></div>
                    <div class="w-2 h-2 rounded-full bg-primary_white animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                ) : (
                  "Log In"
                )}
              </button>

              <button
                type="button"
                onClick={HandleGoogleLogin}
                className="w-full flex justify-center gap-x-2 items-center bg-transparent border-borderColor border-[1px] text-primary_black py-4 hover:bg-[#e7e7e7] transition capitalize rounded-sm"
              >
                <img src={google} alt="google" className="w-5" /> Sign in with
                Google
              </button>
            </form>

            <p className="text-center text-gray-600 mt-4">
              Create an account{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
