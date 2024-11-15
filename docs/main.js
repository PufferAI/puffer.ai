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

function loadGame(gameKey) {
    const game = games[gameKey];
    const container = document.querySelector('.featured-game-container');
    const featured = document.querySelector('.featured-game');
    
    featured.src = game.path;
    document.querySelector('.game-info .game-title').textContent = game.title;
    document.querySelector('.game-description').textContent = game.description;
    
}

function initializeGames() {
    const grid = document.querySelector('.games-grid');
    if (!grid) return;
    grid.innerHTML = Object.entries(games).map(([key, game]) => `
        <div class="game-card" onclick="loadGame('${key}')">
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
    
    const container = document.querySelector('.featured-game-container');
    
    // Set container size
    container.style.width = `${newGame.width}px`;
    container.style.height = `${newGame.height}px`;
    
    // Set iframe size
    currentGame.style.width = `${newGame.width}px`;
    currentGame.style.height = `${newGame.height}px`;
    // Also set the attributes for good measure
    currentGame.width = newGame.width;
    currentGame.height = newGame.height;
    
    // Set source and text content last
    currentGame.src = newGame.path;
    document.querySelector('.game-info .game-title').textContent = newGame.title;
    document.querySelector('.game-description').textContent = newGame.description;
    
    console.log('Container resized to:', {
        containerWidth: container.clientWidth,
        containerHeight: container.clientHeight,
        iframeWidth: currentGame.clientWidth,
        iframeHeight: currentGame.clientHeight,
        containerVisible: container.offsetParent !== null
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeGames();
    const demoGame = document.querySelector('.featured-game');
    if (demoGame) {
        randomizeGame();
    }
});
