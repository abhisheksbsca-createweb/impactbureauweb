import { FaPlay } from "react-icons/fa";
import "./ImpactTV.scss";

const YOUTUBE_URL = "https://www.youtube.com/";

// Replace `image: null` with an imported thumbnail and `url` with each video's YouTube link.
const VIDEOS = [
    {
        id: 1,
        type: "Documentary",
        title: "[Film title: the issue and the place]",
        summary: "[One line on who it follows.]",
        duration: "[mm:ss]",
        image: null,
        url: YOUTUBE_URL,
    },
    {
        id: 2,
        type: "Conversation",
        title: "[Podcast episode title]",
        summary: "With [Name], [what they do].",
        duration: "[mm:ss]",
        image: null,
        url: YOUTUBE_URL,
    },
    {
        id: 3,
        type: "Summit 2026",
        title: "Creators Impact Summit 2026: the full record",
        summary: "250 creators, one room.",
        duration: "[mm:ss]",
        image: null,
        url: YOUTUBE_URL,
    },
];

function ImpactTV() {
    return (
        <section className="impactTvPage" aria-labelledby="impactTvTitle">
            <div className="impactTvInner">
                <header className="impactTvHeader">
                    <h1 id="impactTvTitle" className="impactTvTitle">Impact TV</h1>
                    <a className="impactTvAll" href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
                        All films on YouTube
                    </a>
                </header>

                <ul className="impactTvGrid">
                    {VIDEOS.map((video) => (
                        <li key={video.id}>
                            <a className="impactTvCard" href={video.url} target="_blank" rel="noopener noreferrer">
                                <div className="impactTvThumb">
                                    {video.image && <img src={video.image} alt="" />}
                                    <span className="impactTvPlay">
                                        <FaPlay aria-hidden="true" focusable="false" />
                                    </span>
                                    <span className="impactTvDuration">{video.duration}</span>
                                </div>
                                <p className="impactTvType">{video.type}</p>
                                <h2 className="impactTvCardTitle">{video.title}</h2>
                                <p className="impactTvSummary">{video.summary}</p>
                                <span className="impactTvSr">Watch on YouTube, opens in a new tab</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default ImpactTV;
