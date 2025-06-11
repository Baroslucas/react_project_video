export function ShowVignette({showImg, showTitle}) {
    return (
        <div>
            <img src={showImg} alt="" />
            <p>{showTitle}</p>
        </div>
    )
}