import { Link, useNavigate } from "react-router-dom";
import { FiEdit3, FiBookOpen, FiPlayCircle, FiLogOut } from "react-icons/fi";
import { getUser, logout, getGreeting, getNameFromEmail } from "../../auth/Auth";
import "../../auth/Auth.scss";

// The three shortcuts shown on the user dashboard
const ACTIONS = [
    {
        title: "Nominate someone",
        text: "Tell us about a person doing real work in their community.",
        to: "/nominate",
        icon: <FiEdit3 />,
    },
    {
        title: "Read stories",
        text: "Stories from the field, one plain sentence at a time.",
        to: "/stories",
        icon: <FiBookOpen />,
    },
    {
        title: "Watch Impact TV",
        text: "Documentaries and long conversations, filmed where it happens.",
        to: "/impact-tv",
        icon: <FiPlayCircle />,
    },
];

function UserDashboard() {
    const navigate = useNavigate();
    const user = getUser() || { email: "", role: "user" };

    // greeting comes from the email: abhishek.tiwari@gmail.com -> "Good evening, Abhishek"
    const fullName = getNameFromEmail(user.email);
    const firstName = fullName.split(" ")[0];
    const today = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (
        <section className="dashPage">
            <div className="dashInner">
                <header className="dashTop">
                    <div>
                        <p className="dashDate">{today}</p>
                        <h1 className="dashTitle">
                            {getGreeting()}, {firstName}
                        </h1>
                        <p className="dashSub">
                            {user.email} <span className="dashRole">User</span>
                        </p>
                    </div>

                    <button type="button" className="dashLogout" onClick={handleLogout}>
                        <FiLogOut /> Log out
                    </button>
                </header>

                <div>
                    <h2 className="dashSectionTitle">What would you like to do?</h2>
                    <div className="dashActions">
                        {ACTIONS.map((action) => (
                            <Link className="dashAction" to={action.to} key={action.title}>
                                <span className="dashActionIcon">{action.icon}</span>
                                <span className="dashActionTitle">{action.title}</span>
                                <span className="dashActionText">{action.text}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="dashSectionTitle">Your account</h2>
                    <dl className="dashAccount">
                        <div>
                            <dt>Name</dt>
                            <dd>{fullName}</dd>
                        </div>
                        <div>
                            <dt>Email</dt>
                            <dd>{user.email}</dd>
                        </div>
                        <div>
                            <dt>Role</dt>
                            <dd>User</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    );
}

export default UserDashboard;
