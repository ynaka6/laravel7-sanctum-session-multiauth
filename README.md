<p align="center"><img src="https://camo.githubusercontent.com/4fdba9cc966adba5b42efa89a471464066f9b184/68747470733a2f2f6c61726176656c2e636f6d2f6173736574732f696d672f636f6d706f6e656e74732f6c6f676f2d73616e6374756d2e737667" width="400"></p>

## 📝 About

本リポジトリは、[Laravel Sanctum](https://laravel.com/docs/7.x/sanctum)のサンプル実装です。
SanctumのSession認証を利用して、Multi Authを実装しています。

[Token認証によるMulti Authはこちら](https://github.com/ynaka6/laravel7-sanctum-token-multiauth)

## 📝 認証について

`App/User`、`App/Admin`の複数Modelで、Sanctumを利用し認証します。  
データについては事前にFactoryを利用し登録しています。  

- ログイン処理
- ログインユーザーの取得

を中心に実装しています。

## 📝 APIリクエスト

| URL  |説明  |
|---|---|
|`/api/login`  |UserログインAPI  |
|`/api/me`  |ログインユーザー取得API  |
|`/admin/api/login`  |AdminログインAPI  |
|`/admin/api/me`  |ログイン管理ユーザー取得API  |


## 📝 フロントエンドについて

Session認証を試すために、Vue.jsでフロントエンドの実装しています。  
以下のリポジトリを参考とし、Vue CliでVueのプロジェクトを作成しています。

https://github.com/starkovsky/laravel-vue-cli


## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
