FROM oven/bun:latest

WORKDIR /app

COPY package.json ./
COPY bun.lock ./

RUN bun install

COPY . .

EXPOSE 3000

ARG SERVICE_DOMAIN
ARG API_KEY
ENV SERVICE_DOMAIN=$SERVICE_DOMAIN
ENV API_KEY=$API_KEY

RUN bun run build

CMD ["bun", "start"]