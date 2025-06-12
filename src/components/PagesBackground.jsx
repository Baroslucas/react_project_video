import { useEffect, useState } from "react";
import { fetchPopularShow } from "../api/popularShows";

export function PagesBackground() {
  const [backdropUrl, setBackdropUrl] = useState("");

  useEffect(() => {
    async function getBackdrop() {
      const data = await fetchPopularShow();
      const mostPopular = data?.[0];

      if (mostPopular?.backdrop_path) {
        setBackdropUrl(`https://image.tmdb.org/t/p/original${mostPopular.backdrop_path}`);
      }
    }

    getBackdrop();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backdropUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
        filter: "brightness(0.5)",
      }}
    ></div>
  );
}
