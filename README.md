# Aunt Bottie

Aunt Bottie is an AI powered web app allowing a customer to buy a plant as a gift and getting a personal card to accompany the delivery.


## User Requirements

* A user can login into the app and browse through a currated selection of plants
* A user can access it's account and cart information from the header
* A user configure it's gift by completing those steps:
  * Choosing a plant 
  * Fill the recipient info
  * Select the prompts to get an AI generated card
  * Validate information then add the item to the cart
* The user can add multiple gift to it's cart then proceed to checkout


## Project Stack

**Front-End**: React, Axios, Typescript, SASS, JavaScript

**Back-End**: Express, Node.js, PostgreSQL


## Screenshots

**Home**

!["Screenshot of the home"](https://github.com/amchampoux/bottie/blob/main/docs/home.png)

**Login, account and mini-cart**

!["Screenshot of the login, account and mini-cart"](https://github.com/amchampoux/bottie/blob/main/docs/account2.gif)

**Plant page**

!["Screenshot of the plant page"](https://github.com/amchampoux/bottie/blob/main/docs/plant.png)

**Card AI congiguration**

!["Screenshot of card config flow"](https://github.com/amchampoux/bottie/blob/main/docs/flow2.gif)

**Cart**

!["Screenshot of the purchase flow"](https://github.com/amchampoux/bottie/blob/main/docs/cart.png)


## Setup

For full functionality, the client and the API server applications must run concurrently: 

* Navigate to the root directory and install dependencies with `npm install`.
* Run the following command from the server directory to run the server `npm run dev`.
* Run the following command from the root directory of the project `npm start`.


## Dependencies

* Axios
* Classnames
* Normalize.css
* React
* React-dom
* React-router-dom
* Coreui/react
* React testing-library
* React-bootstrap
* React-scripts
* typescript
* Bootstrap
* Chalk
* Dotenv
* Pg