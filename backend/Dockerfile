# Use Node.js official image
FROM node:16

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port for backend API
EXPOSE 5000

# Start the Node server
CMD ["npm", "start"]
