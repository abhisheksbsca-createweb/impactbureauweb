import { Link } from "react-router-dom";
import verifyimg from "../../../../assets/village.jpeg"
import cardimg from "../../../../assets/comingsoon.jpeg"
import { FaRegPlayCircle } from "react-icons/fa";
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


function HowWeVerify() {
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

export default HowWeVerify;
