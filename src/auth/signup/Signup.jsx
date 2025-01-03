import React, { useContext, useState } from "react";
import google from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import { Slide, toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const bangladeshPhoneRegex = /^01\d{9}$/;
  const { createUser, loading, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (!bangladeshPhoneRegex.test(formData.phone))
      newErrors.phone = "Invalid Bangladesh phone number.";
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
      createUser(formData.email, formData.password)
        .then((userCredential) => {
          toast.success(
            `${formData.name} , your account creation was successful.`,
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
          {
            formData.name = "";
            formData.email = "";
            formData.phone = "";
            formData.password = "";
          }
          navigate("/sign");
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
        navigate("/");
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
    <div className="py-20 font-poppins flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Create an Account
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Enter your details below
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

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
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="+8801XXXXXXXXX"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
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
              "Create Account"
            )}
          </button>

          <button
            type="button"
            onClick={HandleGoogleLogin}
            className="w-full flex justify-center gap-x-2 items-center bg-transparent border-borderColor border-[1px] text-primary_black py-4 hover:bg-[#e7e7e7] transition capitalize rounded-sm"
          >
            <img src={google} alt="google" className="w-5" /> Sign up with
            Google
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/sign" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
