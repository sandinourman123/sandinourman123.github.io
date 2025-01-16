const container = document.getElementsByClassName('container')[0];

function generateBox(team) {
    const box = document.createElement('div');
    box.className ="box";
    container.appendChild(box);

    const img = document.createElement('img');
    img.className = "media";
    img.src= team.image;
    box.appendChild(img);

    const title = document.createElement('h4');
    title.innerText = team.title;
    box.appendChild(title);

    const year = document.createElement('p');
    year.innerText = team.year;
    box.appendChild(year);
}

fetch('https://fahram.dev/api/v2/portfolios')
    .then(response => response.json())
    .then(data => data.data.forEach(portfolio => generateBox(portfolio)));