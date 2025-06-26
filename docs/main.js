function resizeGame() {
    const container = document.querySelector('.featured-game-container');
    const iframe = document.querySelector('.featured-game');
    
    // Set specific dimensions that maintain aspect ratio
    container.style.width = 'calc(81vw)';  // Using viewport width
    container.style.height = '81vh';       // Using viewport height
    
    // Set same dimensions for iframe
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    
    console.log('Container resized:', {
        containerWidth: container.clientWidth,
        containerHeight: container.clientHeight,
        iframeWidth: iframe.clientWidth,
        iframeHeight: iframe.clientHeight,
        containerVisible: container.offsetParent !== null
    });
}

function loadGame(game) {
    const container = document.querySelector('.featured-game-container');
    const featured = document.querySelector('.featured-game');

    // Set container size
    container.style.width = `${game.width}px`;
    container.style.height = `${game.height}px`;
    
    // Set iframe size
    featured.style.width = `${game.width}px`;
    featured.style.height = `${game.height}px`;

    // Also set the attributes for good measure
    featured.width = game.width;
    featured.height = game.height;

    console.log('Container resized to:', {
        containerWidth: container.clientWidth,
        containerHeight: container.clientHeight,
        iframeWidth: featured.clientWidth,
        iframeHeight: featured.clientHeight,
        containerVisible: container.offsetParent !== null
    });

    featured.src = game.path;
    document.querySelector('.game-info .game-title').textContent = game.title;
    document.querySelector('.game-description').style.whiteSpace = 'pre-wrap';
    document.querySelector('.game-description').textContent = game.description;
}

function initializeGames() {
    const grid = document.querySelector('.games-grid');
    if (!grid) return;
    grid.innerHTML = Object.entries(games).map(([key, game]) => `
        <div class="game-card" onclick="loadGame(games['${key}'])">
            <div class="game-thumbnail">
                <img src="${game.thumbnail}" alt="${game.title}">
            </div>
            <span class="game-title">${game.title}</span>
        </div>
    `).join('');

    const wip_grid = document.querySelector('.wip-grid');
    if (!wip_grid) return;
    wip_grid.innerHTML = Object.entries(wip).map(([key, game]) => `
        <div class="game-card" onclick="loadGame(wip['${key}'])">
            <div class="game-thumbnail">
                <img src="${game.thumbnail}" alt="${game.title}">
            </div>
            <span class="game-title">${game.title}</span>
        </div>
    `).join('');
}

function randomizeGame() {
    const currentGame = document.querySelector('.featured-game');
    const gameEntries = Object.entries(games);
    const currentPath = currentGame.src.split('/').slice(-2).join('/');
    let newGame;
    do {
        newGame = gameEntries[Math.floor(Math.random() * gameEntries.length)][1];
    } while (newGame.path === currentPath);
    loadGame(newGame);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeGames();
    const demoGame = document.querySelector('.featured-game');

    if (demoGame) {
        // Load specific env if specified in URL params
        const env = new URLSearchParams(window.location.search).get("env");

        if (env != null && env in games) loadGame(games[env]);
        else randomizeGame();
    }
});
