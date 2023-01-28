# Nginx with Node.js Challenge

The proposed challenge is to create a Node server that will run through Nginx. When accessing Nginx on port 8080, the Node application should create a record in the database and then list the records in an HTML page.

## Run the challenge

- Start the application using the following command:
  ```sh
  docker-compose up
  ```

- Access the host `http://localhost:8080/` and check if the phrase "Full Cycle Rocks!" is displayed, with all persons created in the database.
