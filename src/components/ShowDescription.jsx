import { RateBar } from './RateBar'

export function ShowDescription({title, description}) {
    return (
        <div>
            <h2>{title}</h2>
            <RateBar />
            <p>{description}</p>
        </div>
    )
}