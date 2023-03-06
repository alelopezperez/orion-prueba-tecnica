# stage1 as builder
FROM node:18.14.2 as builder

# copy the package.json to install dependencies

# Install the dependencies and make the folder
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
RUN mkdir /react-ui && mv ./node_modules ./react-ui 
RUN mv ./dist /react-ui



WORKDIR /react-ui


# Build the project and copy the files


FROM nginx:alpine as serve

# Copy from the stahg 1
COPY --from=builder /react-ui/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

