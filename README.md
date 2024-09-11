# Webpack Javascrip Bundling
This will demostrate a quick NodeJS Webpack Javacript Bundler, which will bundle JavaScript modules into one file. 
# Initialization
Run the following command in your Terminal to begin setup<br>
<b>npm init -y</b>

# Install React
Run the following command in your Terminal to install React<br>
<b>npm i react-dom</b>

# Install Additional Dependencies
Install Babel, File Loaders, CSS Loaders, Webpack, Webpack Dev Servers etc.<br> All required dependenices for your particular project. 

# Create webpack.config.js file 
Use the configuration provided above to setup the initial entry points, output settings, development server settings, and module settings. 

# Create a .babelrc file
Copy and paste settings using the project setup above. 

# Create a SRC Folder
Use the file structure above to setup the initial required files. 

# Update Webpack Server
Open the package.json file and update the initial "scripts" settings.<br>
  "scripts": {<br>
    "serve": "webpack serve --mode development",<br>
    "build": "webpack --mode production"<br>
  },<br>
<br>

# Run the build 
<b>Development</b><br>
To run your project locally, run the following command "npm run serve" <br><br>
<b>Production:</b> This mode will generate the required bundle files<br>
To run your project in production, run the following command "npm run build"<br><br>
Once the build is initiated, following the webpack.config.js bundle files will output under <b>"/dist"</b>


