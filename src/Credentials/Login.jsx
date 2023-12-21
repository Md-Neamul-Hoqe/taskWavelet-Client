import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { userSingIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state || "/";

  // console.log(from);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e.target);

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    try {
      userSingIn(email, password)
        .then(() => {
          // const { user } = res;

          Swal.fire({
            icon: "success",
            title: "Signed in successfully",
            showConfirmButton: false,
            timer: 1000,
          });

          // console.log(user, from);

          return navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "warning",
            title: error.message,
            showConfirmButton: false,
            timer: 2000,
          });
        });
    } catch (error) {
      console.log(error);
    }

    // console.log(email, password);
  };

  const handleCheckCaptcha = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value) == true) {
      // Swal.fire({
      //   icon: "success",
      //   title: "Captcha",
      //   text: "Captcha Matched successfully.",
      //   showConfirmButton: false,
      //   timer: 1000,
      // });
      setDisabled(false);
    } else {
      setDisabled(true);
      //console.log("Captcha Does Not Match");
    }
  };

  return (
    <aside className="py-5">
      <h1 className="text-2xl md:text-5xl font-bold text-center">Login now!</h1>
      <form onSubmit={handleLogin} className="md:card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            {/* <span className="label-text">Captcha</span> */}
            <LoadCanvasTemplate
              reloadText="Reload Captcha"
              reloadColor="green"
            />
          </label>
          <div>
            <input
              onBlur={handleCheckCaptcha}
              type="text"
              placeholder="Type the captcha above"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button type="submit" disabled={disabled} className="btn bg-blue-700 text-white">
            Login
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center gap-5">
        <div className="text-yellow-600">
          New here? <Link to="/credentials/register">Create a New Account</Link>
        </div>
        <SocialLogin />
      </div>
      <Helmet>
        <title>Bistro Boss Restaurant | Sign In</title>
      </Helmet>
    </aside>
  );
};

export default Login;
