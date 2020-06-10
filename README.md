# animal-crossing

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 摸摸Project
### **簡介**
動森換物交流平台
相關套件：
後端使用nodejs Express + MongoDB，兩者之間用mongoose套件串接
前端用vue
## 相關文件
[Wireframe link](https://xd.adobe.com/view/6349e510-4820-4312-7fe4-938f49f32697-1578/)

[Database UML link](https://drive.google.com/file/d/1zIW9DYvkz8uDd2JPMtm6aGNgBhxevPR3/view?usp=sharing)

[Postman link](https://www.getpostman.com/collections/8bfbd469fd0c47d8d2e3)

[JSON](https://drive.google.com/open?id=10tZosoTpOHqQJRJWtbvlj8aTaE_2ouaE)

[Github link](https://github.com/marabuda/animal-crossing-social-plateform)
[Github link2](https://github.com/marabuda/animal-crossing-social-plateform02.git)
專案安裝方法：
1. 安裝nodejs, git
2. clone下來後執行 `npm i`
3. 接著執行 `npm start` 就可以把專案跑起來
4. 到網頁上輸入127.0.0.1:3000/homePage，就可以看到簡單的首頁
5. 網址輸入127.0.0.1:3000/api/login/你的名子，就可以看到簡單的login畫面

vscode套件：
ESLint
TabNine
EditorConfig

**待討論**
- [x] github用誰的來建立專案
- [x] 資料應該要一個區塊一個區塊更新比較好
- [ ] 需要哪些API、這些API要回傳什麼資料格式
ex. [provide json](https://drive.google.com/file/d/1OYkm7C4yPVLJSBgzfN3kcSMyIpjcD6vB/view?usp=sharing)

## 開會紀錄

**2020.05.10**
* git相關:
-commit 規則 (momo)
-git flow (KW)
-github conflict(KW momo)
* 後端相關:
-建立http server以及需要用到的資料夾(KW)
* ui相關:
-guest如何加入別人的提供或徵求列表?(momo)
-host如何看到誰加入了提供與徵求列表(momo)
-改ui 島主名稱、島嶼名稱、大頭貼、水果、自述改為整塊編輯(momo)
* 2020.05.11 or 2020.05.12 下次討論
---
**2020.05.11**
* git相關
-git flow
分成三種分支:
feature: 單一功能先在feature上開發，開發完成後再merge到develop。
ex. feature/add-api
develop: 測試用
master: 正式版本

* 前端
-安裝core ui
-安裝webpack
-安裝sass
參考資料：
[nodejs串靜態檔案](https://ithelp.ithome.com.tw/articles/10186000)

* MongoDB相關
-建立mondoDB
-連結nodejs和DB，並產生資料表(schema)
-試著建立第一筆資料
參考資料：
[Nodejs + mongo + Vuejs實踐](https://segmentfault.com/a/1190000006939687)
[nodejs串接ＭongoDB](https://ithelp.ithome.com.tw/articles/10186483)
---
**2020.05.XX**
還沒決定

## 教學

**git教學**
* push:
`git status`
`git add .`
`git commit -m "你想說ㄉ話"`
`git push`
參考資料： [git教學](https://blog.techbridge.cc/2018/01/17/learning-programming-and-coding-with-python-git-and-github-tutorial/)
* branch:
`git branch feature/add-api` (新增分支)
`git checkout feature/add-api` (切換分支)
`git push --set-upstream origin feature/add-api` (將分支推上github)

---

**MongoDB教學**

參考資料：[ＭongoDB安裝設定](https://ithelp.ithome.com.tw/articles/10186324)
1. 請先在專案底下執行`npm i`
2. 接著執行`mkdir mongoDB`
3. 到[ＭongoDB官網](https://www.mongodb.com/download-center/enterprise?tck=docs_server)下載windows版並安裝，如果安裝過程有疑慮，可以點擊上方的參考資料連結，裡面有詳解。
4. 接著cd到Ｃ槽你安裝MongoDB的資料夾（後方路徑可能會有些微不同
`cd C:\Program Files\MongoDB\Server\4.2\bin`
5. 進到資料夾後執行`mongod --dbpath d:\animal-crossing-social-plateform\mongoDB`
這行指令會啟動ＤＢ，這視窗就放著讓他跑
6. 開一個新的cmd視窗執行`npm start`把專案跑起來，並確認log有沒有顯示mongodb connected
7. 如果正常連接的話，打開瀏覽器輸入`127.0.0.1:3000/api/signUp/你的名字`，如果接下來網頁有印出你的名字，代表成功註冊。
8. 最後請下載一個方便的工具（[下載連結](https://robomongo.org/download)）這工具是專門用來操作mongodb的。
9. 安裝完後打開，create一個新的connection，url就按照預設的就行了。接著按下connect
10. 成功的話右方會出現你的ＤＢ，此時一層一層打開，找看看有沒有你剛剛網址上輸入的資料


## Api列表
Log in(userAccount)
Sign up(user、userAccount)

Friends info list(user、provider、seek)
Friends list(user)
update friend(user)
notify(notify)

user info(user、provider、seek)

update user(user)
update provider list(provider)
update seek list(seek)

Add provider list(provider)
Add seek list(seek)


