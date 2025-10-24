FROM node:lts
WORKDIR /workdir/my-app
COPY ./my-app/package*.json ./
RUN npm install

COPY ./docker/app/.extra_bashrc /root/.extra_bashrc
RUN echo "source /root/.extra_bashrc" >> /root/.bashrc

EXPOSE 3000
CMD ["npm", "run", "dev"]