import { Link } from "react-router-dom";
import "./OurMission.scss"
import founder from "../../../assets/fouder.PNG"
function OurMission() {


    return (

        <>
            {/*  <div className="missionPageContainer">
            <div className="missionPageContainerChild">
                <div className="missionPageInnerUpperChild">
                    <div className="missionPageInnerChildLeftChild missionPageContentChild">
                        <span>our mission</span>
                    </div>
                    <div className="missionPageInnerChildRightChild missionPageContentChild">
                        <div className="missonRightUpperChild">
                            <p>A society where <span>every act of real change</span>  is recorded, recognised, and given the support to <span>grow beyond where it began.</span></p>
                        </div>
                        <div className="missonRightLowerChild">
                            <Link to="/ourmisson">How we work</Link>
                        </div>
                    </div>
                </div>
                <div className="missionPageInnerLowerChild">
                    <div className="missionPageInnerChildLeftChild missionPageContentChild">
                        <span>our mission</span>
                    </div>
                    <div className="missionPageInnerChildRightChild missionPageContentChild">
                        
                        <div className="missionPageRightSideChild1 rightSideChild">
                            <span>Founder’s letter · 2026</span>
                        </div>
                        <div className="missionPageRightSideChild2 rightSideChild">
                            <p>“Every community has someone quietly changing it. We exist so the rest of the country finds out.”</p>
                        </div>
                        <div className="missionPageRightSideChild3 rightSideChild">
                            <span>Shashank Singh, Founder</span>
                        </div>
                        <div className="missionPageRightSideChild4 rightSideChild">
                            <Link to="/">read the letter</Link>
                        </div>



                    </div>
                </div>
                
            </div>
        </div> */}





            <section className="ourMissionPage">

                {/* ===== ONE BOX that holds two sides ===== */}
                <div className="ourMissionBox">

                    {/* ===== LEFT SIDE: founder photo ===== */}
                    {/*  <div className="ourMissionLeft">
                    <div className="ourMissionPhoto">
                        {founder ? (
                            <img src={founder} alt="Shashank Singh, Founder" />
                        ) : (
                            <span className="ourMissionPhotoLabel">Founder photo</span>
                        )}
                    </div>
                    <div className="ourMissionCaption">
                        <p className="ourMissionName">Shashank Singh</p>
                        <p className="ourMissionRole">Founder, Impact Bureau</p>
                    </div>
                </div>
 */}
                    {/* ===== RIGHT SIDE: mission message and founder's letter ===== */}
                    <div className="ourMissionRight">

                        <p className="ourMissionLabel">Our mission</p>

                        <h1 className="ourMissionStatement">
                            A society where <span>every act of real change</span> is recorded, recognised, and given
                            the support to <span>grow beyond where it began. .</span>
                        </h1>

                        <p className="ourMissionText">
                            Every community has individuals who are quietly creating meaningful change, often without
                            recognition or attention. At Impact Bureau, we believe their stories deserve to be heard.
                            Our mission is to discover these changemakers, document their work, and bring their impact
                            to the forefront, ensuring that the rest of the country sees, understands, and supports the
                            difference they are making in their communities.
                        </p>

                        <Link className="ourMissionLink" to="/ourwork">How we work</Link>

                        {/* founder's letter */}
                        <div className="ourMissionLetter">
                            <p className="ourMissionLetterLabel">Founder’s letter, 2026</p>
                            <p className="ourMissionQuote">
                                “Every community has someone quietly changing it. We exist so the rest of the country finds out.”
                            </p>
                            <div className="ourMissionCaption">
                                <p className="ourMissionName">Shashank Singh</p>
                                <p className="ourMissionRole">Founder, Impact Bureau</p>
                            </div>
                            {/* <Link className="ourMissionLink" to="/">Read the letter</Link> */}
                        </div>

                    </div>
                </div>

            </section>


        </>
    )
}


export default OurMission;