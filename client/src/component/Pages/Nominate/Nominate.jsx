import { useState } from "react";
import "./Nominate.scss";

// Address of your backend server. Change this when you deploy.
const API_URL = "http://localhost:5000";

function Nominate() {
    // newsletter form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [letterMessage, setLetterMessage] = useState("");

    // nomination form
    const [person, setPerson] = useState("");
    const [changed, setChanged] = useState("");
    const [contact, setContact] = useState("");
    const [nominationMessage, setNominationMessage] = useState("");

    // send the newsletter form to the backend
    async function handleSubscribe(e) {
        e.preventDefault();
        setLetterMessage("Sending...");

        try {
            const response = await fetch(API_URL + "/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name, email: email }),
            });

            if (response.ok) {
                setLetterMessage("Thank you. You are on the list for the next Impact Letter.");
                setName("");
                setEmail("");
            } else {
                setLetterMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            setLetterMessage("Could not reach the server. Please try again.");
        }
    }

    // send the nomination form to the backend
    async function handleNomination(e) {
        e.preventDefault();
        setNominationMessage("Sending...");

        try {
            const response = await fetch(API_URL + "/api/nominations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ person: person, changed: changed, contact: contact }),
            });

            if (response.ok) {
                setNominationMessage("Thank you. We have received your nomination and will verify it before anything is published.");
                setPerson("");
                setChanged("");
                setContact("");
            } else {
                setNominationMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            setNominationMessage("Could not reach the server. Please try again.");
        }
    }

    return (
        <section className="nominatePage">
            <div className="nominateInner">

                {/* Newsletter */}
                <div className="nominateLetter">
                    <p className="nominateKicker">Monthly and free</p>
                    <h2 className="nominateTitle">The Impact Letter</h2>
                    <p className="nominateText">
                        One Creator of the Month and the month’s field notes, in your inbox. Nothing else.
                    </p>

                    <form className="nominateForm" onSubmit={handleSubscribe}>
                        <div className="nominateField">
                            <label htmlFor="letterName">Name</label>
                            <input
                                id="letterName"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="nominateField">
                            <label htmlFor="letterEmail">Email</label>
                            <input
                                id="letterEmail"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="nominateButton nominateButtonOutline"
                            disabled={letterMessage === "Sending..."}
                        >
                            Subscribe
                        </button>

                        {letterMessage && <p className="nominateMessage">{letterMessage}</p>}
                    </form>
                </div>

                {/* Nomination */}
                <div className="nominateNomination">
                    <p className="nominateKicker">Nominations open</p>
                    <h2 className="nominateTitle">Know someone doing the work?</h2>
                    <p className="nominateText">
                        You don’t need to be them. They don’t need to be online.
                    </p>

                    <form className="nominateForm" onSubmit={handleNomination}>
                        <div className="nominateField">
                            <label htmlFor="nominationPerson">Their name and village or district</label>
                            <input
                                id="nominationPerson"
                                type="text"
                                value={person}
                                onChange={(e) => setPerson(e.target.value)}
                                required
                            />
                        </div>

                        <div className="nominateField">
                            <label htmlFor="nominationChanged">What have they changed?</label>
                            <textarea
                                id="nominationChanged"
                                rows="4"
                                value={changed}
                                onChange={(e) => setChanged(e.target.value)}
                                required
                            />
                        </div>

                        <div className="nominateField">
                            <label htmlFor="nominationContact">Your phone or email</label>
                            <input
                                id="nominationContact"
                                type="text"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="nominateButton"
                            disabled={nominationMessage === "Sending..."}
                        >
                            Submit nomination
                        </button>

                        {nominationMessage && <p className="nominateMessage">{nominationMessage}</p>}
                    </form>
                </div>

            </div>
        </section>
    );
}

export default Nominate;
