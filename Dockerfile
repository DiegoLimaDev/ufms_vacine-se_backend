FROM node:20-alpine

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de dependência PRIMEIRO para aproveitar o cache do Docker
COPY package*.json ./

# Instale TODAS as dependências (incluindo as de desenvolvimento)
RUN npm install

# Copie o resto do seu código
COPY . .

# O comando para iniciar em modo de desenvolvimento
CMD ["npm", "run", "dev"]