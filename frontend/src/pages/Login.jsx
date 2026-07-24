import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {

        e.preventDefault();

        localStorage.setItem(
            "user",
            JSON.stringify({
                email
            })
        );

        navigate("/customers");

    }

    return (

        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg,#4e54c8,#8f94fb)"
            }}
        >

            <div
                className="card shadow-lg border-0"
                style={{
                    width: "420px",
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.95)"
                }}
            >

                <div className="card-body p-5">

                    <div className="text-center mb-4">

                        <div
                            className="rounded-circle bg-primary d-inline-flex justify-content-center align-items-center mb-3"
                            style={{
                                width: "80px",
                                height: "80px"
                            }}
                        >

                            <i
                                className="fas fa-users text-white"
                                style={{ fontSize: "32px" }}
                            ></i>

                        </div>

                        <h2 className="fw-bold">
                            Mini CRM
                        </h2>

                        <p className="text-muted">
                            Welcome Back
                        </p>

                    </div>



                    <form onSubmit={handleLogin}>

                        <div className="mb-3">

                            <label className="form-label fw-semibold">

                                <i className="fas fa-envelope me-2"></i>

                                Email

                            </label>

                            <input
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                        </div>



                        <div className="mb-3">

                            <label className="form-label fw-semibold">

                                <i className="fas fa-lock me-2"></i>

                                Password

                            </label>

                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                        </div>



                        <div className="d-flex justify-content-between mb-4">

                            <div className="form-check">

                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="remember"
                                />

                                <label
                                    className="form-check-label"
                                    htmlFor="remember"
                                >
                                    Remember Me
                                </label>

                            </div>

                            <a
                                href="#"
                                className="text-decoration-none"
                            >
                                Forgot Password?
                            </a>

                        </div>



                        <button
                            className="btn btn-primary w-100 btn-lg"
                        >

                            <i className="fas fa-sign-in-alt me-2"></i>

                            Login

                        </button>

                    </form>



                    <hr className="my-4" />



                    <div className="text-center text-muted">

                        <small>

                            Demo Login

                            <br />

                            <strong>Email:</strong> admin@crm.com

                            <br />

                            <strong>Password:</strong> admin123

                        </small>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;