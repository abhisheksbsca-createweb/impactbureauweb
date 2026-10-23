import { Link } from "react-router-dom";
import "./OurMission.scss"

function OurMission (){
    const data=window.outerHeight;
    // alert(data)
    return(

        <>
        <div className="missionPageContainer">
            <div className="missionPageContainerChild">
                <div className="missionPageInnerUpperChild">
                    <div className="missionPageInnerChildLeftChild missionPageContentChild">
                        <span>our mission</span>
                    </div>
                    <div className="missionPageInnerChildRightChild missionPageContentChild">
                        <div className="missonRightUpperChild">
                            <p>A society where <span>every act of real change</span>  is recorded, recognised, and given the support to <span>grow beyond one village.</span></p>
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
                            <p>“[One sentence from the founder on why this record needs to exist — personal, specific, no slogans.]”</p>
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
        </div>
        </>
    )
}


export default OurMission;