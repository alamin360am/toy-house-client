import useTitle from "../../hooks/useTitle";
import "./blog.css";

const Blog = () => {
  useTitle("Blog");
  return (
    <section className="section-blog">
      <div className="grid col-2">
        <div className="blog-box">
          <h3 className="secondary-heading">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p className="answer">
            Tokens are pieces of data that carry just enough information to
            facilitate the process of determining a users identity or
            authorizing a user to perform an action. As mentioned, for security
            purposes, access tokens may be valid for a short amount of time.
            Once they expire, client applications can use a refresh token to
            refresh the access token. That is, a refresh token is a credential
            artifact that lets a client application get new access tokens
            without having to ask the user to log in again.
          </p>
        </div>
        <div className="blog-box">
          <h3 className="secondary-heading">
            Compare SQL and NoSQL databases?
          </h3>
          <p className="answer">
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </div>
        <div className="blog-box">
          <h3 className="secondary-heading">What is express js?</h3>
          <p className="answer">
            Express is a minimalist and flexible framework that is easy to use
            and has a large community of developers. NestJS, on the other hand,
            is a newer framework that provides additional features such as
            dependency injection, a modular architecture, and an intuitive CLI.
          </p>
        </div>
        <div className="blog-box">
          <h3 className="secondary-heading">What is Nest JS?</h3>
          <p className="answer">
            Nest. js is one of the fastest-growing Node. js frameworks for
            building efficient, scalable, and enterprise-grade backend
            applications using Node. js. It is known for producing highly
            testable, maintainable, and scalable applications using modern
            JavaScript and TypeScript
          </p>
        </div>
        <div className="blog-box">
          <h3 className="secondary-heading">What is MongoDB aggregate?</h3>
          <p className="answer">
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            stages make up what is known as a pipeline. The stages in a pipeline
            can filter, sort, group, reshape and modify documents that pass
            through the pipeline.
          </p>
        </div>
        <div className="blog-box">
          <h3 className="secondary-heading">How does aggregate work?</h3>
          <p className="answer">
            How does aggregate work in? In soccer, aggregate works by taking the
            scoreline from one soccer game between two teams and adding it to
            the scoreline of another game between those same two teams. The
            combined scoreline from those two games is the aggregate scoreline
            or the score “on aggregate”.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
