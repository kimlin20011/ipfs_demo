# IPFS筆記

> https://codertw.com/%E4%BC%BA%E6%9C%8D%E5%99%A8/142959/
> [基于js-ipfs-api实现ipfs的文件上传与下载](https://blog.csdn.net/koastal/article/details/78771932)
> https://github.com/miaoski/ipfs-tutorial
## 安裝
* 到ipfs官網下載安裝檔

## node部署
* 新增資料夾，並執行`npm install`
* cmd 執行 `node index.js`

## 相關指令
* 透過瀏覽器查看 ipfs檔案
    * `http://127.0.0.1:8080/ipfs/<CID>`
* 終端機執行
    * 新增檔案
        * `ipfs add <path>`
    * 查看檔案
        * `ipfs cat /ipfs/<CID>`
    * 開目錄
        * `ipfs files mkdir /SmartCity `  
    * 上傳整個目錄
        * `ipfs add -r <d-name>`
    * 用pin避免被資源回收
        * `ipfs pin add -r /ipfs/<CID>`
    * 執行ipfs背景
        * `ipfs daemon`
    