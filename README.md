# Aucti
-Your Auction Partner

Aucti is an auction platform which provides an ecosystem that generates maximum revenue for the sellers at the same time providing the buyers with a seamless experience of shopping through auctions.

Auctions increase the price of a product for the seller and can get a threshold price or maximum price as competitive bidding among peers causes rise in the bidding price, compared to other e-commerce business models.

Aucti pays more forcus on  products that are not mainstream and are high in public demand, for these kind of products an auction might be the best mechanism to extract the maximum value.

This repository contains backend functions which connects with Firebase Firestore Database.


## Prerequisites

- [NodeJS](https://nodejs.org) from 10 to 14.17.6

## Set up and run locally

1. Clone the repo
   ```sh
   git clone https://github.com/pesto-students/n6-aucti-be-epsilon-6
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Copy your Firebase service account details in `serviceAccountKey.json`
  
4. Enter your environmental variables in `.env` file
   ```sh
    ALLOWED_ORIGIN_URL= Your client application URL
    GCLOUD_PROJECT_ID= Firebase project ID
    APLLICATION_ID= Algolia Application ID
    ADMIN_API_KEY= Algolia API Key
    ALGOLIA_INDEX_NAME= Algolia index name
   ```
5. Run the project
   ```sh
   npm start
   ```
   
 ## Contribution

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
  
 ## Authors
 Kirushan Balakrishnan & Anurag Kumar
   
