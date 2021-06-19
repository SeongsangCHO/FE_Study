import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import "./App.css";
import errorImg from "./42.png";
const IMAGE_ENDPOINT = `https://image.tmdb.org/t/p/w500`;
const API_ENDPOINT = `https://api.themoviedb.org/3/movie`;
const API_KEY = `4c21dda5cc0e6817211c9d7d38ed5d1d`;

function App() {
  const interSectRef = useRef(null);
  const [page, setPage] = useState(2);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  useEffect(async () => {
    await fetchData(page);
  }, [page]);
  const handleObserver = useCallback(async (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      console.log("is InterSecting");
      setPage((prev) => prev + 1);
    }
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    if (interSectRef.current) observer.observe(interSectRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);
  let options = {
    root: null,
    rootMargin: "20px",
    threshold: 1.0,
  };
  const fetchData = useCallback(
    async (nextPage) => {
      setIsLoding(true);
      try {
        const res = await axios.get(
          `${API_ENDPOINT}/${nextPage}?api_key=${API_KEY}`
        );
        setData([...data].concat({ ...res.data }));
        setIsLoding(false);
        return res.data;
      } catch {
        console.log("ERROR");
        setPage((prev) => prev + 1);
      }
    },
    [data]
  );
  return (
    <div className="App">
      <header>
        <h1>Movie Infinite Scroll</h1>
      </header>
      <div className="Wrapper">
        {data.map((obj) => {
          let imgPath = IMAGE_ENDPOINT + (obj.poster_path ?? obj.backdrop_path);

          if (imgPath.substr(-4) === "null") {
            imgPath = errorImg;
          }

          return (
            <div className="box" key={obj?.title}>
              <div>
                <h1>{obj?.title}</h1>
                <img src={imgPath} />
                <span>평점 : {obj?.popularity}</span>
              </div>
            </div>
          );
        })}
        {isLoading ? <div className="box">box</div> : ""}
        <div className="inter" ref={interSectRef}>
          <h5>더보기</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
