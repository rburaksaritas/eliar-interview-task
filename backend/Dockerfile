# Use the official Node.js 16 image as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install any dependencies
RUN npm install

# production
# RUN npm ci --only=production

# Copy the rest app code
COPY . .

# Map the port the server runs on
EXPOSE 8000

# Define the command to run your app using CMD which defines your runtime
CMD [ "node", "server.js" ]
