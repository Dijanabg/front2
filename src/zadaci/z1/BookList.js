import { useLoaderData } from "react-router-dom";

const BookList = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1>Knjige</h1>
      <ul></ul>
    </div>
  );
};

export default BookList;
