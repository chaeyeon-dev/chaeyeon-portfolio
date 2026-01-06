// ================================
// Project Data
// ================================
const projectData = {
    movie: {
      title: "영화 예매 시스템",
      image: "images/movie.png",
      desc: "Java Swing을 활용해 영화 정보 조회 및 예매 기능을 구현한 프로젝트입니다.",
      info: ["Java Swing 기반 UI 구현", "영화 목록 / 상세 정보 조회", "좌석 선택 및 예매 기능", "MySQL + JDBC 연동"],
      link: "https://github.com/chaeyeon-dev/movie"
    },
    arduino: {
      title: "날씨 기반 IoT 스마트 창문",
      image: "images/iot.png",
      desc: "환경 센서 데이터를 활용해 버튼으로 창문을 제어하고, 날씨에 따라 옷차림·우산·마스크 정보를 스마트폰 앱에서 자동으로 제공하는 IoT 프로젝트입니다.",
      info: ["온·습도 및 환경 센서 데이터 수집", "버튼 입력을 통한 창문 개폐 제어", "서보 모터를 활용한 창문 열림/닫힘 제어","날씨 데이터 기반 옷차림·우산·마스크 정보 자동 표시","App Inventor 기반 스마트폰 앱 연동"],
      link: "https://github.com/chaeyeon-dev/iot-smart-window"
    },
    server: {
      title: "서버 구축 관리 프로젝트",
      image: "images/server.png",
      desc: "Naver OpenAPI를 활용해 검색 결과를 조회하고,반환된 데이터를 웹 페이지에 테이블 형태로 출력한 뒤 선택한 데이터를 DB에 저장하는 웹 서비스입니다.",
      info: ["키워드 입력을 통한 Naver OpenAPI 검색 기능", "API 응답(JSON/XML) 파싱 및 데이터 가공", "검색 결과를 <table> 형태로 화면 출력", "결과 데이터 DB 테이블 저장"],
      link: "https://github.com/chaeyeon-dev/naver-openapi-web-service"
    },
      systemDesign: {
        title: "System Design – Use Case & Class Diagram",
        image: "images/usecase.png",
        desc: "맛집 관리 시스템의 요구사항을 분석하고 Use Case Diagram과 Class Diagram을 통해 시스템 구조를 설계한 프로젝트입니다.",
        info: [
          "사용자·관리자 주요 기능 Use Case Diagram으로 정의",
          "회원가입, 로그인, 식당 조회·검색, 리뷰 흐름 설계",
          "Class Diagram을 통한 객체 간 관계(1:N) 설계",
          "DB 구조를 고려한 엔티티 관계 및 책임 분리"
        ],
        link: ""
      },
    crime: {
      title: "범죄 발생 시간·요일·장소 분석",
      image: "images/crime.png",
      desc: "공공데이터를 기반으로 범죄 발생 시간대, 요일, 장소별 패턴을 분석하고 데이터 시각화를 통해 인사이트를 도출한 프로젝트입니다.",
      info: [
        "공공데이터 기반 범죄 발생 데이터 전처리",
        "시간대·요일·장소별 범죄 패턴 분석",
        "Pandas를 활용한 데이터 분석",
        "Matplotlib을 이용한 시각화",
        "예상과 다른 범죄 집중 구간 도출"
      ],
      link: "" // GitHub 없으면 빈 값 OK
    },
    inbab: {
  title: "Inbab – 인하공전 맛집 정보 어플",
  image: "images/inbab.png",
  desc: "인하공전 학생들이 주변 맛집을 쉽고 빠르게 찾을 수 있도록 제작한 위치 기반 맛집 정보 어플입니다.",
  info: [
    "3-1학기 기초 기능 구현 후, 3-2학기에서 기능 고도화 및 구조 개선",
    "Firebase Authentication 기반 회원가입·로그인 구현",
    "Firestore를 활용한 맛집·리뷰 데이터 실시간 관리",
    "Map API 연동으로 위치 기반 맛집 시각화",
    "리뷰 작성·수정·삭제 기능 구현",
    "Firestore 컬렉션 구조 개선 및 데이터 처리 안정화",
    "관리자 기능을 통한 식당 및 사용자 데이터 관리"
  ],
  link: "https://github.com/chaeyeon-dev/inbab"
},
careerfolio: {
  title: "CareerFolio – 통합 이력 관리 웹 서비스",
  image: "images/portfolio.png",
  desc: "이력서·자기소개서·포트폴리오를 한 곳에서 관리할 수 있는 Spring Boot 기반 통합 이력 관리 웹 서비스입니다.",
  info: [
    "Spring Boot + JPA 기반 백엔드 구조 설계",
    "Spring Security를 활용한 회원 인증·인가 처리",
    "이력서·포트폴리오 CRUD 기능 구현",
    "실시간 미리보기 및 템플릿 기반 PDF 출력",
    "UI 흐름 개선 및 사용자 경험 고려한 화면 설계"
  ],
  link: "https://github.com/chaeyeon-dev/careerfolio"
},
websocket: {
  title: "WebSocket 실시간 채팅",
  image: "images/websocket-chat.png",
  desc: "WebSocket 기반으로 여러 사용자가 동시에 참여할 수 있는 실시간 채팅 서비스입니다.",
  info: [
    "WebSocket 기반 실시간 양방향 통신",
    "사용자 입장/퇴장 시스템 메시지 처리",
    "Node.js + ws 라이브러리 서버 구현",
    "프론트엔드와 백엔드 분리 배포(Render)"
  ],
  link: "https://websocket-chat-frontend-7k0x.onrender.com/"
}


};
// ================================
// Open Project Modal
// ================================
function openProject(key) {
  const data = projectData[key];
  if (!data) return;

  document.getElementById("modal-title").innerText = data.title;
  document.getElementById("modal-desc").innerText = data.desc;
  
  const img = document.getElementById("modal-image");
  img.src = data.image;
  img.alt = data.title;

  const infoList = document.getElementById("modal-info");
  infoList.innerHTML = "";
  
  // ✔를 여기서 넣지 않고 CSS에서 넣도록 수정했습니다.
  data.info.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item; 
    infoList.appendChild(li);
  });

  const linkBtn = document.getElementById("modal-link");
  if (data.link) {
    linkBtn.href = data.link;
    linkBtn.style.display = "inline-flex";
  } else {
    linkBtn.style.display = "none";
  }

  document.getElementById("project-modal").classList.add("active");
  document.body.style.overflow = "hidden"; 
}

function closeProject() {
  document.getElementById("project-modal").classList.remove("active");
  document.body.style.overflow = "auto";
}

document.getElementById("project-modal").addEventListener("click", (e) => {
  if (e.target.id === "project-modal") closeProject();
});