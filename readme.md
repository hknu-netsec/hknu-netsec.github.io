# hknu-netsec.github.io

국립한경대학교 컴퓨터공학과 네트워크 및 보안 연구실 사이트입니다.

## Build status

* 빌드 성공, 정상 작동 중
* 접속 후 첫 화면 디자인 중

## Code style

* index.html 문서는 페이지의 기본 프레임을 구성하고 있으며, 하위 페이지 콘텐츠는 #mainFrame에 AJAX load() 메서드를 사용하여 불러오는 것으로 함.

* CSS는 LESS 프레임워크로 작성되며, 기본 프레임에 적용되는 style.css와 각 하위 페이지에 적용되는 [하위 페이지 이름].css로 구성됨.
* $(function()) 등 WebKit 기반 브라우저에서 unsafe script로 분류되는 스크립트 사용 금지.

## Tech/framework used

* HTML/CSS3 웹 표준 준수
* jQuery 1.11.1
* LESS 프레임워크를 활용한 CSS
* Jetbrains PHPStorm
  프로젝트에 PHPStorm 개발환경 설정 파일이 함께 포함되어있으니 PHPStorm을 사용하면 더 쉽게 프로젝트에 접근 할 수 있습니다.

## Contribute

* junhyeok-dev@gmail.com으로 GitHub 계정을 알려주시면 Contributor로 참여할 수 있습니다.

## Contribution Guideline

- Contributor는 프로젝트의 일관성을 위해 웹 표준을 준수해야하며, Code style를 임의로 수정할 수 없습니다.
- 프로젝트에서 발생한 오류 보고, 추가 기능 제안 등은 GitHub Repository의 Issue 메뉴에서 할 수 있습니다. https://github.com/hknu-netsec/hknu-netsec.github.io/issues
- 각 커밋은 수정사항에 대한 설명이 포함되어야 합니다. 수정사항은 [타입]: [수정사항] 형식으로 작성되어야 하며, 아래는 각 타입에 대한 설명입니다.
  - feat: 기능 추가
  - fix: 문제 수정
  - docs: 코드 수정이 아닌 문서 수정
  - style: 코드 수정이 있었으나 세미콜론, 오타 수정 등 기능의 변화가 없는 경우