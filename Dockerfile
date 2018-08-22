FROM node as build
WORKDIR /app
COPY ./package*.json /app/
RUN npm i
COPY . /app
RUN npm run build

FROM node
WORKDIR /app
COPY --from=build /app/build /app/build
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/server /app/server
EXPOSE 8080
CMD [ "node", "server/index.js" ]