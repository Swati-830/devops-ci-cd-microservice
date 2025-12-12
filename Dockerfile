FROM node:18-alpine AS builder
WORKDIR /app
COPY app/package.json .
RUN npm install --production
COPY app/ .


FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app /app
ENV PORT=3000
EXPOSE 3000
HEALTHCHECK --interval=10s --timeout=3s CMD wget -q -O- http://localhost:3000/health || exit 1
CMD ["node", "server.js"]
