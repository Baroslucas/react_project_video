export function ActorVignette({actorImg, actorName, showName}) {
    return (
        <div>
            <h4>Main Cast</h4>
            <div>
                <img src={actorImg} alt="" />
                <h6>{actorName}</h6>
                <p>{showName}</p>
            </div>
        </div>
    )
}