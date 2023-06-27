## interpretes (Interprete)

| Name           | Name of Entity | Type         | Nullable | Attribute Key | Comment |
| :------------- | :------------- | :----------- | :------: | :-----------: | :------ |
| id             | id             | uuid         |          |      PK       |         |
| data_criacao   | data_criacao   | timestamp    |          |               |         |
| data_alteracao | data_alteracao | timestamp    |          |               |         |
| nome           | nome           | varchar(255) |          |               |         |
| cpf            | cpf            | char(11)     |          |               |         |

## alunos (Aluno)

| Name           | Name of Entity | Type         | Nullable | Attribute Key | Comment |
| :------------- | :------------- | :----------- | :------: | :-----------: | :------ |
| id             | id             | uuid         |          |      PK       |         |
| data_criacao   | data_criacao   | timestamp    |          |               |         |
| data_alteracao | data_alteracao | timestamp    |          |               |         |
| nome           | nome           | varchar(255) |          |               |         |
| cpf            | cpf            | char(11)     |          |               |         |

## estabelecimentos (Estabelecimento)

| Name           | Name of Entity | Type         | Nullable | Attribute Key | Comment |
| :------------- | :------------- | :----------- | :------: | :-----------: | :------ |
| id             | id             | uuid         |          |      PK       |         |
| data_criacao   | data_criacao   | timestamp    |          |               |         |
| data_alteracao | data_alteracao | timestamp    |          |               |         |
| cnpj           | cnpj           | varchar(14)  |          |               |         |
| nome           | nome           | varchar(255) |          |               |         |

## salas_de_aula (SalaDeAula)

| Name              | Name of Entity  | Type         | Nullable | Attribute Key | Comment |
| :---------------- | :-------------- | :----------- | :------: | :-----------: | :------ |
| id                | id              | uuid         |          |      PK       |         |
| estabelecimentoId | estabelecimento | uuid         | nullable |      FK       |         |
| data_criacao      | data_criacao    | timestamp    |          |               |         |
| data_alteracao    | data_alteracao  | timestamp    |          |               |         |
| nome              | nome            | varchar(255) |          |               |         |

## aulas (Aula)

| Name             | Name of Entity | Type      | Nullable | Attribute Key | Comment |
| :--------------- | :------------- | :-------- | :------: | :-----------: | :------ |
| id               | id             | uuid      |          |      PK       |         |
| aluno_id         | aluno          | uuid      |          |      FK       |         |
| dia_da_semana_id | dia_da_semana  | uuid      |          |      FK       |         |
| sala_de_aula_id  | sala_de_aula   | uuid      |          |      FK       |         |
| data_criacao     | data_criacao   | timestamp |          |               |         |
| data_alteracao   | data_alteracao | timestamp |          |               |         |

## dias_da_semana (DiaDaSemana)

| Name           | Name of Entity | Type      | Nullable | Attribute Key | Comment |
| :------------- | :------------- | :-------- | :------: | :-----------: | :------ |
| id             | id             | uuid      |          |      PK       |         |
| data_criacao   | data_criacao   | timestamp |          |               |         |
| data_alteracao | data_alteracao | timestamp |          |               |         |
| nome           | nome           | string    |          |               |         |

## usuarios (Usuario)

| Name           | Name of Entity | Type         | Nullable | Attribute Key | Comment |
| :------------- | :------------- | :----------- | :------: | :-----------: | :------ |
| id             | id             | uuid         |          |      PK       |         |
| data_criacao   | data_criacao   | timestamp    |          |               |         |
| data_alteracao | data_alteracao | timestamp    |          |               |         |
| email          | email          | varchar(255) |          |               |         |
| password       | password       | varchar(64)  |          |               |         |
| username       | username       | varchar(64)  |          |               |         |
| ativo          | ativo          | bit          |          |               |         |

## roles (Role)

| Name | Name of Entity | Type        | Nullable | Attribute Key | Comment |
| :--- | :------------- | :---------- | :------: | :-----------: | :------ |
| id   | id             | uuid        |          |      PK       |         |
| nome | nome           | varchar(64) |          |               |         |

## alunos_interpretes (alunos_interpretes)

| Name          | Name of Entity | Type | Nullable | Attribute Key | Comment |
| :------------ | :------------- | :--- | :------: | :-----------: | :------ |
| aluno_id      | aluno_id       | uuid |          |      FK       |         |
| interprete_id | interprete_id  | uuid |          |      FK       |         |

## usuarios_roles (usuarios_roles)

| Name       | Name of Entity | Type | Nullable | Attribute Key | Comment |
| :--------- | :------------- | :--- | :------: | :-----------: | :------ |
| role_id    | role_id        | uuid |          |      FK       |         |
| usuario_id | usuario_id     | uuid |          |      FK       |         |
