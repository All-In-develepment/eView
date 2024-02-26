# Define a imagem base
FROM node:20-alpine

# Cria um diretório para o aplicativo
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala as dependências
RUN npm install

# Define a porta do aplicativo
ENV PORT 3000

# Expõe a porta na imagem
EXPOSE 3000

# Inicia o aplicativo
CMD ["npm", "run", "start"]
