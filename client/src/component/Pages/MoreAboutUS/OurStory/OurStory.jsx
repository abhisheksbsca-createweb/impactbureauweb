import { Link } from "react-router-dom";
import verifyimg from "../../../../assets/village.jpeg"
import cardimg from "../../../../assets/comingsoon.jpeg"
import { FaRegPlayCircle } from "react-icons/fa";
import "./OurStory.scss";


const middleSectionSteps = [
    {
        image: cardimg,
        step: "01",
        heading: "Where it began — Kalan, Sultanpur",
        content:
            "In a small village in Sultanpur, Shri Vishwanath Shiksha Samiti began its journey over five decades ago, working to bring modern education to the region.",
        to: "###",
        name: "Rooted in Kalan"

    },
    {
        image: cardimg,
        step: "02",
        heading: "The foundation — Education",
        content:
            "Today, its institutions serve more than 30,000 students, carrying forward a legacy of learning and opportunity.",
        to: "###",
        name: "change starts with opportunity"
    },
    {
        image: cardimg,
        step: "03",
        heading: "The realisation — Change beyond education",
        content:
            "We realised that across the region, many others were creating change — through health, livelihoods, the environment, governance and community service.",
        to: "###",
        name: "every community has a changeemaker"
    },
    {
        image: cardimg,
        step: "04",
        heading: "The next chapter — Impact Originals",
        content:
            "So we decided to go beyond our own institutions and recognise the people bringing positive change, whatever the medium. That became Impact Bureau.",
        to: "###",
        name: "stories that deserve to be seen"
    },
];


const verifyBottomSection = [
    {
        value: "50+",
        content: "years of educational work",
    },
    {
        value: "35,000+",
        content: "students served by the institutions",
    },
    {
        value: "01",
        content: "A border mission through impact Bureau",
    },
    {
        value: <FaRegPlayCircle />,
        content: "Real people, Real stories, Meaningful change",
    }
]

function OurStory() {
    return (
        <section className="ourStoryPage">

            {/* ===== 1. Banner picture at the top ===== */}
            <div className="ourStoryBanner">
                <img src={verifyimg} alt="A village in Sultanpur" />
            </div>

            {/* ===== 2. The four story cards ===== */}
            <div className="ourStoryMiddle">
                <div className="ourStoryGrid">
                    {middleSectionSteps.map((data) => (
                        <div className="ourStoryCard" key={data.step}>
                            <img className="ourStoryCardPhoto" src={data.image} alt="" />

                            <div className="ourStoryCardBody">
                                <p className="ourStoryStep">{data.step}</p>
                                <div className="ourStoryCardText">
                                    <h3 className="ourStoryCardHeading">{data.heading}</h3>
                                    <p className="ourStoryCardPara">{data.content}</p>
                                    <Link className="ourStoryCardLink" to="/">{data.name}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== 3. Numbers at the bottom ===== */}
            <div className="ourStoryNumbers">
                {verifyBottomSection.map((bottomdata) => (
                    <div className="ourStoryNumber" key={bottomdata.content}>
                        <p className="ourStoryNumberValue">{bottomdata.value}</p>
                        <p className="ourStoryNumberLabel">{bottomdata.content}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default OurStory;
