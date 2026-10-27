import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import video from "../../../assets/video/Website.mp4"
import './Home.scss'

function Home() {




    const videoRef = useRef(null);
    const [muted, setMuted] = useState(false);
    const [soundBtnClosed, setSoundBtnClosed] = useState(false);

    // When the page opens: try to play WITH sound.
    // Browsers often block that, so if it fails we play it muted instead.
    useEffect(() => {
        const video = videoRef.current;
        video.muted = false;

        video.play().catch(() => {
            video.muted = true;
            setMuted(true);
            video.play().catch(() => {});
        });
    }, []);

    // The sound button.
    // Closed tab (at the right edge): clicking it just opens the button again.
    // Open button: clicking it turns the sound on or off, then it slides to the right edge.
    function handleSoundButton() {
        if (soundBtnClosed) {
            setSoundBtnClosed(false);
            return;
        }

        const video = videoRef.current;
        video.muted = !video.muted;
        setMuted(video.muted);
        video.play().catch(() => {});
        setSoundBtnClosed(true);
    }


    return (
        <>

            <div className="homeContainer">

                {/* Background Video */}
                {/* <video
                    className="homeBackgroundVideo"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support HTML video.
                </video>
                <div className="homeVideoOverlay"></div> */}

                {/* background video, then a dark layer so the text stays readable */}
                <video ref={videoRef} className="homeVideo" src={video} loop playsInline />
                <div className="homeOverlay"></div>

                <div className="homeContnetmainBox">
                    <div className="homeTitleBox homeChildBox">
                        <span>Impact Bureau {/* · Est. 2026 */}</span>
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
                 <button
                    type="button"
                    className={soundBtnClosed ? "homeSoundBtn homeSoundBtnClosed" : "homeSoundBtn"}
                    onClick={handleSoundButton}
                    aria-label={soundBtnClosed ? "Open the sound button" : muted ? "Turn sound on" : "Mute"}
                >
                    {muted ? <FiVolumeX /> : <FiVolume2 />}
                    <span>{muted ? "Turn sound on" : "Mute"}</span>
                </button>
            </div>
        </>
    )
}

export default Home;
