import { Link } from "react-router-dom";
import "./MoreAbout.scss";

// Replace `image: null` with an imported image once you have the photos.
// The `to` values point at sections of the mission page; change them if these get their own pages.
const ITEMS = [
    {
        id: "verify",
        title: "How we verify",
        text: "Every story is checked on site and with the community before it is published or awarded.",
        to: "/more-about/howweverify",
        image: null,
    },
    {
        id: "reach",
        title: "Work over reach",
        text: "Follower counts qualify no one. We look at what changed on the ground, and for whom.",
        to: "###",
        image: null,
    },
    {
        id: "story",
        title: "Our story",
        text: "How a summit for 250 creators became a permanent record of people changing their communities.",
        to: "/more-about/ourstory",
        image: null,
    },
];

function MoreAbout() {
    return (
        <section className="moreAboutPage" aria-labelledby="moreAboutTitle">
            <div className="moreAboutInner">
                <h2 id="moreAboutTitle" className="moreAboutTitle">More about Impact Bureau</h2>

                <div className="moreAboutGrid">
                    {ITEMS.map((item) => (
                        <article className="moreAboutCard" key={item.id}>
                            <div className="moreAboutMedia">
                                {item.image && <img src={item.image} alt="" />}
                            </div>
                            <h3 className="moreAboutCardTitle">{item.title}</h3>
                            <p className="moreAboutText">{item.text}</p>
                            <Link
                                className="moreAboutLink"
                                to={item.to}
                                aria-label={`Learn more: ${item.title}`}
                            >
                                Learn more
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MoreAbout;
