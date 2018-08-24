# App to visualize a sended message to a client 

docker run -d --name mongosagra -v $(pwd)/sagra:/data/db mongo
docker run --link mongosagra:mongo -it -e MONGOURL=mongodb://mongo:27017/example -p 8080:8080 --init kitchen

