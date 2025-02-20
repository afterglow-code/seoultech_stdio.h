Git 관리 계획   
dev에서 각 팀원별 bracnh로 pull 해서 개발.   
추후 develop에서 merge하고 build 해서 main에 업로드   
개발 후 본인 branch에 두시면 제가 merge 해서 합치겠습니다  

1. 본인 branch로 pull 해서 당겨온 후 npm install로 모듈 설치   
2. 설치 후 npm start 했는데 web-vitals 오류 난다면   
npm install --save-dev web-vitals 해보고 다시 npm start   

폰트 사용은 사용하려는 jsx파일에   
`import '../fonts/pretendardvariable.css';` 후 css 에서 `font-family: 'Pretendard Variable';` 속성 적용하시면 됩니다.   
locus_sangsang도 마찬가지로 사용하실수 있습니다.   
`import '../fonts/pretendardvariable.css';` 여기 안에 전부 탑재해놨으니 이 파일 하나만 import 하시면 됩니다.   
