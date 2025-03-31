
## Instrucoes

Este e um teste de amar asisst, backen em laravel e front em vue

## Docker

- inicializar o docker:  docker compose up -d

## Backend

- acessar ao back end dentro: docker compose exec app bash

    - instalar o vendor: composer install

    - liberar as permicoes da pasta storage: chmod -R o+w storage

    - rodar as migracoes: php artisan migrate

    - rodar os seeds do produto: php artisan db seed --class=ProdutoSeeder 

## Frontend

- acessar a pasta frontend dentro da pasta: npm install

- acessar a pasta frontend dentro da pasta: npm run dev
