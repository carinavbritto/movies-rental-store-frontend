# Usar a imagem oficial do Node.js 20
FROM node:20

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Compilar a aplicação Angular
RUN npm run build --prod

# Instalar o servidor HTTP para servir os arquivos estáticos
RUN npm install -g http-server

# Expor a porta que a aplicação irá rodar
EXPOSE 4200

# Comando para rodar o servidor HTTP
CMD ["http-server", "dist/your-angular-project-name", "-p", "4200"]
