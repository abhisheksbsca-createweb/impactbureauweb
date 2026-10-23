import { useState } from "react";
import { Link } from "react-router-dom";
import "./Story.scss";

// Replace `image: null` with an imported image (or URL) once you have the photos.
const FEATURE = {
    label: "Creator of the month",
    month: "[Month]",
    title: "[Name] and the [thing they changed] in [Village, District]",
    text: "[Two sentences: what the problem was, what this person did about it, and what is different now.]",
    linkText: "Read the story",
    to: "/stories",
    image: null,
    imageLabel: "Feature photo, wide and documentary",
};

const CATEGORIES = ["All", "Education", "Health", "Water", "Livelihood", "Women-led"];

const STORIES = [
    { id: 1, category: "Education", district: "[District]", image: null },
    { id: 2, category: "Health", district: "[District]", image: null },
    { id: 3, category: "Water", district: "[District]", image: null },
    { id: 4, category: "Livelihood", district: "[District]", image: null },
    { id: 5, category: "Women-led", district: "[District]", image: null },
    { id: 6, category: "Education", district: "[District]", image: null },
].map((story) => ({
    ...story,
    title: "[Name]: [what they changed, in one plain sentence]",
    summary: "[One-line summary of the story.]",
}));

function Story() {
    const [active, setActive] = useState("All");

    const visible =
        active === "All" ? STORIES : STORIES.filter((story) => story.category === active);

    return (
        <div className="storiesPage">
            <h1 className="storiesSrOnly">Stories</h1>

            {/* Creator of the month */}
            <section className="storiesFeature" aria-labelledby="storiesFeatureTitle">
                <div className="storiesFeaturePhoto">
                    {FEATURE.image ? (
                        <img src={FEATURE.image} alt={FEATURE.imageLabel} />
                    ) : (
                        <span className="storiesPhotoLabel">{FEATURE.imageLabel}</span>
                    )}
                </div>

                <div className="storiesFeatureBody">
                    <p className="storiesFeatureLabel">
                        <span className="storiesFeatureLabelMain">{FEATURE.label}</span>
                        <span className="storiesFeatureLabelMonth">{FEATURE.month}</span>
                    </p>
                    <h2 id="storiesFeatureTitle" className="storiesFeatureTitle">{FEATURE.title}</h2>
                    <p className="storiesFeatureText">{FEATURE.text}</p>
                    <Link className="storiesLink" to={FEATURE.to}>{FEATURE.linkText}</Link>
                </div>
            </section>

            {/* Stories from the field */}
            <section className="storiesSection" aria-labelledby="storiesHeading">
                <div className="storiesInner">
                    <h2 id="storiesHeading" className="storiesHeading">Stories from the field</h2>

                    <div className="storiesFilters">
                        <div className="storiesChips" role="group" aria-label="Filter stories by topic">
                            {CATEGORIES.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    className="storiesChip"
                                    aria-pressed={active === category}
                                    onClick={() => setActive(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <Link className="storiesLink" to="/stories">All stories</Link>
                    </div>

                    {visible.length > 0 ? (
                        <ul className="storiesGrid">
                            {visible.map((story) => (
                                <li key={story.id}>
                                    <Link className="storiesCard" to={`/stories/${story.id}`}>
                                        <div className="storiesCardPhoto">
                                            {story.image ? (
                                                <img src={story.image} alt="" />
                                            ) : (
                                                <span className="storiesPhotoLabel">Photo</span>
                                            )}
                                        </div>
                                        <p className="storiesCardMeta">
                                            <span className="storiesCardCategory">{story.category}</span>
                                            <span className="storiesCardDistrict">{story.district}</span>
                                        </p>
                                        <h3 className="storiesCardTitle">{story.title}</h3>
                                        <p className="storiesCardSummary">{story.summary}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="storiesEmpty">
                            No stories in this topic yet.{" "}
                            <button type="button" onClick={() => setActive("All")}>
                                Show all stories
                            </button>
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Story;
