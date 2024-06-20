import React, { useEffect, useState } from "react";
import axios from "axios";

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/v1/test")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Example Component</h2>
      {data && <p>{data}</p>}
    </div>
  );
}

export default ExampleComponent;
