# Grill Master 🔥

A responsive restaurant website built with HTML, CSS, and JavaScript.

Grill Master is a front-end restaurant website that allows users to browse the menu, check restaurant branches, learn more about the restaurant, and place an order through WhatsApp.

## Live Demo

The live demo will be added after deploying the project.

## Features

* Responsive restaurant website
* Home page with restaurant information
* Organized food menu
* Grilled beef, chicken, seafood, and side dishes
* Interactive order form
* Order validation using JavaScript
* Order summary before confirmation
* Orders can be sent directly to WhatsApp
* Restaurant branches with Google Maps
* About and Contact page
* Responsive layout for different screen sizes
* Local images and assets

## Pages

### Home

Introduces Grill Master and gives an overview of the restaurant.

### Menu

Displays the available meals and organizes them into different categories:

* Grilled Beef
* Grilled Chicken
* Grilled Seafood
* Grilled Sides

### Order

Allows customers to:

* Enter their name
* Enter their phone number
* Add their delivery address
* Select meals
* Choose the quantity
* Review the order before confirmation
* Send the order through WhatsApp

### Branches

Shows the restaurant branches, contact information, and locations using Google Maps.

### About / Contact

Contains information about the restaurant and a contact form for customers.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Bootstrap
* Font Awesome
* Google Maps
* WhatsApp Click-to-Chat

## Project Structure

```text
grill-master/
│
├── index.html
├── favicon.ico
├── README.md
├── .gitignore
│
├── assets/
│   ├── css/
│   │   └── responsive.css
│   │
│   └── img/
│       ├── logo.png
│       ├── bg-main.jpg
│       ├── bg-about.jpg
│       ├── bg-order.jpg
│       ├── carousel-1.jpg
│       ├── carousel-2.jpg
│       ├── carousel-3.jpg
│       └── ...
│
├── menu/
│   └── index.html
│
├── order/
│   ├── index.html
│   └── script.js
│
├── branches/
│   └── index.html
│
└── about/
    └── index.html
```

## How the Ordering Works

The project is a static website, so there is no backend server or database.

When a customer submits an order, JavaScript validates the entered information and creates an order summary.

After confirmation, the order is prepared as a WhatsApp message and the customer is redirected to WhatsApp using the restaurant's configured WhatsApp number.


## Running the Project Locally

No installation or package manager is required.

Simply clone the repository:

```bash
git clone https://github.com/USERNAME/REPOSITORY-NAME.git
```

Then open:

```text
index.html
```

in your browser.


## Notes

This is a Front-end project only

The contact form and order system currently work on the client side.

There is no database or backend for storing orders. Orders are sent directly to WhatsApp after confirmation.

Some contact information, branch details, and social media links are placeholder/demo data and should be replaced with the restaurant's real information before production use.

## Future Improvements

Some possible improvements for a future version:

* Add a backend for storing orders
* Add a database for menu items and customer orders
* Add an admin dashboard
* Add online payment
* Add order status tracking
* Add authentication for restaurant staff
* Add a real CMS for managing menu items
* Add customer order history

I will implement all of this when I want to make it a complete system

## Author

**Kareem Mohamed**

Machine Learning & Data Analysis | Web Development
