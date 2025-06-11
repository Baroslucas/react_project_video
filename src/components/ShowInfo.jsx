export function ShowInfo({status, FirstAirDate, LastAirDate, NumberOfSeasons, NumberOfEpisodes, Network }) {
    return (
        <div>
            <h4>Show Info</h4>
            <div>
                <span>Status: {status}</span>
                <span>First Air Date: {FirstAirDate}</span>
                <span>Last Air Date: {LastAirDate}</span>
                <span>Number of Seasons: {NumberOfSeasons}</span>
                <span>Number of Episodes: {NumberOfEpisodes}</span>
                <span>Network: {Network}</span>
            </div>
        </div>
    )
    

}