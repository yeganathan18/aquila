import BooksList from "../src/components/booksLists";

const about = () => {
  return (
    <div className="container">
      <h1>About</h1>
      <p>
        This is the TodoList app v1.0.0. It is part of a React crash course.
      </p>
      <BooksList />
    </div>
  );
};

export default about;
