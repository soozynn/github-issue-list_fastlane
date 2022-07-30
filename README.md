## 실행방법

git clone https://github.com/soozynn/github-issue-list_fastlane.git

```
npm install
```

설치 후,

```
npm start
```

http://localhost:3000/ 을 실행시켜주세요.

## 최종 결과

// 비디오

## 사용한 기술과 선택한 이유

```
  "@reduxjs/toolkit": "^1.8.3",
  "prop-types": "^15.8.1",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.3.0",
  "react-redux": "^8.0.2",
  "styled-components": "^5.3.5",
```

- @reduxjs/toolkit<br />
  스토어 설정, 리듀서 생성, 불변성 업데이트 로직 등 단순화하는 유틸리티가 포함되어 있어 사용하기 간단하고, 더 적은 코드로 더 많은 작업 수행 가능한 점, 또 이전과 달리 mutable 로직을 작성할 수 있으며 전체 슬라이스 상태의 생성도 자동으로 수행할 수 있는 여러 장점에 의해 채택하게 되었습니다.

- styled-components<br />
  props를 사용하여 style을 컴포넌트에 맞춰 유동적이게 적용할 수 있는 점을 좋아하기에 선택하게 되었습니다. 자체 스타일을 포함하기에 작은 컴포넌트를 잘 만들어 놓는다면 이외의 여러 프로젝트에서도 쉽게 재사용할 수 있는 이점과 이 외에도 글로벌 스타일을 주어 전체적으로 통일된 스타일 또한 적용할 수 있는 이점이 있어 해당 기술을 선택하게 되었습니다.

## Challenge

- TypeScript<br />
  이번 과제를 통해 처음 TypeScript를 사용해보게 되었습니다.

## 배포 사이트
