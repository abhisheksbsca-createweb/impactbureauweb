import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { API_URL } from "../../auth/Auth";
import "../../auth/Auth.scss";

function Signup() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    // const [showPassword, setShowPassword] = useState(false);
    // const [error, setError] = useState("");
    // const [success, setSuccess] = useState("");
    // const [loading, setLoading] = useState(false);
    
    
    /*  async function handleSignup(e) {
         e.preventDefault();
         setError("");
         setSuccess("");
         
 
         // simple checks before we call the server
         if (password.length < 6) {
             setError("Password must be at least 6 characters.");
             return;
         }
         if (password !== confirmPassword) {
             setError("The two passwords do not match.");
             return;
         }
 
         setLoading(true);
 
         try {
             // the server decides the role (new accounts are always "user")
             const response = await fetch(API_URL + "/api/signup", {
                 method: "POST",
                 headers: { "Content-Type": "application/json" },
                 body: JSON.stringify({ email: email, password: password }),
             });
             const data = await response.json();
 
             if (response.ok) {
                 setSuccess("Account created. You can log in now.");
                 setEmail("");
                 setPassword("");
                 setConfirmPassword("");
             } else {
                 setError(data.message || "Could not create the account.");
             }
         } catch (err) {
             setError("Could not reach the server. Please try again.");
         }
 
         setLoading(false);
     }
  */

     const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);


    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
       
        const { name, value } = e.target;
        
        setFormData({ ...formData, [name]: value });
        
    }
    const [signupUser, setSignupUser] = useState([{
        email: " ",
        password: " "
    }])



    const handleSignup = (e) => {
        e.preventDefault();
        setSignupUser(...signupUser, formData);
        
        setFormData({
            email:"",
            password:""
        })
        
        console.log(signupUser);

    }
    return (
        <section className="authPage">
            <div className="authIntro">
                <p className="authLabel">Impact Bureau</p>
                <h1 className="authTitle">Join the record.</h1>
                <p className="authText">
                    Create an account to nominate people, follow the stories and stay close to the work.
                </p>
            </div>

            <div className="authCard">
                <h2 className="authCardTitle">Create account</h2>

                <form className="authForm" onSubmit={handleSignup}>
                    <div className="authField">
                        <label htmlFor="signupEmail">Email</label>
                        <input
                            id="signupEmail"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="authField">
                        <label htmlFor="signupPassword">Password</label>
                        <div className="authPasswordBox">
                            <input
                                id="signupPassword"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange }
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

                    <div className="authField">
                        <label htmlFor="signupConfirm">Confirm password</label>
                        <input
                            id="signupConfirm"
                            type={showPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="authError" role="alert">{error}</p>}
                    {success && <p className="authSuccess" role="status">{success}</p>}

                    <button type="submit" className="authButton" disabled={loading}>
                        {loading ? "Creating account..." : "Create account"}
                    </button>
                </form>

                <p className="authSwitch">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </div>
        </section>
    );
}

export default Signup;
