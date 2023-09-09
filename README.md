# Food Vendor Application with Paystack Integration

Welcome to our Food Vendor Application! This web application is built using TypeScript, React, and Tailwind CSS. It allows users to browse food items, add them to the cart, and complete the payment process using Paystack's payment gateway.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/O-BERNARDOFOEGBU/Paystack-checkout-demo.git
   cd Paystack-checkout-demo
   ```

#### Install the project dependencies:

    npm install

#### Running the Application

Start the development server:

    npm start

Open your web browser and navigate to http://localhost:3000 to access the application.

### Features

Browse a selection of food items.
Add food items to the cart.
Adjust the quantity of items in the cart.
Remove items from the cart.
Calculate the total price of items in the cart.
Securely process payments using Paystack's payment gateway.
Receive payment success and failure notifications.

### Usage

Browse the available food items and click on them to add to your cart.
Visit your cart to review your selected items.
Adjust the quantity of items or remove them from the cart.
Click the "Checkout" button to start the payment process.
You will be redirected to Paystack's secure payment gateway.
Complete the payment process.
Receive notifications about the payment status.

### Environment Variables

The following environment variables are required for the application to function properly. Create a .env file in the project root and add your values.

# Paystack Configuration

REACT_APP_PAYSTACK_PUBLIC_KEY=your_paystack_public_key

REACT_APP_EMAIL=your_email@example.com



REACT_APP_PAYSTACK_PUBLIC_KEY: Your Paystack public key for processing payments.

REACT_APP_EMAIL: Your email address for notifications and order confirmation.

### Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

Fork the repository.
Create your feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Create a new pull request.

## License

This project is licensed under the MIT License.
