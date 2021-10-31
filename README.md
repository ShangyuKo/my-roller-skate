# my-roller-skate

CSE 5234 Distributed Enterprise Computing project

## Authors

| Name         | Github                                                       | name.#   |
| ------------ | ------------------------------------------------------------ | -------- |
| Shang Yu Ko  | [ShangyuKo](https://github.com/ShangyuKo)                    | ko.384   |
| Chang Yu Tai | [johnnyjana730](https://github.com/johnnyjana730) | tai.97   |
| Xiaoyi Qian  | [XiaoyiQian](https://github.com/XiaoyiQian) | qian.529 |

## Environment

- [tutorial for react-express-mysql (Mandarin)](https://www.namepluto.com/react-express-mysql-%E5%AF%A6%E4%BD%9C%E7%B0%A1%E6%98%93%E7%99%BB%E5%85%A5%E5%8F%8A%E8%A8%BB%E5%86%8A%E7%B3%BB%E7%B5%B1/)
- Install **node.js** and **react**
- Install [**XAMPP**](https://www.apachefriends.org/index.html)

```bash
npm install

# no need to do belows
npm install mysql --save
npm install express --save
npm install axios
npm install cors
npm install typescript
npm install styled-components --save
npm i i18next
npm install react-i18next
npm install react-i18next --save
npm install antd
npm install react-awesome-reveal --save
npm i --save-dev @types/react
npm i --save-dev @types/styled-components
npm i --save-dev @types/react-router-dom
npm install @mui/material
npm install @emotion/styled
```

## Run

### Step 1. Execute XAMPP and Start the Apache and MySQL Server 

- Execute the application, and click the Apache-start and MySQL-start
  - If an error happened and MySQL is down, use Task Manager to shutdown the running mysql.exe and run again.
- Paste the link http://localhost/phpmyadmin in the browser and click bottom **new** a new database *demo*.

### Step 2. Open the 1st CMD to Run Express APIs

```bash
cd server
node app.js
```

### Step 3. Open the 2nd and 3rd CMD to Run async Shipping APIs

```bash
cd server_ship
node app_order.js
```

```bash
cd server_ship
node app_processing.js
```

### Step 4. Open the 4th CMD to Run React Application

```bash
npm start
```
