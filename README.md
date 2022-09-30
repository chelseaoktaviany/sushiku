# sushiku
- A project is to build a web application for restaurant including sign in, registration, food menu, and etc.
- Using HTML, CSS, JavaScript, Bootstrap, and NodeJS to build the landingpage website
- Using JS libraries included in ```package.json```
- Using MySQL to create a database called sushiku_db

## Usage
- Type the command ```npm i --save-dev sequelize-cli```
- Make a new database called ```sushiku_db``` via phpmyadmin or mysql cli
- Type the command ```sequelize migration:generate --name [name_of_your_migration]```
- After editing the latest generated migration in migrations folder, type ```sequelize db:migrate``` 
- Type the command ```npm start``` 
