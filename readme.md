# Product Display Website

This project is a dynamic web application that fetches data from an external API to display products across different categories. It allows users to browse through categories and view product details in an interactive interface.

## Project Overview

The core functionalities of the project include:

# Fetching Data: The application asynchronously fetches product data from an API using JavaScript's Fetch API.

# Product Display: Dynamically generates product cards based on the fetched data, presenting product information such as title, vendor, price, compare at price, and discount percentage.

Tab Switching: Users can switch between categories ('Men', 'Women', 'Kids') using tab buttons, triggering the display of relevant products.

## Code Structure


fetchData: A function that retrieves product data from the specified API endpoint.
createProductCards: Generates product cards based on the fetched data for the selected category.
handleTabClick: Manages tab switching functionality and updates the displayed products accordingly.


# Deployment

The project has been deployed using Vercel and is accessible at  Deployed URL.
 URL : ```https://filtereable-card-using-fetch.vercel.app/```

## How to Use

Access the deployed project via the provided URL.
Upon loading, products from the 'Men' category are displayed by default.
Click on the category tabs ('Men', 'Women', 'Kids') to view products from different categories.
Each product card showcases product details and includes an "Add to Cart" button (for visual representation, not functional in this version).