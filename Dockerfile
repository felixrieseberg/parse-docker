FROM node:argon
MAINTAINER felix@felixrieseberg.com

RUN mkdir -p /usr/src/parse
WORKDIR /usr/src/parse

# Install MongoDB
RUN apt-get update \
 && apt-get -y install mongodb
CMD ["/usr/bin/mongod", "--config", "/etc/mongodb.conf"]

COPY package.json /usr/src/parse/
RUN npm install

COPY . /usr/src/parse

ENV APP_ID YourAppId
ENV MASTER_KEY YourMasterKey
ENV FILE_KEY YourOptionalFileKey

EXPOSE 8080 27017

CMD [ "npm", "start" ]
