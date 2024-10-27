import "./App.css";
import Users from "./Users";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=girls")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      {data.map(({ score, show}) => {
        return (
          <>
            <Users
              image={show.image?.medium}
              score={score}
              name={show.name}
              language={show.language}
              genres={show.genres}
            />
          </>
        );
      })}
    </div>
  );
}

export default App;
