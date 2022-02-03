import { useState, useEffect } from "react";
import Axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [articlesList, setArticlesList] = useState([]);

  const getArticles = () => {
    Axios.get("http://localhost:8000/").then(({ data }) => {
      setArticlesList(data);
    });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="text-center">
      <h1>Home Page</h1>
      <button onClick={getArticles}>Show</button>
      {articlesList.map((val, key) => {
        return (
          <div>
            <Card style={{ width: "60rem" }}>
              <Card.Body>
                <Card.Title>{val.title}</Card.Title>
                <Card.Text>{val.description}</Card.Text>
                <Card.Text>{val.date}</Card.Text>
                <Card.Text>{val.id_category}</Card.Text>
                <Button variant="outline-secondary" size="sm">Update</Button>{' '}
                <Button variant="outline-danger" size="sm">Delete</Button>{' '}
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
