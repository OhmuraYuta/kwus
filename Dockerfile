FROM node:lts-alpine
WORKDIR /my-app
COPY ./my-app/package*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]