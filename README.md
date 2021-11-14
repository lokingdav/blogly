# blogly

A simple REST API for blog posts and comments written with nodejs + mongoose + typescript

Run command ```npm run setup``` This command will create a ```.env``` environment file. Edit the file and setup your database. 

For quick database setup visit *[Mongodb atlas](https://www.mongodb.com/atlas/database)* to create an account

Run ```npm run dev``` to start local server with nodemon.

Run ```npm run build``` to build app into ```dist``` folder.

That's it.

- Login: ```POST``` http://localhost:3000/login ```username```, and ```password```.
- Register: ```POST``` http://localhost:3000/login ```firstname```, ```lastname```, ```username```, ```email```, ```password```.
- Send Reset Password Email: ```POST``` http://localhost:3000/passwords/reset ```email``` or ```username```.
