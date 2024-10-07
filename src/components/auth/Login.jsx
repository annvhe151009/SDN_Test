import { useForm } from "react-hook-form";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="body">
      <div className="back-to-home">
        <Link to="/">Back to Home</Link>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="inner-wrap col">
            <div className="header">
              <h1>WELCOME BACK</h1>
            </div>
            <div className="data w-100">
              <form
                id="form"
                className="form"
                onSubmit={handleSubmit((data) => console.log(data))}
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    {...register("email", {
                      required: "Cannot be empty!",
                      /*  pattern: {
                        value: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
                        message: "Wrong format",
                      }, */
                    })}
                  />
                  {errors.email && (
                    <p className="textdanger">{errors.email.message}</p>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="form-control"
                    {...register("password", {
                      required: "Cannot be empty!",
                      minLength: { value: 3, message: "Min 3 characters" },
                    })}
                  />
                  {errors.password && (
                    <p className="textdanger">{errors.password.message}</p>
                  )}
                </div>
                <div className="form-group">
                  <button className="btn formcontrol btn-success">Login</button>
                </div>
              </form>
            </div>
            <div className="sign-up">
              <Link to="/register">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
