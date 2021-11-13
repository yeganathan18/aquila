import Header from "../src/components/Header";
import Nav from "../src/components/Nav";

const about = () => {
    return (
        <div>

            <Header />
            <Nav />
        <h1>About</h1>
        <p>
            This is the TodoList app v1.0.0. It is part of a React crash course.
        </p>
        </div>
    );
}


export default about;