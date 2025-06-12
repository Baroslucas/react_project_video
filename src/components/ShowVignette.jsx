export function ShowVignette({showImg, showTitle}) {
    return (
        <div style={{ width: "150px", textAlign: "center" }}>
            <img src={showImg} alt="{showTitle}" style={{ width: "100%", borderRadius: "8px" }}/>
            <p>{showTitle}</p>
        </div>
    )
}