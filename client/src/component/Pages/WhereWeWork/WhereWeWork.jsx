import "./WhereWeWork.scss";

const DISTRICTS = ["[District 1]", "[District 2]", "[District 3]", "[District 4]"];

// Replace `image: null` with your map (an SVG or an imported image).
const MAP = {
    image: null,
    alt: "Map of Uttar Pradesh. Covered districts are filled in, with one dot for each documented story.",
    placeholder: "Line map of Uttar Pradesh: covered districts filled in accent, one dot per documented story.",
};

function WhereWeWork() {
    return (
        <section className="whereWeWorkPage" aria-labelledby="whereWeWorkTitle">
            <div className="whereWeWorkInner">
                <div className="whereWeWorkText">
                    <p className="whereWeWorkLabel">Where we work</p>
                    <h2 id="whereWeWorkTitle" className="whereWeWorkTitle">
                        Starting in eastern Uttar Pradesh. Built to go further.
                    </h2>
                    <p className="whereWeWorkBody">
                        We begin where we know the ground, village by village, and add a district only when we
                        can verify the work there properly.
                    </p>
                    <ul className="whereWeWorkDistricts" aria-label="Districts we cover">
                        {DISTRICTS.map((district) => (
                            <li key={district}>{district}</li>
                        ))}
                    </ul>
                </div>

                <figure className="whereWeWorkMap">
                    {MAP.image ? (
                        <img src={MAP.image} alt={MAP.alt} />
                    ) : (
                        <figcaption>{MAP.placeholder}</figcaption>
                    )}
                </figure>
            </div>
        </section>
    );
}

export default WhereWeWork;
