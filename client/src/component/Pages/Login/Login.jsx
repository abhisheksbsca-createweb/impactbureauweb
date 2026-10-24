import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { API_URL, saveLogin } from "../../auth/Auth";
import axios from "axios";
import "../../auth/Auth.scss";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();
        setError("");
        setLoading(true);
        console.log(email+password)

       /*  try {

                const response = await fetch(API_URL + "/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email, password: password }),
            });
            const data = await response.json();

            if (response.ok) {
                saveLogin(data);
                // each role has its own dashboard
                if (data.user.role === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/dashboard");
                }
            } else {
                setError(data.message || "Wrong email or password.");
            }
        } catch (err) {
            setError("Could not reach the server. Please try again.");
        } */

        setLoading(false);
    }

    return (
        <section className="authPage">
            <div className="authIntro">
                <p className="authLabel">Impact Bureau</p>
                <h1 className="authTitle">Welcome back.</h1>
                <p className="authText">
                    Log in to reach your dashboard and the latest from the bureau.
                </p>
            </div>

            <div className="authCard">
                <h2 className="authCardTitle">Log in</h2>

                <form className="authForm" onSubmit={handleLogin}>
                    <div className="authField">
                        <label htmlFor="loginEmail">Email</label>
                        <input
                            id="loginEmail"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="authField">
                        <label htmlFor="loginPassword">Password</label>
                        <div className="authPasswordBox">
                            <input
                                id="loginPassword"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="authEye"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                    </div>

                    {error && <p className="authError" role="alert">{error}</p>}

                    <button type="submit" className="authButton" disabled={loading}>
                        {loading ? "Logging in..." : "Log in"}
                    </button>
                </form>

                <p className="authSwitch">
                    New here? <Link to="/signup">Create an account</Link>
                </p>
            </div>
        </section>
    );
}

export default Login;
