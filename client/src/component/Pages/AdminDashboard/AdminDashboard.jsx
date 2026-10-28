import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiFileText, FiMail, FiClock, FiLogOut } from "react-icons/fi";
import { API_URL, getToken, getUser, logout, getGreeting, getNameFromEmail } from "../../auth/Auth";
import "../../styles/Dashboard.scss";

// 24 Oct 2026
function formatDate(value) {
    if (!value) {
        return "-";
    }
    return new Date(value).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

function AdminDashboard() {
    const navigate = useNavigate();
    const user = getUser() || { email: "", role: "admin" };

    const [nominations, setNominations] = useState([]);
    const [subscribers, setSubscribers] = useState([]);
    const [tab, setTab] = useState("nominations");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fullName = getNameFromEmail(user.email);
    const firstName = fullName.split(" ")[0];
    const today = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    // load both lists from the backend when the page opens
    useEffect(() => {
        async function loadData() {
            try {
                const headers = { Authorization: "Bearer " + getToken() };

                const nominationsResponse = await fetch(API_URL + "/api/admin/nominations", { headers: headers });
                const subscribersResponse = await fetch(API_URL + "/api/admin/subscribers", { headers: headers });

                // token expired or not an admin: back to login
                if (nominationsResponse.status === 401 || nominationsResponse.status === 403) {
                    logout();
                    navigate("/login");
                    return;
                }

                const nominationsData = await nominationsResponse.json();
                const subscribersData = await subscribersResponse.json();

                setNominations(Array.isArray(nominationsData) ? nominationsData : []);
                setSubscribers(Array.isArray(subscribersData) ? subscribersData : []);
            } catch (err) {
                setError("Could not load data from the server.");
            }
            setLoading(false);
        }

        loadData();
    }, []);

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
                            {user.email} <span className="dashRole">Admin</span>
                        </p>
                    </div>

                    <button type="button" className="dashLogout" onClick={handleLogout}>
                        <FiLogOut /> Log out
                    </button>
                </header>

                {/* numbers at a glance */}
                <div className="dashStats">
                    <div className="dashStat">
                        <FiFileText />
                        <p className="dashStatNumber">{nominations.length}</p>
                        <p className="dashStatLabel">Nominations received</p>
                    </div>
                    <div className="dashStat">
                        <FiMail />
                        <p className="dashStatNumber">{subscribers.length}</p>
                        <p className="dashStatLabel">Newsletter subscribers</p>
                    </div>
                    <div className="dashStat">
                        <FiClock />
                        <p className="dashStatNumber dashStatSmall">
                            {nominations.length > 0 ? formatDate(nominations[0].created_at) : "No entries yet"}
                        </p>
                        <p className="dashStatLabel">Latest nomination</p>
                    </div>
                </div>

                {/* the two lists */}
                <div>
                    <div className="dashTabs">
                        <button
                            type="button"
                            className="dashTab"
                            aria-pressed={tab === "nominations"}
                            onClick={() => setTab("nominations")}
                        >
                            Nominations
                        </button>
                        <button
                            type="button"
                            className="dashTab"
                            aria-pressed={tab === "subscribers"}
                            onClick={() => setTab("subscribers")}
                        >
                            Subscribers
                        </button>
                    </div>

                    {loading && <p className="dashEmpty">Loading...</p>}
                    {error && <p className="dashEmpty dashEmptyError">{error}</p>}

                    {!loading && !error && tab === "nominations" && (
                        nominations.length === 0 ? (
                            <p className="dashEmpty">No nominations yet.</p>
                        ) : (
                            <div className="dashTableWrap">
                                <table className="dashTable">
                                    <thead>
                                        <tr>
                                            <th>Person and place</th>
                                            <th>What they changed</th>
                                            <th>Contact</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {nominations.map((item) => (
                                            <tr key={item.id}>
                                                <td data-label="Person and place">{item.person}</td>
                                                <td data-label="What they changed">{item.changed}</td>
                                                <td data-label="Contact">{item.contact}</td>
                                                <td data-label="Date">{formatDate(item.created_at)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )
                    )}

                    {!loading && !error && tab === "subscribers" && (
                        subscribers.length === 0 ? (
                            <p className="dashEmpty">No subscribers yet.</p>
                        ) : (
                            <div className="dashTableWrap">
                                <table className="dashTable">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subscribers.map((item) => (
                                            <tr key={item.id}>
                                                <td data-label="Name">{item.name}</td>
                                                <td data-label="Email">{item.email}</td>
                                                <td data-label="Date">{formatDate(item.created_at)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default AdminDashboard;
