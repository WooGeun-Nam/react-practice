ex02: 번들링 환경(webpack.config.js) 설정하기

1. 설치 패키지
[ex02]$ npm i -D webpack webpack-cli express

2. 번들링 환경(webpack.config.json)
  - entry 파일
  - output

3. 스크립팅
  "scripts": {
    "start": "node dev-server"
    "build": "npx webpack ./src/index.js -o ./public"
  },

4. 빌드
[ex02]$ npm run build

5. 실행
[ex02]$ npm start