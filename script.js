const games = [
  {
    stadium: "잠실야구장",
    region: "서울특별시 송파구",
    away: "LG",
    home: "두산",
    time: "18:30",
    awayClass: "lg",
    homeClass: "doosan",
    awayIcon: "LG",
    homeIcon: "DB"
  },
  {
    stadium: "대전 한화생명 볼파크",
    region: "대전광역시 중구",
    away: "한화",
    home: "롯데",
    time: "18:30",
    awayClass: "hanwha",
    homeClass: "lotte",
    awayIcon: "HE",
    homeIcon: "LT"
  },
  {
    stadium: "광주-KIA 챔피언스 필드",
    region: "광주광역시 북구",
    away: "KIA",
    home: "NC",
    time: "18:30",
    awayClass: "kia-logo",
    homeClass: "nc",
    awayIcon: "🐯",
    homeIcon: "NC",
    highlight: true
  },
  {
    stadium: "대구 삼성 라이온즈 파크",
    region: "대구광역시 수성구",
    away: "삼성",
    home: "키움",
    time: "18:30",
    awayClass: "samsung",
    homeClass: "kiwoom",
    awayIcon: "SL",
    homeIcon: "KH"
  },
  {
    stadium: "수원 KT 위즈 파크",
    region: "경기도 수원시",
    away: "KT",
    home: "SSG",
    time: "18:30",
    awayClass: "kt",
    homeClass: "ssg",
    awayIcon: "KT",
    homeIcon: "SSG"
  }
];

function renderGames() {
  const gameList = document.getElementById("gameList");

  gameList.innerHTML = games.map(game => `
    <article class="game-card ${game.highlight ? "kia" : ""}">
      <div class="stadium">
        <div class="stadium-icon">🏟️</div>
        <div>
          <strong>${game.stadium}</strong>
          <span>${game.region}</span>
        </div>
      </div>

      <div class="team">
        <div class="logo ${game.awayClass}">${game.awayIcon}</div>
        <strong>${game.away}</strong>
        <span>원정팀</span>
      </div>

      <div class="vs">VS</div>

      <div class="team">
        <div class="logo ${game.homeClass}">${game.homeIcon}</div>
        <strong>${game.home}</strong>
        <span>홈팀</span>
      </div>

      <div>
        <div class="time">⏰ ${game.time}</div>
        <button class="map-btn" onclick="openMap('${game.stadium}')">📍 지도 보기</button>
      </div>
    </article>
  `).join("");
}

function openMap(place) {
  const url = `https://map.naver.com/v5/search/${encodeURIComponent(place)}`;
  window.open(url, "_blank");
}

renderGames();
