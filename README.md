# boilerplate-react-redux-es6
React v16, Redux, Redux-actions, React-Router v4, Daggy

```sh
# 1) Starts a webpack dev-server that provids hot-reload.
cd frontend/
yarn
yarn dev-build
yarn start
# [*]Dev-server uses 'https' as a result you have to set
# access for work without ssl(Open http://localhost:3001)

# 2) Starts a backend server that hosts a demo page
cd server/
yarn
yarn start

# 1.1) if you need to develop in VirtualBox, Docker or Mobile Browser with support of hot-reload.
cd frontend/
yarn dev-build-lan
yarn start-lan

# Open http://localhost:3000

```

[*]Shoud disable checking of ssl for localhost.
[Chrome](chrome://flags/#allow-insecure-localhost) <br>
https://superuser.com/questions/772762/how-can-i-disable-security-checks-for-localhost?answertab=votes#tab-top <br>
It need for right work HOT-reload in mobile browser, Docker or VM.