# 美食尋訪
一個查找餐廳的網站，使用者可以一覽餐廳類別與評價分數以找到心儀的餐廳，也可以自由選擇查看餐廳的詳細介紹與聯絡資訊。
![alt text](https://raw.githubusercontent.com/Jennesy/AC-restaurantList/master/public/homepageDEMO.jpg)

## Features/功能
* 使用者可以新增一家餐廳
* 使用者可以瀏覽一家餐廳的詳細資訊
* 使用者可以瀏覽全部所有餐廳
* 使用者可以修改一家餐廳的資訊
* 使用者可以刪除一家餐廳
* 使用者可以註冊帳號，註冊的資料包括：名字、email、密碼、確認密碼。其中 email 與密碼是必填欄位，但名字不是
* 如果使用者已經註冊過、沒填寫必填欄位、或是密碼輸入錯誤，就註冊失敗，並回應給使用者錯誤訊息
* 使用者也可以透過 Facebook Login 直接登入
* 使用者的密碼經過雜湊處理
* 使用者必須登入才能使用餐廳清單，如果沒登入，會被導向登入頁面
* 登入後，使用者可以建立並管理專屬他的一個餐廳清單
* 使用者登出、註冊失敗、或登入失敗時，使用者都會在畫面上看到正確而清楚的系統訊息

## Environment Setup/環境建置
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
* [Nodemon](https://www.npmjs.com/package/nodemon) -for development only

## Installation/專案安裝
### Clone
```
git clone https://github.com/Jennesy/AC-restaurantList
cd AC-restaurantList
npm install
```

### Run/執行專案
```
npm run start
```
若成功開啟伺服器你會看到：
```
Express server is running on http://localhost:3000
```
可以至 http://localhost:3000 查看網站

### Develop mode/專案開發模式
開啟此模式時，當你修改程式並存檔完畢，無須重啟伺服器，可以重新整理 http://localhost:3000 即可查看編輯效果。
```
npm run dev
```
若成功你會看到：
```
Express server is running on http://localhost:3000
```
可以至 http://localhost:3000 查看專案目前功能