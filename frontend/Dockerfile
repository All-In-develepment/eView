# Define a imagem base
FROM node:18-alpine

# Cria um diretório para o aplicativo
WORKDIR /app

# Copia os arquivos do projeto
COPY ["package.json", "package-lock.json*", "./"]

COPY  . .

# Instala as dependências
RUN npm install

# Expõe a porta na imagem
EXPOSE ${PORT}

# Inicia o aplicativo
CMD ["npm", "run", "dev"]
