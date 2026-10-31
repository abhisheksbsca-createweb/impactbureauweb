import "./ImpactMagazine.scss"

// MAGAZINE COVER
// 1. Put the cover image in src/assets, for example src/assets/magazine-cover.jpg
// 2. Add this import at the top of the file (change the ../ to match your folders):
//        import magazineCover from "../../../assets/magazine-cover.jpg";
// 3. Change the line below to:  const MAGAZINE_COVER = magazineCover;
const MAGAZINE_COVER = null;

function ImpactMagazine() {
    return (
        <section className="magazinePage">
            <div className="magazineInner">

                {/* ===== Title and first line ===== */}
                <div className="magazineTop">
                    <p className="magazineLabel">Impact Bureau</p>
                    <h1 className="magazineTitle">Impact Magazine</h1>
                    <p className="magazineLead">A record of the people actually changing things.</p>
                </div>

                <div className="magazineLayout">

                    {/* ===== Left side: the cover ===== */}
                    <div className="magazineLeft">
                        <div className="magazineCover">
                            {MAGAZINE_COVER ? (
                                <img src={MAGAZINE_COVER} alt="Impact Magazine cover" />
                            ) : (
                                <span className="magazineCoverLabel">Magazine cover</span>
                            )}
                        </div>
                    </div>

                    {/* ===== Right side: the text ===== */}
                    <div className="magazineText">
                        <p className="magazineParagraph">
                            Impact Magazine is a compilation of real work by real change makers the soldiers of
                            society who spent their years doing the work, not announcing it. They are not hard to
                            find if you go looking. Most people never go looking.
                        </p>

                        <p className="magazineParagraph">
                            Every year our team does. We travel to where the work is happening. We sit with the
                            people doing it, we see what they have built, and we film it. Then we write it down to
                            last: the names, the places, the numbers, and the years it took.
                        </p>

                        <p className="magazineQuote">
                            This is not a list of people with reach. It is a list of people with results.
                        </p>

                        <p className="magazineParagraph">
                            Everyone in these pages was found, visited, and checked before a word was published.
                            Nobody buys their way in and nobody is here because of who they know.
                        </p>

                        <p className="magazineParagraph">
                            Some of them have been at it for thirty years. Some started last winter. Some work alone
                            and some run organisations. What they share is that something in someone’s life is
                            different because they showed up  and that almost nobody has written it down until now.
                        </p>

                        <p className="magazineClosing">
                            That is what this magazine is for. Not to flatter anyone. To keep the record.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ImpactMagazine;
