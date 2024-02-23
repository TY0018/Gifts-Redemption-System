# Gift_redemption System
#### A system to track teams' redemption status for gifts

### Introduction

The project uses node.js, typescript and PostgreSQL as its database.

### Getting Started

    npm i
    npm start


### Prerequisites

Ensure you have the following installed:
- Node.js
- npm
- PostgreSQL

### Database setup

1. Create your database in PostgreSQL
        CREATE DATABASE gift_redemption
2. Create two tables in your database: staff_mapping and redemption_data
    - Follow the sql queries in database/create_tables.sql
3. Edit the following in src/config/databaseConfig.ts
    - user: change to your own username for PostgreSQL
    - password: change to your own password for PostgreSQL

and you are done! 

### Testing

To run unit test:

    npm test


