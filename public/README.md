### folder structure
- public/ = any front-end resources JS, CSS, images, ect
- views/ = contains all the handlebars, individual pages, essentially all the html 
- views/layout = contains the html skeleton that every other handlebar will have adhere to 
- index.js = center point of the application, every folder is connected to the index.js file, communicates with all other files and tells the application what to display

### NPM Setup
- npm init -y = sets up package.json
- npm i path express express-handlebars mongoose body-parser
- you can check what modules have been installed by looking at package.json