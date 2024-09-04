# Ethereum Gas Price Tracker with EIP-1559 Standard

This project demonstrates how to build an Ethereum gas price tracker utilizing the EIP-1559 standard. It features a gas price webhook notification system, allowing users to be alerted when gas prices drop below a specific threshold.

### Prerequisites

* Node.js and npm (or yarn) installed
* An Alchemy account (free tier available)
* Ngrok installed (for testing the webhook)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mishraji874/Ethereum-Gas-Price-Tracker-with-EIP-1559-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Ethereum-Gas-Price-Tracker-with-EIP-1559-App
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Setting Up Alchemy

1. Create a free Alchemy account: [https://docs.alchemy.com/reference/api-overview](https://docs.alchemy.com/reference/api-overview)

2. Create a new Alchemy App and obtain your WebSocket URL from the Alchemy dashboard.

### Project Structure

The project consists of a single JavaScript file (`index.js`) that handles all functionalities.

### Functionality Breakdown

1. **Web3 Client Creation:**
   - Uses the `@alch/alchemy-web3` library to establish a connection to the Ethereum network via Alchemy's WebSocket URL.

2. **Gas Fee History Retrieval:**
   - Leverages the `eth_feeHistory` Alchemy API endpoint to retrieve gas fee data for the most recent 20 blocks on the Ethereum mainnet.
   - This data includes the base fee per gas, gas used ratio, block volume, and reward.

3. **Data Formatting:**
   - The raw data retrieved from Alchemy is processed to convert hexadecimal gas values (in wei) to human-readable decimals (in Gwei). 
   - This formatted data is then stored in an array of objects, with each object representing a specific block.

4. **Gas Price Webhook (Optional):**
    - (**Note:** This section is optional and requires additional configuration)
    - A simple HTTP server is set up to receive webhook notifications from Alchemy.
    - Users can configure Alchemy to send notifications when the gas price falls below a certain threshold.
    - Ngrok is used to create a temporary tunnel for testing purposes.

### Setting Up Ngrok

1. Create a free Ngrok account: [https://ngrok.com/](https://ngrok.com/)

2. Download and install the Ngrok CLI for your operating system.

3. Authenticate with your Ngrok account:

   ```bash
   ngrok authtoken <your_ngrok_auth_token>
   ```

### Running the Application

1. Start the HTTP server:

   ```bash
   node index.js
   ```

2. Create an Ngrok tunnel:

   ```bash
   ngrok http 80
   ```

   This will provide you with a public URL that you can use to configure your webhook on the Alchemy dashboard.

### Configuring Alchemy Webhook

1. Log in to your Alchemy dashboard and go to the "Notify" tab.
2. Create a new webhook and set the desired gas price threshold.
3. Use the public URL provided by Ngrok as the webhook endpoint.

   This will start the application and retrieve the gas fee history. The formatted data will be displayed in the terminal.

### Conclusion

This project offers a basic implementation of an Ethereum gas price tracker with EIP-1559 support. By incorporating the optional webhook functionality, users can be alerted to optimal gas price conditions for their transactions.

### Additional Resources

* [Alchemy Docs](https://docs.alchemy.com/reference/api-overview)
* [Alchemy Web3 Library](https://www.alchemy.com/)
* [Ngrok](https://ngrok.com/)

**Note:** The provided code snippet in the original context might need slight adjustments based on the latest library versions. 