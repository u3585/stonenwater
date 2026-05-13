async function loadDetail() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const response = await fetch("exhibitions.json");
  const data = await response.json();

  const ex = data.find(item => item.id === id);

  document.getElementById("detail").innerHTML = `
    <h1>${ex.title}</h1>
    <img src="${ex.image}" width="400">
    <p>${ex.date_start} ~ ${ex.date_end}</p>
    <p>${ex.description}</p>
  `;
}

loadDetail();
