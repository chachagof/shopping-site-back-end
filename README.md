# 購物網站(shopping-site-back-end)

# 大綱
- [網站簡介](#網站簡介)
- [安裝](#安裝)
- [啟動專案](#啟動專案)
- [使用者](#使用者)
- [API](#API)
- [開發工具](#開發工具)
- [相關問題](#相關問題)

# 網站簡介

使用Node.js + MysSQL縮開發的購物網站後端API，請詳看以下內容作使用說明

# 安裝

1.基本條件
```
已於本地安裝 node 和 npm
```

2.Clone 專案
```
git clone https://github.com/chachagof/shopping-site-back-end.git
```

3.進入專案資料夾
```
cd shopping-site-back-end
```

4.安裝相關套件
```
npm install
```

5.請參考.env.example檔來設置.env

6.新增 database 及種子資料
```
create database shopping_site
npx sequelize db:migrate
npx sequelize db:seed:all

```

# 啟動專案

1.啟動專案
```
npm run dev
```

2.停止專案
```
若想停止專案僅需輸入
Ctrl + c
```

# 使用者

| 使用者 | 帳號 |密碼 |
|  :---: | :---:  |  :---:  |
| 買家   | buyer001   | titaner    |
| 賣家   | seller001  | titaner    |

# API

## 會員相關

| 功能       | 路由                         | HTTP 方法 |
|------------|-----------------------------|-----------|
| 買家登入   | /api/buyer/login             | POST      |
| 賣家登入   | /api/seller/login            | POST      |
| 買家註冊   | /api/buyer/signup            | POST      |
| 賣家註冊   | /api/seller/signup           | POST      |

## 商品相關

| 功能             | 路由                          | HTTP 方法 |
|------------------|-------------------------------|-----------|
| 所有商品         | /api/commodities              | GET       |
| 所有商品種類     | /api/categories               | GET       |
| 商品種類         | /api/commodities?category=*   | GET       |
| 商品名稱搜尋     | /api/commodities?name=*       | GET       |
| 商家搜尋         | /api/commodities?seller=*     | GET       |
| 價格搜尋         | /api/commodities?price[]=*    | GET       |
| 詳細商品資訊     | /api/commodities/:commodityId | GET       |

## 購物車相關

| 功能                 | 路由                          | HTTP 方法 |
|----------------------|-------------------------------|-----------|
| 買家加入購物車       | /api/cart/:commodityId        | POST      |
| 買家購物車商品       | /api/cart                     | GET       |
| 買家結帳購物車商品   | /api/cart                     | PUT       |
| 買家修改購物車商品   | /api/cart/:commodityId        | PUT       |
| 買家刪除購物車商品   | /api/cart/:commodityId        | DELETE    |

## 商店相關

| 功能        | 路由                          | HTTP 方法 |
|-------------|-------------------------------|-----------|
| 賣家商店    | /api/seller/:sellerId         | GET       |
| 新增商品    | /api/commodity/:sellerId      | POST      |
| 修改商品    | /api/commodity/:commodityId   | PUT       |
| 刪除商品    | /api/commodity/:commodityId   | DELETE    |

# 開發工具

- @faker-js/faker: ^8.0.2
- bcryptjs: ^2.4.3
- cors: ^2.8.5
- dotenv: ^16.3.1
- express: ^4.18.2
- jsonwebtoken: ^9.0.1
- method-override: ^3.0.0
- mysql2: ^3.5.1
- passport: ^0.6.0
- passport-jwt: ^4.0.1
- sequelize: ^6.32.1
- sequelize-cli: ^6.6.1

# 相關問題

若在此後端專案下有任何問題都歡迎提交 Issue 或者 Pull Request來意見交流一下
