Git 관리 계획   
seungmin branch에서 템플릿 생성해서 dev 로.   
dev에서 각 팀원별 bracnh로 pull 해서 개발.   
추후 develop에서 merge하고 build 해서 main에 업로드   
   
1. 본인 branch로 pull 해서 당겨온 후 npm install로 모듈 설치   
2. 설치 후 npm start 했는데 web-vitals 오류 난다면   
npm install --save-dev web-vitals 해보고 다시 npm start   

폰트 사용은 사용하려는 jsx파일에   
`import '../fonts/pretendardvariable.css';` 후 css 에서 `font-family: 'Pretendard Variable';` 속성 적용하시면 됩니다.
