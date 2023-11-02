# Use an official Node.js runtime as a parent image
FROM node:18.16.0

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Expose the port that the React app will be running on
EXPOSE 3000

# Set the command to run when the container starts
CMD ["npm", "start"]
