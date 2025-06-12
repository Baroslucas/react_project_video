import { FilterInput } from "./FilterInput";
import { ShowVignette } from "./ShowVignette";

export function ShowCarousel() {
    return (
        <div>
            <div>
                <p>You may also like:</p>
                <FilterInput />
            </div>
            <ShowVignette />
        </div>
    )
}