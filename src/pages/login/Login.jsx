import React from "react";
import logogoogle from "../../assets/imges/google.svg";
import logofacebook from "../../assets/imges/facebook.svg";
import banner from "../../assets/imges/banner.jpg";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../static/requestUrls";

function Login() {
  const navigate = useNavigate();

  const handleOnChangePage = () => {
    setToken("444");
    navigate("/homePage");
  };
  return (
    <div>
      {/* <div className="absolute bg-cover left-0 w-[50%]  hidden lg:block">
        <div className="flex justify-center mt-[170px]">
          <img src={clean} alt="left" className="w-full"></img>
        </div>
      </div> */}
      <div>ทดสอบ</div>
      <div>ทดสอบชนกันจ้า</div>
      <div className="place-content-center bg-cover  w-full  min-h-[100vh] bg-[#93cbee39]">
        <div className="mx-[20px] flex justify-center">
          <img
            src={banner}
            alt="banner"
            className="bg-[#E6B6D6]  sm:w-[35rem] w-full  absolute hidden sm:block rounded-t-lg"
          ></img>
          <div className="sm:w-[35rem] w-full sm:h-[40rem] h-[34rem] bg-[#F0FBFF] sm:p-12 p-8 border rounded-lg shadow-2xl shadow-[#93cbee]">
            <span className="sm:text-2xl text-xl font-bold text-[#374955]">
              LifeD Laundry Service
            </span>
            <div className="sm:mt-[7rem] mt-0">
              <div className="my-8">
                <p className="text-[#374955]">Email</p>
                <input
                  className="w-full h-[56px] border rounded-lg p-2"
                  type="text"
                  name="text"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div className="mt-8">
                <p className="text-[#374955]">Password</p>
                <input
                  className="w-full h-[56px] border rounded-lg p-2"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="cursor-pointer text-[12px] text-[#0B5790] hover:opacity-75">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm text-[12px] ml-1">Remember me</label>
              </div>
              <div className="cursor-pointer text-[12px] text-[#0B5790] hover:opacity-75 mt-1">
                Forgotten password?
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button
                className="bg-[#374955] cursor-pointer hover:opacity-20 w-full h-[56px] rounded-lg text-[#FFFFFF] text-[18px] font-bold"
                onClick={() => {
                  handleOnChangePage();
                }}
              >
                Login
              </button>
            </div>
            <div className="flex justify-center mt-2">
              <div className="p-[12px] text-sm text-center text-[#A9A9A9]">
                Or, Login with
              </div>
            </div>
            <div className="flex justify-center">
              <span>
                <img
                  src={logofacebook}
                  className="mr-[15px] w-[35px] text-[#0B5790]"
                  alt="facebook"
                ></img>
              </span>
              <span>
                <img
                  src={logogoogle}
                  className="w-[48px] text-[#e74c3c]"
                  alt="google"
                ></img>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
