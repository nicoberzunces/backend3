FROM node:18.20.2-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 18868
CMD ["npm", "run", "dev"]