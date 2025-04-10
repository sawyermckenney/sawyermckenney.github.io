import { Client, Account } from "appwrite"; 

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("67f6ef8a002990b5f020"); // Your project ID
const account = new Account(client);

export { client, account };