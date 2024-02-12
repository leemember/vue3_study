# 📝 Vue CLI

### 프로젝트 시작

> 참고내용 <br /> https://joshua1988.github.io/webpack-guide/build/node-npm.html#node-js%EC%99%80-npm

### 💚 설치

```sh
$npm install -g @vue/cli

OR

$yarn global add @vue/cli
```

이렇게 입력하면 Vue3 할 것인지 Vue2 할 것인지 물어보는데 `Vue3` 선택해서 설치하기

### 💚 실행

```sh
 $ cd vue3-app
 $ npm run serve
```

### 개발용 라이브러리와 배포용 라이브러리 구분하기

NPM 지역 설치를 할 때는 해당 라이브러리가 배포용(dependencies)인지 개발용(devDependencies)인지 꼭 구분해주어야 합니다. 예를 들어, jquery와 같이 **🔍화면 로직과 직접적으로 관련된 라이브러리는 배포용으로 설치해야 합니다.** 아래와 같이 말이죠.

```sh
$npm i jquery
```

```json
{
  "dependencies": {
    "jquery": "^3.4.1"
  }
}
```

그런데 만약 반대로 설치 옵션에 **🔍-D를 주었다면 해당 라이브러리는 빌드하고 배포할 때 애플리케이션 코드에서 빠지게 됩니다.** 따라서, 최종 애플리케이션에 포함되어야 하는 라이브러리는 -D로 설치하면 안 됩니다. **개발할 때만 사용하고 배포할 때는 빠져도 좋은 라이브러리의 예시는 다음과 같습니다.**

- webpack : 빌드 도구
- eslint : 코드 문법 검사 도구
- imagemin : 이미지 압축 도구
