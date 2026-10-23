import { Link } from "react-router-dom";

import './Home.scss'

function Home() {

    return (
        <>
            
            <div className="homeContainer">
                <div className="homeContnetmainBox">
                    <div className="homeTitleBox homeChildBox">
                        <span>Impact Bureau · Est. 2026</span>
                    </div>
                    <div className="homeHeadingBox homeChildBox">
                        <span>Most of the good work in this country is never recorded.</span>
                    </div>
                    <div className="homeParagraphBox homeChildBox">
                        <span>We find the people quietly changing their communities, document their work, and make sure it is seen and supported.</span>
                    </div>
                    <div className="homeButtonBox homeChildBox">
                        <div className="homeBtnChild1">
                            <Link to="impact-tv">watch the film first</Link>
                        </div>
                        <div className="homeBtnChild2">
                            <Link to="/">see our three pillars</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
