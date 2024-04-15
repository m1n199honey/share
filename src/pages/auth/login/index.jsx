import "./style.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../../apis/auth";
import { useDispatch } from "react-redux";
import { login } from "../../../app/features/auth/auth.slice";
import { serverAlive } from "../../../apis/alive";

const Index = (params) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = () => {
    loginAdmin(user)
      .then((res) => {
        if (res?.data?.response?.token) {
          localStorage.setItem("token", res?.data?.response?.token);
          dispatch(login(res.data.token));
          navigate("/admin");
        }
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    serverAlive().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div className="main-wrapper wrapper-login">
      <div className="login-pages">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="login-logo">
                <img src="assets/img/logo-login.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 mx-auto">
              <div className="login-wrap">
                <div className="login-content">
                  <div className="login-contenthead text-center">
                    <h5>Admin Login</h5>
                  </div>
                  <div className="login-input">
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        value={user.username}
                        onChange={(e) => {
                          setUser({ ...user, username: e.target.value });
                        }}
                        type="text"
                        className="form-control"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <div className="d-flex justify-content-between">
                        <label>Password</label>
                      </div>
                      <div className="pass-group">
                        <input
                          type="password"
                          value={user.password}
                          onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                          }}
                          className="form-control pass-input"
                          placeholder="********"
                        />
                        <span className="fas toggle-password fa-eye-slash"></span>
                      </div>
                    </div>
                    {/* <div className="filter-checkbox m-0">
                                        <ul className="d-flex justify-content-between">
                                            <li>
                                                <label className="checkboxs">
                                                    <input type="checkbox"/>
                                                    <span><i></i></span>
                                                    <b className="check-content">Remember Me</b>
                                                </label>
                                            </li>
                                            <li>
                                                <a className="forgot-link" href="forget-password.html">Forgot password?</a>
                                            </li>
                                        </ul>
                                    </div> */}
                  </div>
                  <div className="login-button">
                    <div
                      onClick={() => {
                        handleSubmit();
                      }}
                      className="btn btn-login"
                    >
                      Login
                    </div>
                  </div>
                  {/* <div className="signinform text-center">
                                    <a href="signup.html" className="hover-a">Sign Up</a>
                                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
