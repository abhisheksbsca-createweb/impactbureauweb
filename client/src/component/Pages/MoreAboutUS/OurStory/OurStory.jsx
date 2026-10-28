import "./OurStory.scss";

function OurStory() {
    return (
        <section className="ourStoryPage">
            <div className="ourStoryInner">

                {/* ===== Title and opening line ===== */}
                <div className="ourStoryTop">
                    <p className="ourStoryLabel">Impact Bureau</p>
                    <h1 className="ourStoryTitle">Our story</h1>
                    <p className="ourStoryLead">
                        It began in Kalan, a small village in Sultanpur, eastern Uttar Pradesh.
                    </p>
                </div>

                <div className="ourStoryLayout">

                    {/* ===== Left side: two numbers from the story ===== */}
                    <div className="ourStoryFacts">
                        <div className="ourStoryFact">
                            <p className="ourStoryFactNumber">50+</p>
                            <p className="ourStoryFactText">years of Shri Vishwanath Shiksha Samiti bringing education to the region</p>
                        </div>
                        <div className="ourStoryFact">
                            <p className="ourStoryFactNumber">35,000+</p>
                            <p className="ourStoryFactText">students served by its institutions today</p>
                        </div>
                    </div>

                    {/* ===== Right side: the story ===== */}
                    <div className="ourStoryText">
                        <p className="ourStoryParagraph">
                            For over five decades, Shri Vishwanath Shiksha Samiti has worked there to bring modern
                            education to the region. Today, its institutions serve more than 30,000 students.
                        </p>

                        <p className="ourStoryQuote">
                            That work taught us something: education is only one way people change lives.
                        </p>

                        <p className="ourStoryParagraph">
                            Across the region, others were doing the same through health, livelihoods, the
                            environment, governance and community service. Most of that work went unseen.
                        </p>

                        <p className="ourStoryParagraph">
                            So we decided to go beyond our own institutions and recognise the people bringing
                            positive change, whatever the medium.
                        </p>

                        <p className="ourStoryClosing">
                            That became Impact Bureau: a voice for positive change, and a platform that brings
                            attention to the issues affecting millions of lives.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default OurStory;
