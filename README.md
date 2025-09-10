💉 Projeto Vacine-se
API de backend para o sistema de informações de vacinas na cidade do Recife.

▶️ Como Executar

1. Pré-requisitos
   Node.js (v18 ou superior)

NPM ou Yarn

Um banco de dados PostgreSQL rodando

2. Instalação
   Clone o repositório, entre na pasta e instale as dependências.

3. Variáveis de Ambiente
   Crie um .env e use os dados abaixo:

DB_USERNAME=user
DB_PASSWORD=1234
DB_PORT=5432
DB_PORT_EXTERNAL=5433
DB_NAME=PI_DB
DB_HOST=db_pi_backend

➡️ Edite o arquivo .env com os dados de porta, usuário e senha do seu Postgres.

4. Rodando a Aplicação
   O ideal é rodar utilizando o docker. Entre na pasta do projeto e use o comando: `docker compose up`
   Caso queria rodar fora do docker siga os passos:
   Na pasta raiz do projeto use o comando: `npm i`
   Após a instalação das dependências use o comando: `npm run dev`
   A aplicação estará disponível em http://localhost:3333.

📚 Documentação da API (Swagger)
Com a aplicação rodando, a documentação completa dos endpoints pode ser acessada em:

👉 http://localhost:3333/api
