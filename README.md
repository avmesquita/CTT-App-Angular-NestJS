# CTT App
Projeto de aplicativo completo para consulta de códigos postais de Portugal

## Definição
* Backend REST API com NestJS
* Frontend com ANGULAR a consumir o backend
* Aplicativo .net de geração da base de dados em sqlite (importado de https://github.io/avmesquita/CTT-Api)

## Backend Endpoints
* Swagger       => /swagger
* Apartado      => /api/apartado
* Codigo Postal => /api/codigo-postal
* Concelho      => /api/concelho
* Distrito      => /api/distrito
* Test          => /api

## Compile & Execute

* Compilar FRONTEND
```sh
cd frontend
npm install
npm run build
```

* Compilar BACKEND
```sh
cd api
npm install
npm run build:prod
```

* Executar DEV
```sh
cd api
npm install
npm run start:dev
```

## Donating

> Projetos deste tipo servem-me para estudo e para contribuir de alguma forma para a comunidade.
> Desenvolvimento de software é uma paixão que tenho desde criança e é o que espero fazer até meus últimos dias.
> Se achas importante incentivar-me, podes optar por patroninar-me de forma que continue a criar softwares para a comunidade em meu tempo livre ou mesmo para a criação ou suporte de algo que seja de vosso interesse. 

> Se for esta opção, [Patrocínio](https://github.com/sponsors/avmesquita).

> Se preferes pagar-me um café: [Paypal](https://paypal.me/avmesquita)
