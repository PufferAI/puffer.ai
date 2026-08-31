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

function envQuality(game) {
    return (game && game.quality) || "cyan";
}

function qualityClass(game) {
    return "quality-" + envQuality(game);
}

function onClickEnv(game) {
    loadGame(game)

    // scroll till game visible
    const container = document.querySelector('.featured-game-container');
    if(container){
        container.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
    }

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
    renderPolicyLine(game);

    container.classList.remove("quality-gold", "quality-silver", "quality-cyan");
    container.classList.add(qualityClass(game));
}

let policies = null;
const policiesReady = fetch("assets/policies.json", { cache: "no-store" })
    .then((r) => (r.ok ? r.json() : null))
    .then((data) => { policies = data; })
    .catch(() => { policies = null; });

function envFromGame(game) {
    const m = String(game.path || "").match(/assets\/([^/]+)\//);
    return m ? m[1] : null;
}

function fmtNum(v, digits) {
    if (v === null || v === undefined || Number.isNaN(Number(v))) return "—";
    const n = Number(v);
    const abs = Math.abs(n);
    if (abs >= 1e6) return (n / 1e6).toFixed(2) + "M";
    if (abs >= 1e3) return (n / 1e3).toFixed(abs >= 10000 ? 0 : 1) + "k";
    if (abs >= 100) return n.toFixed(1);
    return n.toFixed(digits);
}

function fmtParams(p) {
    if (p === null || p === undefined) return "—";
    const n = Number(p);
    if (n >= 1e6) return (n / 1e6).toFixed(2) + "M params";
    if (n >= 1e3) return (n / 1e3).toFixed(0) + "k params";
    return Math.round(n) + " params";
}

function policyBit(label, rec, warn) {
    if (!rec) return "";
    const perf = rec.perf == null ? "—" : Number(rec.perf).toFixed(3);
    const score = fmtNum(rec.score, 2);
    const cls = warn ? ' class="gap"' : "";
    return `<span${cls}>${label}: ${perf} perf · ${score} score · ${fmtParams(rec.params)}</span>`;
}

function renderPolicyLine(game) {
    const el = document.querySelector(".policy-line");
    if (!el) return;
    const env = envFromGame(game);
    const rec = policies && policies.envs && env ? policies.envs[env] : null;
    if (!rec) {
        el.hidden = true;
        el.innerHTML = "";
        return;
    }
    const ship = rec.ship;
    const best = rec.best;
    const same = ship && best && ship.run_id === best.run_id;
    const bits = [];
    if (ship) bits.push(policyBit("To ship", ship, false));
    else bits.push('<span class="gap">No policy under the param budget</span>');
    if (best && !same) bits.push(policyBit("Best", best, true));
    else if (same) bits.push("Best run fits the budget");
    if (rec.web_agents > 1) {
        bits.push(`${rec.web_agents} agents · cap ${fmtParams(rec.param_budget)}`);
    }
    el.innerHTML = bits.join(" · ");
    el.hidden = false;
}

function initializeGames() {
    const grid = document.querySelector('.games-grid');
    if (!grid) return;
    grid.innerHTML = Object.entries(games).map(([key, game]) => `
        <div class="game-card ${qualityClass(game)}" onclick="onClickEnv(games['${key}'])">
            <div class="game-thumbnail">
                <img src="${game.thumbnail}" alt="${game.title}">
            </div>
            <span class="game-title">${game.title}</span>
        </div>
    `).join('');

    const toy_grid = document.querySelector('.toy-grid');
    if (toy_grid && typeof toy !== 'undefined') {
        toy_grid.innerHTML = Object.entries(toy).map(([key, game]) => `
            <div class="game-card ${qualityClass(game)}" onclick="onClickEnv(toy['${key}'])">
                <div class="game-thumbnail">
                    <img src="${game.thumbnail}" alt="${game.title}">
                </div>
                <span class="game-title">${game.title}</span>
            </div>
        `).join('');
    }

    const wip_grid = document.querySelector('.wip-grid');
    if (!wip_grid) return;
    wip_grid.innerHTML = Object.entries(wip).map(([key, game]) => `
        <div class="game-card ${qualityClass(game)}" onclick="onClickEnv(wip['${key}'])">
            <div class="game-thumbnail">
                <img src="${game.thumbnail}" alt="${game.title}">
            </div>
            <span class="game-title">${game.title}</span>
        </div>
    `).join('');
}

function allGames() {
    return Object.assign({}, games, typeof toy !== 'undefined' ? toy : {}, wip);
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
        const start = () => {
            const env = new URLSearchParams(window.location.search).get("env");
            const catalog = allGames();
            if (env != null && env in catalog) loadGame(catalog[env]);
            else randomizeGame();
        };
        policiesReady.then(start, start);
    }
});
