import { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import axios from "axios";
const IMAGE_ENDPOINT = `https://image.tmdb.org/t/p/w500`;
const API_ENDPOINT = `https://api.themoviedb.org/3/movie`;
const API_KEY = `4c21dda5cc0e6817211c9d7d38ed5d1d`;

function App() {
  const [id, setId] = useState(1);
  const [data, setData] = useState([]);
  useEffect(async () => {
    const initData = await fetchData(1);
    console.log(initData);
  }, []);
  let options = {
    root: document.querySelector("#root"),
    rootMargin: "0px",
    threshold: 1.0,
  };
  const getNextData = async () => {
    const dataContainer = [];
    try {
      for (let i = id; i <= id + 5; i++) {
        console.log("for", i);

        const getFiveData = async (i) => {
          console.log("getFiveData", i);

          const nextData = await fetchData(i);
          if (nextData !== undefined) {
            console.log("container push", i, nextData);

            dataContainer.push(nextData);
          }
        };
        getFiveData(i);
      }
      console.log("before setData");

      setData([...data, ...dataContainer]);
      console.log("afterSetData", data);
    } catch {
      console.log("NOT FOUND");
    }
  };
  const fetchData = async (page) => {
    try {
      const res = await axios.get(`${API_ENDPOINT}/${page}?api_key=${API_KEY}`);
      // setData([...data, { uid: id, ...res.data }]);
      setId((prev) => prev + 1);
      return res.data;
    } catch {
      console.log("ERROR");
    }
  };
  const interSectRef = useRef(null);
  return (
    <div className="App">
      infinite scroll
      <button onClick={getNextData}>getData</button>
      <div>
        <h1>id</h1>
        <h2>title</h2>
        <h3>popularity</h3>
        {/* <img>postPath</img> */}
      </div>
      <div ref={interSectRef}>InterSection Point</div>
    </div>
  );
}

export default App;
