FROM node:lts
WORKDIR /workdir/my-app
COPY ./my-app/package*.json ./
RUN npm install

RUN curl -o /root/.git-completion.sh https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash
RUN curl -o /root/.git-prompt.sh https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh

COPY ./docker/app/.extra_bashrc /root/.extra_bashrc
RUN echo "source /root/.extra_bashrc" >> /root/.bashrc

EXPOSE 3000
CMD ["npm", "run", "dev"]
