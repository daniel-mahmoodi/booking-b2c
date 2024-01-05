import { useEffect, useState } from "react";
const baseWPUrl = "https://blog.takish724.ir/wp-json/wp/v2";
export function useGetWPData(category) {
  const [data, setData] = useState({});
  const [media, setMedia] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${baseWPUrl}/posts?categories=${category}&_fields=title,link,featured_media`
        );
        const result = await response.json();
        setData(result[0]);

        //getmedia:
        const fetchMedia = async () => {
          try {
            const response = await fetch(
              `${baseWPUrl}/media/${result[0].featured_media}`
            );
            const resultMedia = await response.json();
            setMedia(resultMedia.guid.rendered);
          } catch (error) {
            console.error("Error fetching data:", error);
          } finally {
            setLoading(false);
          }
        };
        fetchMedia();
        //.
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);

  return { data, media, loading };
}
