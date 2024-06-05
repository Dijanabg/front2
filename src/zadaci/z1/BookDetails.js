import { useLoaderData } from "react-router-dom";

function BookDetails() {
  const data = useLoaderData();
  const [book, setBook] = useImmer(data);
  return 
    <div>
      <label>
        Title:{" "}
        <input
          value={book.title}
          onChange={(e) =>
            setBook((b) => {
              b.title = e.target.value;
            });
          }}
        />
      </label>
    </div>
  
}

export default BookDetails;
