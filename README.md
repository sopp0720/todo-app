# vue-todo-project

> A Vue.js project
> this is todo applicaion

## view
- ![Image Alt project view](/image/project_view.jpg)

## 리팩토링 요약
- 컴포넌트(INPUT, LIST, REMOVE, FOOTER) : '프레젠테이션 컴포넌트'역할을 함. 여기서는 이벤트만 발생, UI조작하는 부분.
- APP.VUE : '컨테이너 뷰', 상위 컴포넌트, 실제 메서드 수행. - 중앙관리식 데이터 조작.(vuex 조작)

## modal 적용 (사용자 경험 개선)
- (데이터 입력/삭제 반응이 너무 빠름) --> 트랜지션, 애니메이션효과로 조작가능.(react와 차별점)
- slot은 유용한 vue의 feature
- SLOT은 특정 컴포넌트의 일부를 재사용할 수 있다.

## 
- /x-template ? ==> 일반 JQUERY~이런것에 모달 템플렛을 적용할때 X-template를 쓴다.

## transitions
- 프레임웍자체에서 애니메이션 기능등을 제공해준다 --> 사용자관점
- v-enter:
- v-enter-active:

## method 속성함수 --> ES6표현으로 수정
- 메서드 속성을 괄호로만 표현할 수 있다.
- data() : function() --> data()

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
