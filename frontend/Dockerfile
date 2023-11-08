# Use the official Node.js 16 image as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the project files into the docker image
COPY . .

# Expose port 3000 to the outside once the container has launched
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "serve"]
