import { Link } from "react-router-dom";
import "./HowWeVerify.scss"

// What we look for. To add or change one, edit a line here.
const LOOK_FOR = [
    { title: "Real results.", text: "Clear outcomes from your effort, not intentions or announcements." },
    { title: "Lives touched.", text: "The number of people whose lives have changed because of the work." },
    { title: "A credible record.", text: "Work that has continued over time and can be seen on the ground." },
    { title: "Community trust.", text: "People in the community who know the work and can speak to it." },
];

// How the process works, in order. The numbers are added automatically.
const STEPS = [
    { title: "Nomination.", text: "You nominate yourself, or someone nominates you." },
    { title: "First contact.", text: "Our team gets in touch to understand you, your work and what it has achieved." },
    { title: "On-site visit.", text: "We visit in person to see the work where it happens." },
    { title: "Community check.", text: "We speak with the people the work has reached." },
    { title: "Decision.", text: "Only work we have verified ourselves is published or awarded." },
];

function HowWeVerify() {
    return (
        <section className="verifyPage">
            <div className="verifyInner">

                {/* ===== Title and first line ===== */}
                <div className="verifyTop">
                    <p className="verifyLabel">Impact Bureau</p>
                    <h1 className="verifyTitle">How we verify</h1>
                    <p className="verifyLead">
                        Every story is checked on site and with the community before it is published or awarded.
                    </p>
                </div>

                {/* ===== You don't need followers ===== */}
                <div className="verifySection">
                    <h2 className="verifySectionTitle">You don’t need followers. You need results.</h2>
                    <div className="verifySectionBody">
                        <p className="verifyText">
                            You don’t need a large following, a social media presence, or any media coverage to be
                            featured or nominated. We don’t measure reach. We measure impact: what has changed because
                            of your work, and how many lives it has touched.
                        </p>
                    </div>
                </div>

                {/* ===== What we look for ===== */}
                <div className="verifySection">
                    <h2 className="verifySectionTitle">What we look for</h2>
                    <div className="verifySectionBody">
                        <div className="verifyCards">
                            {LOOK_FOR.map((item) => (
                                <div className="verifyCard" key={item.title}>
                                    <h3 className="verifyCardTitle">{item.title}</h3>
                                    <p className="verifyCardText">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <p className="verifyNote">
                            This applies equally to individuals and organisations, in villages, towns and cities.
                        </p>
                    </div>
                </div>

                {/* ===== How the process works ===== */}
                <div className="verifySection">
                    <h2 className="verifySectionTitle">How the process works</h2>
                    <div className="verifySectionBody">
                        <ol className="verifySteps">
                            {STEPS.map((step, index) => (
                                <li className="verifyStep" key={step.title}>
                                    <span className="verifyStepNumber">{index + 1}</span>
                                    <div>
                                        <h3 className="verifyStepTitle">{step.title}</h3>
                                        <p className="verifyStepText">{step.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                {/* ===== Why we do it this way + button to the nominate page ===== */}
                <div className="verifySection">
                    <h2 className="verifySectionTitle">Why we do it this way</h2>
                    <div className="verifySectionBody">
                        <p className="verifyText">
                            Anyone can claim impact online. We’d rather tell fewer stories that are true than many that
                            aren’t. Verification protects the people we feature, and it gives everyone who reads,
                            watches or supports our work a reason to trust it.
                        </p>
                        <Link className="verifyButton" to="/nominate">Nominate someone</Link>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HowWeVerify;
