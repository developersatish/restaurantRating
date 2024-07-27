# Restaurant Rating App

Restaurant Rating App with features to create, edit, delete, and rate restaurants.

## Clone Source Code

```sh
git clone https://github.com/developersatish/restaurantRating.git
```

## Backend

1. Move to backend/BackendServices
   ```sh
   cd backend/BackendServices
   ```

2. Web API on .NET 8.0

3. Configure AWS IAM with DynamoDB Access

   Ensure you have the necessary AWS IAM credentials configured for access to DynamoDB. You can set up your credentials using the AWS CLI or by configuring environment variables.

4. Compile and Run

   ```sh
   dotnet build
   dotnet run
   ```

## Frontend

1. Move to frontend
   ```sh
   cd frontend
   ```

2. Angular 7

   Ensure you have Angular CLI installed for version 7. If not, install it using:

   ```sh
   npm install -g @angular/cli@7
   ```

3. Twitter's Bootstrap

   Twitter's Bootstrap is already configured in the project. If you need to re-install or update it, run:

   ```sh
   npm install bootstrap@4
   ```

4. Node.js 8.x or 10.x

   Ensure you have Node.js version 8.x or 10.x installed. You can check your Node.js version with:

   ```sh
   node -v
   ```

5. Install Dependencies

   ```sh
   npm install
   ```

6. Run the Application

   ```sh
   npm start
   ```

   The application will be available at `http://localhost:45763`.

7. Run Tests

   ```sh
   npm run test
   ```

   This will execute the unit tests for the project.

## Project Structure

The project is divided into backend and frontend directories:

- `backend/BackendServices`: Contains the .NET 8.0 Web API project.
- `frontend`: Contains the Angular 7 project with Bootstrap styling.

## Features

- **Create Restaurant**: Add new restaurants to the list.
- **Edit Restaurant**: Update restaurant details.
- **Delete Restaurant**: Remove a restaurant from the list.
- **Rate Restaurant**: Add ratings and comments to restaurants.

## Configuration

Ensure you have the necessary configurations for both the backend and frontend parts of the application. Backend requires AWS IAM credentials with DynamoDB access. Frontend requires Node.js and Angular CLI.
