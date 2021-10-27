# MERN GIF-MEME

A webpage for Memes and GIFs in which users can upload their files or urls and share it with anyone. 

## What users can see


- Home
  - The first page users see is Home page.
- App Header 
  - Trending, Reactions, Meme Images, Emojis and Stickers    
- Search Bar
  - Users can search anything.
  - Select one category and search in the category is possible.
- Upload 
  - If users want to upload their file or url, they need to register or login.
  - Users can upload file from their pc or external url.
  - Title and Category required.
- Login 
  - Users can login with email and password
  - Login with google account is possible.
- Register
  - If users want to use email and password when logging in, completing register form is necessary. 
- User page 
  - If a user is logged in and want to check the user's own uploaded files, clicking the user's name on App Header will redirect the user to user page with the files. 

## What we can see

- Home

  - Display random data from tenor API 

- App Header 

  - hoc - included to withLayout 
  - Redux - check if user is logged in or not, shows name of the user and upload button

- Search Bar

  - API search and Javascript filter, includes methods to get results.

- Upload 

  - Formik controls form and Yup validates inputs.
  - User's file from pc is transformmated into url via Cloudinary.
  - Title, Category, url of file and owner firebase id are sent to mongoDB.
  - Redux state show what is just uploaded and if it was successful.

- Login 

  - Firebase handles email/password login and google account login. 
  - Redux state shows if login is successful or not

- Register

  - Firebase handles register 
  - When register is successfully done, user information is sent to mongoDB. 
  - Redux state shows if it is successful or not. 

- User page 

  - Get file database from server and display data if owner of the data matches with the logged in user.

    

## API


tenor api  https://tenor.com/gifapi



## Getting Started


1. Clone the repository
```
$ git clone https://github.com/solaz0824/GIF-Meme-MERN.git 
```

2. Installing
```
$ yarn install
```
3. Start
- Open terminals for client
```
$ yarn client  
``` 
- Open terminal for NodeJs server (don't forget to initialise MongoDB) 
```
$yarn server
```
## Dependencies
- [React](https://reactjs.org/)
- [React-Dom](https://reactjs.org/docs/react-dom.html)
- [React-Redux](https://react-redux.js.org/)
- [React-Router-DOM](https://reactrouter.com/web/guides/quick-start)
- [React-Spinners](https://github.com/davidhu2000/react-spinners)
- [React-Toastify](https://github.com/fkhadra/react-toastify)
- [Redux](https://redux.js.org/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [Express](https://expressjs.com/)
- [Axios](https://github.com/axios/axios)
- [Firebase](https://firebase.google.com/)
- [Cross-env](https://github.com/kentcdodds/cross-env)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [Body-parser](https://github.com/expressjs/body-parser)
- [Helmet](https://github.com/helmetjs/helmet)
- [CORS](https://github.com/expressjs/cors)
- [Sass](https://sass-lang.com/)




## Configuration
  
client

create **.env** file 
```
REACT_APP_FIREBASE_KEY=
REACT_APP_FIREBASE_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE__STORAGE_BUCKET=
REACT_APP_FIREBASE_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_API_BASE_URL=http://localhost:4000
REACT_APP_CLOUDINARY_CLOUD_NAME=
REACT_APP_CLOUDINARY_IMAGES_PRESET=
REACT_APP_CLOUDINARY_IMAGES_API=
```

server 

```
MONGO_DB_URL_TEST=mongodb://localhost/nameofyourdb
MONGO_DB_URL_DEVELOPMENT=mongodb://localhost/nameofyourdb
MONGO_DB_URL_PRODUCTION=mongodb://localhost/nameofyourdb
PORT=4000
CLIENT_URL=http://localhost:3000
FB_CERT_TYPE=service_account
FB_CERT_PROJECT_ID=
FB_CERT_PRIVATE_KEY_ID=
FB_CERT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\\n-----END PRIVATE KEY-----\n"
FB_CERT_CLIENT_EMAIL=
FB_CERT_CLIENT_ID=
FB_CERT_AUTH_URI=
FB_CERT_TOKEN_URI=
FB_CERT_AUTH_PROVIDER_X509_CERT_URL=
FB_CERT_CLIENT_X509_CERT_URL=
```
## File Structure


```
📦src
 ┣ 📂api
 ┣ 📂assets
 ┃ ┗ 📂icons
 ┣ 📂components
 ┃ ┣ 📂AppHeader
 ┃ ┣ 📂CardList
 ┃ ┣ 📂Input
 ┃ ┣ 📂ItemCard
 ┃ ┣ 📂LoginForm
 ┃ ┣ 📂Main
 ┃ ┣ 📂RegisterForm
 ┃ ┣ 📂SearchBar
 ┃ ┣ 📂Spinner
 ┃ ┗ 📂UploadForm
 ┣ 📂hoc
 ┃ ┗ 📜withLayout.js
 ┣ 📂pages
 ┃ ┣ 📂Emojis
 ┃ ┣ 📂Home
 ┃ ┣ 📂Images
 ┃ ┣ 📂Login
 ┃ ┣ 📂Reactions
 ┃ ┣ 📂Register
 ┃ ┣ 📂Results
 ┃ ┣ 📂Stickers
 ┃ ┣ 📂Trending
 ┃ ┣ 📂Upload
 ┃ ┗ 📂User
 ┣ 📂redux
 ┃ ┣ 📂auth
 ┃ ┣ 📂item
 ┃ ┣ 📜reducers.js
 ┃ ┗ 📜store.js
 ┣ 📂services
 ┃ ┣ 📂auth
 ┃ ┗ 📂cloudinary
 ┣ 📜App.js
 ┗ 📜index.js
```

Server 

```
📦src
 ┣ 📂config
 ┃ ┣ 📜config.js
 ┃ ┗ 📜index.js
 ┣ 📂controllers
 ┃ ┣ 📜index.js
 ┃ ┣ 📜itemController.js
 ┃ ┗ 📜userController.js
 ┣ 📂db
 ┃ ┗ 📜connect.js
 ┣ 📂middleware
 ┃ ┣ 📜authMiddleware.js
 ┃ ┗ 📜index.js
 ┣ 📂models
 ┃ ┣ 📜index.js
 ┃ ┣ 📜itemModel.js
 ┃ ┗ 📜userModel.js
 ┣ 📂routes
 ┃ ┣ 📜index.js
 ┃ ┣ 📜itemRoutes.js
 ┃ ┗ 📜userRoutes.js
 ┣ 📂utils
 ┃ ┗ 📂auth
 ┃ ┃ ┣ 📜firebase.js
 ┃ ┃ ┗ 📜verifyIdToken.js
 ┣ 📜index.js
 ┗ 📜server.js
```

## Technology used
<details>
<summary>Front-end</summary>

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=Jest&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white)
</details>
<details>
<summary>Back-end</summary>

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=Nodemon&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongDB-47A248?style=flat-square&logo=MongoDB&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=Jest&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=PHP&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white)
</details>
