# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Lottery Ticket Generator

This project is a simple lottery ticket generator built using React.js. The application generates random 3-digit tickets and compares them against a predefined lottery number or sum to determine if the user is a winner.

## Features

- Generates random 3-digit lottery tickets.
- Compares generated tickets with a predefined winning condition:
  - Matches the exact lottery number.
  - Matches the sum of digits of the lottery number.
- Displays the generated ticket and the result (Winner or Not a Winner).

## Technologies Used

- **React.js**: For creating reusable components and managing the UI.
- **JavaScript**: For implementing the lottery logic.
- **CSS**: For basic styling.

## How It Works

1. The user clicks the "Generate Ticket" button to generate a random 3-digit number.
2. The application compares the generated number with the following winning conditions:
   - If the generated number matches the predefined lottery number exactly.
   - If the sum of digits of the generated number matches the sum of digits of the predefined lottery number.
3. If either condition is met, the user is declared a **Winner**. Otherwise, they are **Not a Winner**.
4. The result is displayed on the screen.

## Project Setup

Follow these steps to set up and run the project locally:

 **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/lottery-ticket-generator.git
   cd lottery-ticket-generator

   npm install
   npm start
   ```

   
