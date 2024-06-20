document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const repositoriosElement = document.querySelector('#repositorios');
    const seguidoresElement = document.querySelector('#seguidores');
    const seguindoElement = document.querySelector('#seguindo');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/ThgFeldmann')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            repositoriosElement.innerText = json.public_repos;
            seguidoresElement.innerText = json.followers;
            seguindoElement.innerText = json.following;
            linkElement.href = json.html_url;
        })
})
