This client application is used for viewing knx data. It gets data from knx server that you can download it from <https://github.com/mustafayuce33/knxserver> 

Here is what you will make for usage :

1. `npm install` for installing missing npm packages
2. Run `npm start` to host your web application on locally. It will host your web application on port `3000`. So you can view it by <http://localhost:3000>
3. If you want to take a build for deploying then you have to run `npm run build`. This will create **/build** folder and you can use it for deploying.
4. That's all
 
Application will connect knx server via mqtt and view knx data.
