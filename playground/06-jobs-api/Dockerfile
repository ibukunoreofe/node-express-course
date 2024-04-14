FROM node:20.10.0

# International plugin and cron
RUN apt-get update \
  && apt-get install -y \
    cron

# Networking Tools
RUN apt-get install -y \
    iproute2 iputils-ping

# Other Tools
RUN apt-get install -y \
    lsof htop \

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

# Volumes are mounted after image is built.
# Simply during runing container.
# Since this is building image, we need to copy manually what we need for image.
COPY package*.json ./

RUN if [ "$NODE_ENV" = "production" ]; then npm install --only=production; fi

EXPOSE 3000

CMD if [ "$NODE_ENV" = "production" ]; \
    then npm run start; \
    else npm run dev; \
    fi
#CMD ["cron", "-f"]
