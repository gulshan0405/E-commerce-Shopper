import { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData,setFormData] =useState({
    username:"",
    password:"",
    email:""
  });
  
  const changeHandler =(e)=>{
     setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async (e) => {
    e.preventDefault();
    console.log("Login function execution",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:"POST",
      headers:{
         Accept:'application/form-data', 
         'Content-Type':'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.error);
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    console.log("Signup function execution",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:"POST",
      headers:{
         Accept:'application/form-data', 
         'Content-Type':'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.error);
    }
  };

  return (
    <div className="loginsignup w-full h-screen pt-10 bg-[#fce3fe] flex justify-center items-center">
      <div className="loginsignup-container w-[90%] max-w-[500px] bg-white rounded-lg shadow-lg py-8 px-8">
        <h1 style={{marginBottom:"18px"}} className="text-3xl font-semibold text-center text-gray-800 ">{state}</h1>
        <form className="loginsignup-fields flex flex-col gap-6 mt-4" onSubmit={state === "Login" ? login : signup}>
          {state === "Sign Up" && (
            <input
              name='username'
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
              className="w-full h-12 px-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
            className="w-full h-12 px-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            className="w-full h-12 px-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full h-12 bg-[#ff4141] text-white text-lg font-medium rounded-lg shadow-md hover:bg-[#e63b3b] transition-all duration-200"
          >
            Continue
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600 text-sm">
          {state === "Sign Up" ? (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setState("Login")}
                className="text-[#ff4141] font-semibold hover:underline"
              >
                Login Here
              </button>
            </>
          ) : (
            <>
              Create an Account?{' '}
              <button
                type="button"
                onClick={() => setState("Sign Up")}
                className="text-[#ff4141] font-semibold hover:underline"
              >
                Click here
              </button>
            </>
          )}
        </p>
        <div className="loginsignup-agree flex items-start mt-6 text-sm text-gray-600">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            className="w-4 h-4 mt-1 mr-2 accent-blue-500 cursor-pointer"
          />
          <label htmlFor="agreement" className="cursor-pointer">
            By continuing, I agree to the{' '}
            <a href="/terms" className="text-blue-500 hover:underline">
              Terms of Use
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
            .
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;