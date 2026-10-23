import { useState } from "react";
import "./Nominate.scss";

const EMPTY_LETTER = { name: "", email: "" };
const EMPTY_NOMINATION = { person: "", changed: "", contact: "" };

// One labelled field. Pass as="textarea" for the multi-line one.
function Field({ id, label, as: Tag = "input", ...props }) {
    return (
        <div className="nominateField">
            <label htmlFor={id}>{label}</label>
            <Tag id={id} {...props} />
        </div>
    );
}

function Nominate() {
    const [letter, setLetter] = useState(EMPTY_LETTER);
    const [nomination, setNomination] = useState(EMPTY_NOMINATION);
    const [letterSent, setLetterSent] = useState(false);
    const [nominationSent, setNominationSent] = useState(false);

    const onLetterChange = (e) => {
        const { name, value } = e.target;
        setLetter((prev) => ({ ...prev, [name]: value }));
    };

    const onNominationChange = (e) => {
        const { name, value } = e.target;
        setNomination((prev) => ({ ...prev, [name]: value }));
    };

    const submitLetter = (e) => {
        e.preventDefault();
        // TODO: send `letter` to your API here, then show the confirmation.
        setLetterSent(true);
    };

    const submitNomination = (e) => {
        e.preventDefault();
        // TODO: send `nomination` to your API here, then show the confirmation.
        setNominationSent(true);
    };

    return (
        <section className="nominatePage" aria-label="Newsletter and nominations">
            <div className="nominateInner">
                {/* Newsletter */}
                <div className="nominateLetter">
                    <p className="nominateKicker">Monthly and free</p>
                    <h2 className="nominateTitle">The Impact Letter</h2>
                    <p className="nominateText">
                        One Creator of the Month and the month’s field notes, in your inbox. Nothing else.
                    </p>

                    {letterSent ? (
                        <div className="nominateDone" role="status">
                            <p>Thank you. You are on the list for the next Impact Letter.</p>
                            <button
                                type="button"
                                className="nominateTextButton"
                                onClick={() => {
                                    setLetter(EMPTY_LETTER);
                                    setLetterSent(false);
                                }}
                            >
                                Subscribe another email
                            </button>
                        </div>
                    ) : (
                        <form className="nominateForm" onSubmit={submitLetter}>
                            <Field
                                id="letterName"
                                label="Name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                value={letter.name}
                                onChange={onLetterChange}
                            />
                            <Field
                                id="letterEmail"
                                label="Email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={letter.email}
                                onChange={onLetterChange}
                            />
                            <button type="submit" className="nominateButton nominateButtonOutline">
                                Subscribe
                            </button>
                        </form>
                    )}
                </div>

                {/* Nomination */}
                <div className="nominateNomination">
                    <p className="nominateKicker">Nominations open</p>
                    <h2 className="nominateTitle">Know someone doing the work?</h2>
                    <p className="nominateText">
                        You don’t need to be them. They don’t need to be online.
                    </p>

                    {nominationSent ? (
                        <div className="nominateDone" role="status">
                            <p>Thank you. We have received your nomination and will verify it before anything is published.</p>
                            <button
                                type="button"
                                className="nominateTextButton"
                                onClick={() => {
                                    setNomination(EMPTY_NOMINATION);
                                    setNominationSent(false);
                                }}
                            >
                                Nominate someone else
                            </button>
                        </div>
                    ) : (
                        <form className="nominateForm" onSubmit={submitNomination}>
                            <Field
                                id="nominationPerson"
                                label="Their name and village or district"
                                name="person"
                                type="text"
                                required
                                value={nomination.person}
                                onChange={onNominationChange}
                            />
                            <Field
                                id="nominationChanged"
                                label="What have they changed?"
                                as="textarea"
                                name="changed"
                                rows={4}
                                required
                                value={nomination.changed}
                                onChange={onNominationChange}
                            />
                            <Field
                                id="nominationContact"
                                label="Your phone or email"
                                name="contact"
                                type="text"
                                autoComplete="email"
                                required
                                value={nomination.contact}
                                onChange={onNominationChange}
                            />
                            <button type="submit" className="nominateButton">
                                Submit nomination
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Nominate;
