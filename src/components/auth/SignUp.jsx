import { Link } from "react-router-dom";
import "./signup.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    console.log(errors.phone);
  }, [errors]);
  const submit = (data) => {
    console.log(data);
  };
  return (
    <div className="body">
      <div className="back-to-home">
        <Link to="/">Back to Home</Link>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="inner-wrap col-xl-7">
            <div className="header">
              <h1>Create New Accout</h1>
            </div>
            <div className="data">
              <form className="" onSubmit={handleSubmit(submit)}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="form-control"
                    // id="phone"
                    maxLength="11"
                    name="phone_number"
                    {...register("phone", {
                      required: true,
                      pattern: {
                        value: /("+"84|84|0)+([3|5|7|8|9])+([0-9]{8})\b/,
                        message: "Wrong format!",
                      },
                      minLength: {
                        value: 10,
                        message: "At least 10 characters!",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="textdanger">{errors.phone.message}</p>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    id="email"
                    name="email"
                    {...register("email", {
                      required: "Cannot be empty!",
                      pattern: {
                        value: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
                        message: "Wrong format!",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="textdanger">{errors.email.message}</p>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="New Password"
                    className="form-control"
                    id="password"
                    name="password"
                    {...register("password", {
                      required: "Cannot be empty!",
                      minLength: { value: 3, message: "Tối thiểu 3 kí tự" },
                      maxLength: {
                        value: 20,
                        message: "Tối đa 20 kí tự",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="textdanger">{errors.password.message}</p>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="form-control"
                    id="confirm-password"
                    {...register("confirmPassword", {
                      required: "Cannot be empty!",
                      minLength: {
                        value: 3,
                        message: "Tối thiểu 3 kí tự",
                      },
                      maxLength: {
                        value: 20,
                        message: "Tối đa 20 kí tự",
                      },
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className="textdanger">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <button className="btn formcontrol btn-success">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <div className="sign-in">
              <Link to="/login">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
