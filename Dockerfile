# Use an official Node.js image as the base image
FROM node:22.15-bullseye

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Install Expo CLI globally (if you're using Expo)
RUN npm install -g expo-cli --legacy-peer-deps

# Pre-install @expo/ngrok globally to avoid interactive prompts
RUN npm install -g @expo/ngrok --legacy-peer-deps

# Install Babel runtime
RUN npm install @babel/runtime@^7.25.0 --legacy-peer-deps

# Install expo-router
RUN npm install expo-router@~4.0.21 --legacy-peer-deps

# Copy the rest of the application code to the working directory
COPY . .

# Expose the ports used by Expo
EXPOSE 19000 19001 19002 8080 8081

# Start the Expo development server
CMD ["npx", "expo", "start"]