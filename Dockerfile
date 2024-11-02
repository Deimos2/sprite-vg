# Dockerfile

# Use Node.js base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the application source code
COPY . .

# Build the TypeScript code
#RUN yarn run tsc

# Expose port
EXPOSE 3000

# Run the application
CMD ["node", "dist/index.js"]