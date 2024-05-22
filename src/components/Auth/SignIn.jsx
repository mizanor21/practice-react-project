import { Link } from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";

const SignIn = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Signin now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <i>
                  Don&apos;t have an any account?{" "}
                  <Link to={"/signup"} className="hover:link-success">
                    Signup
                  </Link>
                </i>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Signin</button>
            </div>
          </form>
          <div className="m-7">
            <GoogleSignIn></GoogleSignIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
