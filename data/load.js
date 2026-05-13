async function loadExhibitions(type) {
  const response = await fetch("exhibition.json");
  const data = await response.json();

  const today = new Date();
  let filtered = [];

  if (type === "current") {
    filtered = data.filter(ex => 
      new Date(ex.date_start) <= today && today <= new Date(ex.date_end)
    );
  } else if (type === "past") {
    filtered = data.filter(ex => new Date(ex.date_end) < today);
  } else if (type === "future") {
    filtered = data.filter(ex => new Date(ex.date_start) > today);
  }

  const container = document.getElementById("exhibition-list");
  container.innerHTML = filtered.map(ex => `
    <div class="item">
      <img src="${ex.image}" width="200">
      <h3>${ex.title}</h3>
      <p>${ex.date_start} ~ ${ex.date_end}</p>
      <a href="detail.html?id=${ex.id}">자세히 보기</a>
    </div>
  `).join("");
}
