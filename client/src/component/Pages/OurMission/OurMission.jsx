import "./OurMission.scss"

function OurMission (){
    const data=window.outerHeight;
    // alert(data)
    return(

        <>
        <div className="missionPageContainer">
            <div className="missionPageContainerChild">
                <div className="missionPageInnerChild">
                    <div className="missionPageInnerChildLeftChild missionPageContentChild">left</div>
                    <div className="missionPageInnerChildRightChild missionPageContentChild">right</div>
                </div>
                <div className="missionPageInnerChild"></div>
            </div>
        </div>
        </>
    )
}


export default OurMission;