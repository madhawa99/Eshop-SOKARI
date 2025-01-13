# Eshop-SOKARI

# Local Artisan Marketplace

Welcome to the Local Artisan Marketplace project! This platform is designed to support local artisans by providing them with a digital space to showcase and sell their handcrafted products. Users can discover, shop, and connect with artisans, fostering a sense of community and appreciation for local talent.

## Features

### Shopping Cart & Checkout
- Seamless shopping experience for customers.
- Add products to the cart and proceed to checkout.

### Admin Dashboard
- Centralized panel for managing users, products, orders, and disputes.

### Seller Dashboard
- Enables artisans or sellers to upload products and manage listings.

### Discounts & Coupons
- Allows artisans to create and offer discounts or coupons to encourage repeat business.

### Events & Workshops Calendar
- Calendar for local artisan events, workshops, and markets.
- Encourages community participation in local activities.

### Search & Filters
- Advanced search functionality with filters such as category, price range, location, and artisan ratings.

### Order Management
- Customers can track order history and status.
- Suppliers can manage orders, update statuses, and generate invoices.

### Customer Support
- Robust support system including FAQ and contact form.

## Technologies Used

- **Node.js**: Backend runtime.
- **Express.js**: Server-side framework.
- **MongoDB**: Database for storing data.
- **React**: Frontend library for building user interfaces.
- **Cloudinary**: Image hosting and management.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) instance or Atlas account.
- [Cloudinary](https://cloudinary.com/) account for image management.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/local-artisan-marketplace.git
   cd local-artisan-marketplace
   ```

2. Install dependencies:
   ```bash
   npm install
   cd client
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     CLOUDINARY_NAME=your_cloudinary_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```

4. Start the development server:
   - Backend:
     ```bash
     npm start
     ```
   - Frontend:
     ```bash
     cd client
     npm start
     ```

5. Access the application at [http://localhost:3000](http://localhost:3000).

## Contribution Guidelines

We welcome contributions to improve this project. To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, feel free to contact us at support@artisanmarketplace.lk.
