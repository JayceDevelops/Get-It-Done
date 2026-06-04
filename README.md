# Webkit Setup Steps


## Setting Up Webpack For Javascript
-------------------------------------

#### Step One:
Within your newly made project run the following command
This will create package.json & package-lock.json
```batch
npm init -y --init-type=module
```

---

#### Step Two: 
Create a directory called src and then a file named index.js within the src folder.
The index.js file is the root of all our javascript.
```batch
mkdir src && touch src/index.js
```

---

#### Step Three: 
In the root of the project so outside of src, create a file called webpack.config.js.
This is the config file webpack uses for its configuration.
```batch
touch webpack.config.js
```

---

#### Step Four:
Within the webpack.config.js file copy and paste the following code:
```javascript
import path from "node:path";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
};
```

---

## Setting Up Webpack For HTML
-------------------------------------

#### Step One:
Within your project run the following command to install the HTMLWebpackPlugin
```bash
npm install --save-dev html-webpack-plugin
```

---

#### Step Two:
Create a file called template.html inside of the src folder and fill it with the usual HTML boilerplate
##### You do not need to put a script tag in the file!
```bash
touch src/template.html
```

---

#### Step Three:
Import the HtmlWebpackPlugin & add the plugin into your webpack.config.js
```javascript
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
```

---

#### Step Four: 
Run the following command, which will create a folder called dist. This is your web app packaged and ready for distribution.
```bash
npx webpack
```

---

## Setting Up Webpack For CSS
-------------------------------------

#### Step One
Run the following command in your project
The CSS-loader will read any css files we import into a javascript file and stores the result as a string. Then the Style-loader reads the string and adds the JS code that will apply those styles to the page.
```bash
npm install --save-dev style-loader css-loader
```

---

#### Step Two:
Add the module rules to your webpack.config.js file
```javascript
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

#### Step Three:
Now you can create a css file within your src file and import it into your JS files in the src folder.
```javascript
import "./styles.css";
```

## Setting Up Webpack For Images
-------------------------------------

#### Step One:
Run the following command to install html-loader, which will detect image file paths in our HTML template and load the right image files for us. 
```batch
npm install --save-dev html-loader
```

---

#### Step Two:
Add the html-loader to your module rules
```javascript
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      }
    ],
  },
};
```

---

#### Step Three:
Next we need to add another rule to our modules so javascript knows what to do when we import a image
```javascript
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      }
    ],
  },
};
```

---

#### Step Four:
Now importing a image into your JS and using it is as easy as 
```javascript
import TheImage from "./Image.png";

const image = document.createElement("img");
image.src = TheImage;

document.body.appendChild(image);
```

---

If this wasn't helpful check out https://www.theodinproject.com/lessons/javascript-webpack that is a more in-depth guide.
