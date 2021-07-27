
# コンテナ作成時の処理
FROM node:14.15
WORKDIR /app
COPY /app .
RUN npm install

# コンテナ実行時の処理
EXPOSE 3000
CMD [ "npm", "run", "dev"]