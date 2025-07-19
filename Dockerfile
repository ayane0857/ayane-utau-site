FROM oven/bun:latest

WORKDIR /app

COPY package.json ./
COPY bun.lock ./

RUN bun install

COPY . .

EXPOSE 3000

ARG serviceDomain
ARG apiKey
ENV serviceDomain=$serviceDomain
ENV apiKey=$apiKey

RUN bun run build

CMD ["bun", "start"]