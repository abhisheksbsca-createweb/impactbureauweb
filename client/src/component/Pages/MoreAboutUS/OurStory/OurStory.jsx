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
        <section className="verifyPage">
            <div className="verifyTopSection">
                <img src={verifyimg} alt="image not found" />
            </div>
            <div className="verifyMiddleSection">
                <div className="verifyStepCard">
                    {middleSectionSteps.map((data) => (

                        <div className="verifyListCard">
                            <div className="verifyImg">
                                <img className="verifyImg" src={data.image} alt="" />
                            </div>
                            <div className="verifyContent">
                                <div className="verifyLeftSide">
                                    <p className="verifynumber">{data.step}</p>
                                </div>
                                <div className="verifyRightSide">
                                    <span className="verifyHeading">{data.heading}</span>
                                    <p className="verifyPara">{data.content}</p>
                                    <Link className="btnText" to="/">{data.name}</Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className="verifyValueCard"></div> */}
            </div>
            <div className="verifyBottomSection">
                {verifyBottomSection.map((bottomdata) => (
                    <div className="bottomCard">
                        <p>{bottomdata.value}</p>
                        <p>{bottomdata.content}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default OurStory;
