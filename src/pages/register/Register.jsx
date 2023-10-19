import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { AiFillGoogleCircle } from "react-icons/ai";
import { toast } from "react-toastify";
const Register = () => {
  const navigate = useNavigate();
  const { createUser, googleSignIn, updateUser, registeredUsers } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  // with email
  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      setErrorMessage("Password needs to be at least six characters");
      return;
    }

    if (!/.*[A-Z].*/.test(password)) {
      setErrorMessage("Password needs at least one capital letter");
      return;
    }
    if (!/.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?].*/.test(password)) {
      setErrorMessage("Password needs at least one special character");
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateUser(name, photo)
          .then(() => {
            console.log("profile Updated");
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ email }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              })
              .catch((error) => console.log(error.message));
            toast.success("Successfully Registered", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/");
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => setErrorMessage(error.message));
  };
  // with google
  const handleLoginWithGoogle = () => {
    setErrorMessage("");
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        const email = res.user.email;
        const exists = registeredUsers.find((user) => user.email === email);
        console.log(exists);
        if (exists) {
          return;
        }
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error.message));

        toast.success("Successfully Signed In", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => setErrorMessage(error.message));
  };
  return (
    <div className="hero py-10  bg-base-200">
      <div className="hero-content lg:w-[30vw] flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body ">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="input input-bordered focus:outline-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="photo url"
                  className="input input-bordered focus:outline-none"
                />
              </div>
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
              <p className="text-red-700 ml-1 text-sm">{errorMessage}</p>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Register</button>
              </div>
            </form>
            <p className="text-center">
              Dont have account? Please{" "}
              <Link className="text-green-700 font-bold" to="/login">
                login
              </Link>
            </p>
            <hr className="w-[60%] mx-auto border mt-2" />
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

export default Register;
