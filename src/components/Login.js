import React, { useRef } from "react";

const Login = ({ setUser }) => {
  let attempts = 0;
  const userRef = useRef();
  const passRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      userRef.current.value === "admin" &&
      passRef.current.value === "admin"
    ) {
      localStorage.setItem("user", userRef.current.value);
      setUser("admin");
    } else {
      attempts++;
      alert(attempts + " Invalid Login Attempts");
    }
  };
  return (
    <div className=" bg-green-400 w-full min-h-screen grid place-content-center">
      <form
        action=""
        onSubmit={submitHandler}
        className="flex flex-col w-80  bg-gray-100 p-4 rounded-md"
      >
        <input
          className="p-2 my-2 outline-none "
          type="text"
          placeholder="Enter Username"
          ref={userRef}
        />
        <input
          className="p-2 my-2 outline-none "
          type="password"
          placeholder="Enter Password"
          ref={passRef}
        />
        <button
          type="submit"
          className="bg-green-400 p-2 rounded-sm mt-2 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
