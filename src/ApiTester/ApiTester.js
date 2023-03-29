import axios from "axios";
import { useEffect } from "react";  

function ApiTester() {
  useEffect(() => {
    a();
  }, []);

  const a = () => {
    const post = {
      title: "First one",
      content: "This is first",
    };
    axios
      .post("http://localhost:8080/feed/post", JSON.stringify(post), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      {/* <RouteLinks /> */}
      {/* <Upload /> */}
    </div>
  );
}

export default ApiTester;
