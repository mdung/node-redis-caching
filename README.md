# Node.js Redis Caching Example

This project demonstrates how to implement Redis caching for database queries in a Node.js application using Express and MongoDB.

## Project Structure

node-redis-caching/
├── node_modules/
├── src/
│ ├── config/
│ │ └── redisConfig.js
│ ├── controllers/
│ │ └── dataController.js
│ ├── models/
│ │ └── dataModel.js
│ ├── routes/
│ │ └── dataRoutes.js
│ ├── services/
│ │ └── cacheService.js
│ ├── app.js
├── .env
├── package.json
├── package-lock.json
└── README.md



## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Redis

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mdung/node-redis-caching.git
   cd node-redis-caching


npm install

PORT=3000
MONGO_URI=your_mongodb_connection_string
REDIS_HOST=127.0.0.1
REDIS_PORT=6379


npm start


API Endpoints
GET /api/data/:id: Fetch data by ID. This endpoint will first check the Redis cache. If the data is not found in the cache, it will query the MongoDB database, cache the result, and then return the data.
Project Details
Express: A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
Redis: An open-source, in-memory key-value data store, used as a database, cache, and message broker.
Code Overview
src/config/redisConfig.js: Configures and connects to the Redis client.
src/controllers/dataController.js: Contains the logic for handling data retrieval and caching.
src/models/dataModel.js: Defines the MongoDB data schema using Mongoose.
src/routes/dataRoutes.js: Defines the API routes.
src/services/cacheService.js: Provides functions for setting and getting cache data.
src/app.js: The main entry point of the application. Sets up Express, connects to MongoDB, and starts the server.