import { Link } from "react-router-dom";
import "./OurWork.scss";

// Replace `image: null` with an imported image (or URL) once you have the photos.
const WORK = [
    {
        id: "tv",
        step: "01",
        verb: "Document",
        image: null,
        imageLabel: "Still from a film shoot",
        stat: "[N]",
        statLabel: "films and conversations published",
        title: "Impact originals",
        text: "Documentaries and long conversations with the people doing the work, filmed where it happens.",
        linkText: "Watch",
        to: "/impact-tv",
    },
    {
        id: "magazine",
        step: "02",
        verb: "Record",
        image: null,
        imageLabel: "Magazine cover or spread",
        stat: "[N]",
        statLabel: "changemakers profiled",
        title: "Impact Magazine",
        text: "A monthly record: one Creator of the Month, field notes, and the issues underneath the work.",
        linkText: "Read",
        to: "/stories",
    },
    {
        id: "summit",
        step: "03",
        verb: "Recognise",
        image: null,
        imageLabel: "Summit 2026: the audience, not the stage",
        stat: "250",
        statLabel: "rural and urban creators invited, 2026",
        title: "Creators Impact Summit",
        text: "Once a year, changemakers in one room. Work that moved something real is recognised, and supported to continue.",
        linkText: "About the summit",
        to: "/summit",
    },
];

function OurWork() {
    return (
        <section className="ourWorkPage" aria-labelledby="ourWorkTitle">
            <div className="ourWorkInner">
                <header className="ourWorkHeader">
                    <h1 id="ourWorkTitle" className="ourWorkTitle">Our work</h1>
                    <p className="ourWorkIntro">Three ways we put change on the record.</p>
                </header>

                <div className="ourWorkGrid">
                    {WORK.map((item) => (
                        <article className="ourWorkCard" key={item.id}>
                            <div className="ourWorkMedia">
                                {item.image ? (
                                    <img src={item.image} alt={item.imageLabel} />
                                ) : (
                                    <span className="ourWorkMediaLabel">{item.imageLabel}</span>
                                )}
                            </div>

                            <div className="ourWorkBody">
                                <p className="ourWorkStep">
                                    <span className="ourWorkStepNo">{item.step}</span>
                                    <span>{item.verb}</span>
                                </p>
                                <p className="ourWorkStat">{item.stat}</p>
                                <p className="ourWorkStatLabel">{item.statLabel}</p>
                                <h2 className="ourWorkCardTitle">{item.title}</h2>
                                <p className="ourWorkText">{item.text}</p>
                                <Link className="ourWorkLink" to={item.to}>{item.linkText}</Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurWork;
