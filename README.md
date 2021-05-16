# 美食尋訪
一個查找餐廳的網站，使用者可以一覽餐廳類別與評價分數以找到心儀的餐廳，也可以自由選擇查看餐廳的詳細介紹與聯絡資訊。
![alt text](https://raw.githubusercontent.com/Jennesy/a3_restaurant_list/master/public/a8_restaurant_list_demo.jpg)

## Features/功能
* 使用者可以總覽網站收錄的所有餐廳（照片、名稱、類別以及評分）
* 使用者可以輸入關鍵字找到所有符合名稱或類別的餐廳
* 使用者可以設定餐廳總覽的排序
* 使用者可以任選餐廳查看詳細資訊（照片、名稱、類別、地址、電話及簡介）
* 使用者可以新增餐廳資料
* 使用者可以刪除任意餐廳資料
* 使用者可以編輯任意餐廳資料

## Environment Setup/環境建置
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
* [Nodemon](https://www.npmjs.com/package/nodemon) -for development only

## Installation/專案安裝
### Clone
```
git clone https://github.com/Jennesy/a3_restaurant_list
cd a3_restaurant_list
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