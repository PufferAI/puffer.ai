const games = {
    nmmo3: {
        title: "Neural MMO 3",
        description: `A massively multiagent environment with progression and an agent-driven economy. By Joseph Suarez.

A spiritual successor to Neural MMO 1-2. Explore, forage, fight, and trade in a massive procedurally generated open world. It's playable and quite fun, so I'm not going to tell you much. Your combat and profession levels are displayed overhead. The max in this demo is 40 for each. It starts off hard but you will discover some tricks... probably. Good luck!

This environment supports configurable difficulty and scale. We are running a medium size map (512x512), but with only 8 agents for browser compatibility. The same map runs 1024 locally. 

SHADERS ARE BROKEN ON MOBILE. I know. I will fix them soon.

Controls: LEFT CONTROL to toggle human play, NOT shift like the other environments.
    Move (1st person) or pan (3rd person): W/A/S/D or Arrow keys Sprint (1st person) or increase pan/zoom speed (3rd person): Left shift Use item: Number keys
    Attack: Space
    Buy/sell: B/V
    Debug: H
    Switch view: Tab
    Zoom (3rd person): Q/E

Observations: 2D crop of nearby tiles (discrete), 1D vector of self data (mixed discrete/continuous)
Actions: Discrete. Move, sprint, attack, use item, buy, sell`,
        thumbnail: "assets/nmmo3_thumbnail.png",
        path: "assets/nmmo3/game.html",
        width: 960,
        height: 704,
    },
    moba: {
        title: "Puffer MOBA",
        description: `A Multiplayer Online Battle Arena (MOBA) inspired by DoTA and OpenAI Five. By Joseph Suarez.

This is a 5v5 mirror match with 5 unique characters, each with three unique skills. Your objective is to destroy the enemy base on the other side of the map. There game map has three lanes, each of which contains three towers that will automatically attach nearby enemies. Waves of minions will spawn from each team's base and travel down each lane, fighting each other and towers along the way. In the current version, enemy units are controlled by a simple scripted AI. This environment can also be trained with self-play.

Controls:
    Move: Click or click and hold
    Attack: Automatic
    Use skill: Q/W/E
    Switch character: Number keys

Observations: 2D crop of nearby tiles (mixed discrete/continuous), 1D vector of self data (mixed discrete/continuous)
Actions: Multi-discrete. Move, use skills`,
        thumbnail: "assets/moba_thumbnail.png",
        path: "assets/moba/game.html",
        width: 1312,
        height: 736,
    },
    tactics: {
        title: "Puffer Tactics",
        description: `A turn-based tactical combat game inspired by the popular MMO Dofus. By Nathan Lichtlé.

Combat is similar to CRPGs, D&D, and other tactical turn-based games played on a grid. This environment is missing scripted opponent AI and a trained policy.

Controls:
    Move: Click
    Select skill: Number keys
    Use skill: Click`,
        thumbnail: "assets/tactical_thumbnail.png",
        path: "assets/tactical/game.html",
        width: 1200,
        height: 900,
    },
    go: {
        title: "Go",
        description: `The ancient board game of territory control. By Spencer Cheng.

Controls: Click to place a stone or pass

Observations: 2D tile grid (discrete)
Actions: Discrete. Place a stone, pass`,
        thumbnail: "assets/go_thumbnail.png",
        path: "assets/go/game.html",
        width: 950,
        height: 512,
    },
    snake: {
        title: "Multiagent Snake",
        description: `Play with one snake or thousands. By Joseph Suarez.

Controls: W/A/S/D or Arrow keys to move

Observations: 2D crop of nearby tiles (discrete)
Actions: Discrete. Move`,
        thumbnail: "assets/snake_thumbnail.png",
        path: "assets/snake/game.html",
        width: 1280,
        height: 720,
    },
    enduro: {
        title: "Enduro",
        description: `A fast version of the classic Atari game. By Daniel Addis.

Score points by passing cars. Pass enough cars before time runs out to move on to the next day.

Controls:
    Move: A/D or Left/Right
    Accelerate: Space
    Brake: S or Down

Observations: 1d vector (continuous)
Actions: Discrete. Move, accelerate, brake`,
        thumbnail: "assets/enduro_thumbnail.png",
        path: "assets/enduro/game.html",
        width: 304,
        height: 420,
    },
    breakout: {
        title: "Breakout",
        description: `A fast version of the classic Atari game. By Noah Farr with physics enhancements by David (dmoore101).

Break two screens of bricks before losing all five lives to win.

Controls: 
    Move: A/D or Left/Right
    Fire: W or Up

Observations: 1d vector (continuous)
Actions: Discrete. Move, fire`,
        thumbnail: "assets/breakout_thumbnail.png",
        path: "assets/breakout/game.html",
        width: 576,
        height: 330,
    },
    pong: {
        title: "Pong",
        description: `A fast version of the classic Atari game. By Nathan Lichtlé.

First player to score 21 goals wins.

Controls: W/S or Up/Down to move
Observations: 1d vector (continuous)
Actions: Discrete. Move`,
        thumbnail: "assets/pong_thumbnail.png",
        path: "assets/pong/game.html",
        width: 620,
        height: 640,
    },
    tripletriad: {
	    title: "Triple Triad",
	    description: `A card-based minigame from Final Fantasy. By Spencer Cheng.

When a card is placed next to an opponent's card, the numbers of both cards on that edge will be compared. The higher number card captures the lower number card, converting its color. At the end of the game, the player with the most cards of their own color on the board wins.

Controls:
    Select card: Number keys
    Place card: Click

Observations: 1D vector (continuous)
Actions: Discrete. Select card, place card`,
	    thumbnail: "assets/tripletriad_thumbnail.png",
	    path: "assets/tripletriad/game.html",
	    width: 990,
	    height: 690,
    },
    rware: {
        title: "RWare",
        description: `Port of the robot warehouse environment RWare to C. By Spencer Cheng.

Controls:
    Move forward: W or Up
    Turn left: A or Left
    Turn right: D or Right
    Load/drop box: Space or Enter

Observations: 1D flat crop of nearby tiles (continuous)
Actions: Discrete. Move, turn, load/drop box`,
        thumbnail: "assets/rware_thumbnail.png",
        path: "assets/rware/game.html",
        width: 640,
        height: 704,
    },
    trash_pickup: {
        title: "Trash Pickup",
        description: `Collect trash, put it in the bin. By Xander.

Controls: Move with WASD or Arrow keys
Observations: 3D crop of nearby tiles (one-hot)
Actions: Discrete. Move`,
        thumbnail: "assets/trash_pickup_thumbnail.png",
        path: "assets/trash_pickup/game.html",
        width: 400,
        height: 460,
    },
    connect4: {
        title: "Connect4",
        description: `The classic two-player board game. By Spencer, with opponent AI by Jake Forsey

Be the first player to get four of your pieces in a row horizontally, vertically, or diagonally to win.

Controls: Num keys 1-7 to drop a piece in that column

Observations: 1D vector board state (continuous)
Actions: Discrete. Play piece`,
        thumbnail: "assets/connect4_thumbnail.png",
        path: "assets/connect4/game.html",
        width: 672,
        height: 576,
    },
};

const wip = {
    tcg: {
        title: "TCG",
        description: `Prototype of a trading card game inspired by MTG. By Joseph Suarez.

Currently supports playing lands and minions with no abilities. Help us continue development!

Controls:
    Select card: Num keys
    Confirm: Enter`,
        thumbnail: "assets/tcg_thumbnail.png",
        path: "assets/tcg/game.html",
        width: 1080,
        height: 720,
    },
    robocode: {
        title: "Robocode",
        description: `Port of the Java programming challenge Robocode to C. By Joseph Suarez.

Really cool tank battle environment that wouldn't take much work to finish. Help us continue development!

Controls:
    Move forward: W or Up
    Move backward: S or Down
    Turn left: A or Left
    Turn right: D or Right
    Fire: Space`,
        thumbnail: "assets/robocode_thumbnail.png",
        path: "assets/robocode/game.html",
        width: 768,
        height: 576,
    },
}

