window.onload = () => {
 		fetch("exhibition.json")
            .then((response) => response.json())
            .then((json) => {
                data = json.list;
                
                const jsonListWrap = document.getElementById("jsonListWrap");

                data.forEach(el => {
                    jsonListWrap.innerHTML += `
                        <li> id : ${el.number}</li>
                        <li> title : ${el.name}</li>
                        <li> ${e1.starDate} - ${e1.endData}</li>
                    `;
                });
        });
}
