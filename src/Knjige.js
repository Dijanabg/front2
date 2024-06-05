import React, { useState } from "react";

function Knjige() {
  const [data, setData] = useState(null);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <button
        onClick={async () => {
          let result = await fetch("http://localhost:8080/api/v1/book");
          if (result.ok) {
            let d = await result.json();
            setData(d);
          } else {
            console.log(`Fetch nije uspeo sa kodom ${result.status}`);
          }
        }}
      >
        GET
      </button>
    </div>
  );
}

export default Knjige;
