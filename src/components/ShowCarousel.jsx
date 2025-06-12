import { useEffect, useState } from "react";
import { FilterInput } from "./FilterInput";
import { ShowVignette } from "./ShowVignette";
import { fetchPopularShow } from "../api/popularShows";

export function ShowCarousel() {
    const [shows, setShows] = useState([]);


    useEffect(() => {
        async function getShow() {
            const data = await fetchPopularShow();
            setShows(data);
        }

        getShow()
    }, []);



    return (
        <div>
            <div>
                <p>You may also like:</p>
                <FilterInput />
            </div>
            <div style={{ display: "flex", gap: "1rem", overflowX: "auto" }}>
                {shows.map((show) => (
                    <ShowVignette 
                    key={show.id}
                    showImg={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
                    showTitle={show.name}
                />
                ))}
            </div>
            
        </div>
    )
}