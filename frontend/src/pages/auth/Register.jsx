import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null)

  const navigate = useNavigate();

  const onCaptchaVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      });
    }
  };

  const onSignInSubmit = () => {
    onCaptchaVerify();

    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+91" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        toast.success('OTP Send Successfully!')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onOTPVerify = () =>{
    setLoading(true)

    window.confirmationResult.confirm(otp).then(async (result) => {
      // User signed in successfully.
      setUser(result.user)
      setLoading(false)
      toast.success('OTP Verified')
    }).catch((error) => {
      console.log(error);
      setLoading(false)
      toast.error('Wrong OTP entered')
    });
  }

  return (
    <div className="flex flex-col w-screen h-screen  justify-center items-center bg-gradient-to-tr from-[#112219] from-80%   to-[#25411A]">
      <Toaster toastOptions={{ duration: 4000 }} />
      <div id="sign-in-button"></div>
      <div className="w-1/4 flex flex-col  border shadow-xl rounded-xl p-11 gap-8 bg-white">
        <div className="flex justify-center">
          <h1 className="text-center w-fit p-3 text-4xl rounded-3xl">
            Create Account
          </h1>
        </div>

        <input
          type="text"
          placeholder="Name"
          className="  placeholder-[#112219] border rounded-xl px-2 py-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="  placeholder-[#112219] border rounded-xl px-2 py-3"
        />
        <div id="Phone" className="flex justify-between items-center">
          <input
            type="number"
            value={ph}
            onChange={(event) => setPh(event.target.value)}
            placeholder="Phone No."
            className="   placeholder-[#112219] border rounded-xl px-2 py-3"
          />
          <button onClick={onSignInSubmit} className="w-fit px-5 py-2 h-full bg-[#25411A] text-white text-lg rounded-2xl">
            Get OTP
          </button>
        </div>
        <div id="otp" className="flex justify-between items-center">
          <input
            type="number"
            value={otp}
            onChange={(event) => setOtp(event.target.value)}
            placeholder="OTP"
            className="   placeholder-[#112219] border rounded-xl px-2 py-3"
          />
          <button onClick={onOTPVerify} className="w-fit px-5 flex justify-center gap-3 items-center py-2 h-full bg-[#25411A] text-white text-lg rounded-2xl">
            {loading && <CgSpinner className="mt-1 animate-spin" size={20} />}
            <span className="">Verify</span>
          </button>
        </div>
        <div className="flex justify-center">
          <button onClick={() => navigate("/LDash")}  className={ user?"w-fit px-5 py-2  bg-[#25411A] text-white text-2xl rounded-2xl":"w-fit px-5 py-2  bg-[#25411A] text-white text-2xl rounded-2xl pointer-events-none opacity-50"}>
            Register
          </button>
        </div>
        <div className="flex gap-2">
          <span>Already a member?</span>
          <Link to="/login" className="text-blue-700">
            Log In Here
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
