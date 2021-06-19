import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import "./App.css";
const IMAGE_ENDPOINT = `https://image.tmdb.org/t/p/w500`;
const API_ENDPOINT = `https://api.themoviedb.org/3/movie`;
const API_KEY = `4c21dda5cc0e6817211c9d7d38ed5d1d`;

function App() {
  const interSectRef = useRef(null);
  const [id, setId] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  useEffect(async () => {
    console.log("초기데이터 받아오기");

    await getNextData(id);
  }, []);
  const handleObserver = async (entries) => {
    console.log("handle", "id", id);

    const target = entries[0];
    if (target.isIntersecting) {
      console.log("intersect", id);
      let res = await getNextData(id);

      console.log(res);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    if (interSectRef.current) observer.observe(interSectRef.current);
    return () => observer.disconnect();
  }, [data]);
  let options = {
    root: null,
    // root: document.querySelector("#root"),
    rootMargin: "20px",
    threshold: 0.5,
  };
  const [getDataCnt, setGetDataCnt] = useState(0);
  const getNextData = async (id) => {
    console.log("call GND", data, id);

    setIsLoding(true);
    const promiseContainer = [];
    try {
      for (let i = id; i < id + 5; i++) {
        promiseContainer.push(fetchData(i));
      }
      Promise.all(promiseContainer).then((value) => {
        value = value.filter((v) => v !== undefined);
        setTimeout(() => {
          setIsLoding(false);
          setData([...data, ...value]);
          setGetDataCnt(value.length);
        }, 1000);
      });
    } catch {
      console.log("NOT FOUND");
    }
  };
  const fetchData = useCallback(async (page) => {
    try {
      const res = await axios.get(`${API_ENDPOINT}/${page}?api_key=${API_KEY}`);
      setId(page + 1);
      return res.data;
    } catch {
      console.log("ERROR");
    }
  }, []);
  return (
    <div className="App">
      infinite scroll
      <button onClick={() => getNextData(id)}>getData</button>
      {data.map((obj) => {
        return (
          <div key={obj?.title}>
            <h5>{obj?.id}</h5>
            <h1>제목 : {obj?.title}</h1>
            <img src={IMAGE_ENDPOINT + obj?.backdrop_path} />
            <h3>평점 : {obj?.popularity}</h3>
            <hr />
          </div>
        );
      })}
      {isLoading ? <div className="box">box</div> : ""}
      <div ref={interSectRef}>InterSection Point</div>
    </div>
  );
}

export default App;
