# Utiliza uma imagem base oficial do Node.js
FROM node:20

# Define o diretório de trabalho do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json antes de copiar o código
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto para dentro do contêiner
COPY . .

# Roda o build da aplicação Next.js
RUN npm run build

# Define variáveis de ambiente
ARG PORT_BUILD=3000
ENV PORT=$PORT_BUILD

# Expõe a porta do container
EXPOSE $PORT

# Inicia o servidor Next.js em modo produção
CMD ["npm", "run", "start"]