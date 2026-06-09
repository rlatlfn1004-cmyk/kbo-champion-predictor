const games = [
  { stadium: "잠실야구장", away: "한화", home: "LG", time: "18:30" },
  { stadium: "문학 SSG 랜더스필드", away: "두산", home: "SSG", time: "18:30" },
  { stadium: "사직야구장", away: "KIA", home: "롯데", time: "18:30" },
  { stadium: "대구 삼성라이온즈파크", away: "키움", home: "삼성", time: "18:30" },
  { stadium: "수원 KT위즈파크", away: "NC", home: "KT", time: "18:30" }
];

function showGames() {
  const gameList = document.getElementById("gameList");
  gameList.innerHTML = "";
  games.forEach(game => {
    gameList.innerHTML += `
      <div class="game-card">
        <div class="stadium">📍 ${game.stadium}</div>
        <div class="teams">${game.away} vs ${game.home}</div>
        <div class="time">⏰ ${game.time}</div>
      </div>`;
  });
}