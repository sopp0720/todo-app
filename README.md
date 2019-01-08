# vue-todo-project

> A Vue.js project

## 리팩토링 요약
- 컴포넌트(INPUT, LIST, REMOVE, FOOTER) : '프레젠테이션 컴포넌트'역할을 함. 여기서는 이벤트만 발생, UI조작하는 부분.
- APP.VUE : '컨테이너 뷰', 상위 컴포넌트, 실제 메서드 수행. - 중앙관리식 데이터 조작.(vuex 조작)

## 너무 빠르다(데이터 입력/삭제 반응이 너무 빠름) --> 트랜지션, 애니메이션효과로 조작가능.(react와 차별점)

## 구성하기
- 컴포넌트 구성은 영역별로 구분했을때 재사용성을 높여야 한다. 
- webpack은 빌드툴이다.


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
this is todo applicaion
