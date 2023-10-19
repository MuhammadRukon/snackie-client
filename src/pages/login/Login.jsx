import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { AiFillGoogleCircle } from "react-icons/ai";

const Login = () => {
  const { logInUser, googleSignIn } = useContext(AuthContext);
  const handleLoginWithGoogle = () => {
    googleSignIn()
      .then((res) => res.user)
      .catch((error) => console.log(error.message));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered focus:outline-none"
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
                  className="input input-bordered focus:outline-none"
                />
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Login</button>
              </div>
            </form>
            <p>
              Dont have account? Please{" "}
              <Link className="text-green-700 font-bold" to="/register">
                register
              </Link>
            </p>
            <hr className="w-[60%] mx-auto border" />
            <p className="text-center">or</p>
            <div
              onClick={handleLoginWithGoogle}
              className="mx-auto text-4xl cursor-pointer"
            >
              <AiFillGoogleCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
