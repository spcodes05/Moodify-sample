document.addEventListener("DOMContentLoaded", function () {
  const moodCards = document.querySelectorAll(".mood-card");
  const iframe = document.getElementById("spotify-iframe");
  const playerSection = document.getElementById("spotify-player");

  moodCards.forEach(card => {
    card.addEventListener("click", () => {
      const playlistId = card.dataset.playlist;
      const theme = card.dataset.theme;

      if (playlistId) {
        const embedUrl = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`;
        iframe.src = embedUrl;
        playerSection.style.display = "block";
        playerSection.scrollIntoView({ behavior: "smooth" });
      }

      document.body.className = ''; 
      if (theme) {
        document.body.classList.add(`theme-${theme}`);
      }
    });
  });
});


