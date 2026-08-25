const games = {
    inferno: {
        title: "OSRS Inferno",
        description: `Old School RuneScape Inferno simulator. By Valtteri Valo.

A full TzKal-Zuk encounter with pillars, Jad, healers, and blob attacks. Toggle human play with Left Control. Click to move, pray, and use inventory.

Observations: compact entity state
Actions: Discrete movement, prayer, inventory, and target selection`,
        thumbnail: "assets/inferno_thumbnail.png",
        path: "assets/inferno/game.html",
        width: 1280,
        height: 720,
    },
    colosseum: {
        title: "OSRS Colosseum",
        description: `Old School RuneScape Fortis Colosseum simulator. By Valtteri Valo.

Wave combat in the Colosseum arena. Toggle human play with Left Control. Click to move, pray, and use inventory.

Observations: compact entity state
Actions: Discrete movement, prayer, inventory, and target selection`,
        thumbnail: "assets/colosseum_thumbnail.png",
        path: "assets/colosseum/game.html",
        width: 1280,
        height: 720,
    },

    nmmo3: {
        title: "Neural MMO 3",
        quality: "gold",
        description: `A massively multiagent environment with progression and an agent-driven economy. By Joseph Suarez.

A spiritual successor to Neural MMO 1-2. Explore, forage, fight, and trade in a massive procedurally generated open world. It's playable and quite fun, so I'm not going to tell you much. Your combat and profession levels are displayed overhead. The max in this demo is 40 for each. It starts off hard but you will discover some tricks... probably. Good luck!

This environment supports configurable difficulty and scale. We are running a medium size map (512x512), but with only 8 agents for browser compatibility. The same map runs 1024 locally. 

SHADERS ARE BROKEN ON MOBILE. I know. I will fix them soon.

Controls: Hold Shift to take control (same as other environments).
    Move (1st person) or pan (3rd person): W/A/S/D or Arrow keys
    Sprint (1st person): Space + WASD
    Attack: Space
    Increase pan/zoom speed (3rd person): Shift
    Use item: Number keys
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
    drone: {
        title: "Drone",
        quality: "gold",
        description: `Four motor thrust based drone simulation. By Sam Turner and Finlay Sanders.

Observations: Own mechanics and orientation, relative distance to goal
Actions: Continuous thrust per motor`,
        thumbnail: "assets/drone_thumbnail.png",
        path: "assets/drone/game.html",
        width: 1080,
        height: 720,
    },
    tetris: {
        title: "Tetris",
        quality: "gold",
        description: `A fast version of the classic Atari game. By Hadrien Crassous.

Score points by clearing rows.

Controls:
    Move: A/D or Left/Right
    Rotate: W or Up
    Soft drop: S or Down
    Hard drop: Space
    Stash piece: C

Observations: 1d vector (continuous)
Actions: Discrete. Move, rotate, soft/hard drop, stash`,
        thumbnail: "assets/tetris_thumbnail.png",
        path: "assets/tetris/game.html",
        width: 384,
        height: 928,
    },
    maze: {
        title: "Maze",
        quality: "gold",
        description: `Procedurally generated mazes with sparse reward. By Joseph Suarez.

Observations: Local crop of tiles
Actions: Discrete turn and move`,
        thumbnail: "assets/maze_thumbnail.png",
        path: "assets/maze/game.html",
        width: 752,
        height: 752,
    },
    boxoban: {
        title: "Boxoban",
        quality: "gold",
        description: `Sokoban-style crate puzzles generated from Boxoban levels.

Controls: WASD or Arrow keys
Observations: Local tile crop
Actions: Discrete. Move`,
        thumbnail: "assets/boxoban_thumbnail.png",
        path: "assets/boxoban/game.html",
        width: 320,
        height: 320,
    },
    breakout: {
        title: "Breakout",
        quality: "gold",
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
        quality: "gold",
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
    twentyfortyeight: {
        title: "2048",
        quality: "gold",
        description: `A fast version of the classic game. By Yannik.

Score points by merging same-valued tiles to make a bigger number.

Controls: WASD or Arrow keys to slide tiles
Observations: 1d game state vector (continuous)
Actions: Slide tiles`,
        thumbnail: "assets/2048_thumbnail.png",
        path: "assets/g2048/game.html",
        width: 400,
        height: 450,
    },
    cartpole: {
        title: "CartPole",
        quality: "gold",
        description: `The classic RL toy problem. Keep the pole standing.

Controls: Right/D or Left/A
Observations: 1D state (continuous)
Actions: Discrete. Left/Right`,
        thumbnail: "assets/cartpole_thumbnail.png",
        path: "assets/cartpole/game.html",
        width: 600,
        height: 200,
    },
    robocode: {
        title: "Robocode",
        quality: "gold",
        description: `Port of the Java programming challenge Robocode to C. By Joseph Suarez.

Really cool tank battle environment.

Controls:
    Move forward: W or Up
    Move backward: S or Down
    Turn left: A or Left
    Turn right: D or Right
    Fire: Space`,
        thumbnail: "assets/robocode_thumbnail.png",
        path: "assets/robocode/game.html",
        width: 800,
        height: 600,
    },
    moba: {
        title: "MOBA",
        quality: "silver",
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
    drive: {
        title: "Drive",
        quality: "silver",
        description: `Driving simulator with real-world map data. Port by Spencer Cheng. Active collab with NYU.

Controls:
    Move: WASD or Arrow keys
    1s person: Hold space
    Number keys: Switch cars
    Observation overlay: Left shift

Observations: Partially observed local state (continuous)
Actions: Multidiscrete (accelerate, turn)`,
        thumbnail: "assets/drive_thumbnail.png",
        path: "assets/drive/game.html",
        width: 1080,
        height: 720,
    },
    tower_climb: {
        title: "Tower Climb",
        quality: "silver",
        description: `A tower climber based on the Japanese puzzle game Catherine. By Spencer Cheng.

Push and pull blocks to create a path to the objective at the top. You can climb, cling, and shimmy along blocks.

Controls:
    Move: Arrow keys
    Camera: WASD
    Grab Block: Space

Observations: 3D crop of nearby blocks, 1D vector of self data. Continuous.
Actions: Discrete. Move, grab block.`,
        thumbnail: "assets/tower_climb_thumbnail.png",
        path: "assets/tower_climb/game.html",
        width: 1008,
        height: 900,
    },
    snake: {
        title: "Multiagent Snake",
        quality: "silver",
        description: `Play with one snake or thousands. By Joseph Suarez.

Controls: W/A/S/D or Arrow keys to move

Observations: 2D crop of nearby tiles (discrete)
Actions: Discrete. Move`,
        thumbnail: "assets/snake_thumbnail.png",
        path: "assets/snake/game.html",
        width: 1280,
        height: 720,
    },
    craftax: {
        title: "Craftax",
        quality: "cyan",
        description: `A C port of Craftax. Survive, gather, and craft.

Controls: WASD or Arrow keys, other keys to craft/use
Observations: Local world crop (continuous)
Actions: Discrete`,
        thumbnail: "assets/craftax_thumbnail.png",
        path: "assets/craftax/game.html",
        width: 1024,
        height: 1104,
    },
    battle: {
        title: "Battle",
        quality: "cyan",
        description: `A 3D vehicle combat sandbox.

Controls: WASD or Arrow keys
Observations: Local combat state (continuous)
Actions: Discrete / continuous control`,
        thumbnail: "assets/battle_thumbnail.png",
        path: "assets/battle/game.html",
        width: 1980,
        height: 1020,
    },
    terraform: {
        title: "Terraform",
        quality: "cyan",
        description: `Terraform the earth with bulldozers. By Spencer Cheng.

Controls:
    Move: WASD or Arrow keys
    Fill bucket: Space
    Empty bucket: Enter
    Observation overlay: Control (while holding left shift)

Observations: Partially observed local state (continuous)
Actions: Discrete. Move, fill/empty bucket`,
        thumbnail: "assets/terraform_thumbnail.png",
        path: "assets/terraform/game.html",
        width: 1080,
        height: 720,
    },
    overcooked: {
        title: "Overcooked",
        quality: "cyan",
        description: `Cooperative cooking. Deliver soups before they burn.

Controls: WASD or Arrow keys, Space to interact
Observations: 1D state (continuous)
Actions: Discrete. Move, interact`,
        thumbnail: "assets/overcooked_thumbnail.png",
        path: "assets/overcooked/game.html",
        width: 850,
        height: 580,
    },
    tower_defence: {
        title: "Tower Defence",
        quality: "cyan",
        description: `Place towers and stop the creeps.

Controls: Click to place / select
Observations: Local battlefield state
Actions: Discrete`,
        thumbnail: "assets/tower_defence_thumbnail.png",
        path: "assets/tower_defence/game.html",
        width: 960,
        height: 650,
    },
    wef: {
        title: "WEF",
        quality: "cyan",
        description: `Weakly electric fish. Multiagent foraging with electric-field sensing. Port of the Kempner Institute biophysics env.

Controls: WASD or Arrow keys
Observations: 1D sensor vector (continuous)
Actions: Continuous. Move, turn, bite`,
        thumbnail: "assets/wef_thumbnail.png",
        path: "assets/wef/game.html",
        width: 900,
        height: 900,
    },
    convert: {
        title: "Convert",
        quality: "cyan",
        description: `512 agents in your browser! By Joseph Suarez.

Puffers need to convert to a new color by touching a start that maches their current color. Star our GitHub repo to help feed the puffers!

Controls: N/A

Observations: 1D continuous array. Distance to nearest star of each color, own heading, reward, relative position, and color.

Actions: Multidiscrete. Turn, accelerate`,
        thumbnail: "assets/convert_thumbnail.png",
        path: "assets/convert/game.html",
        width: 1920,
        height: 1080,
    },
    convert_circle: {
        title: "Convert Circle",
        quality: "cyan",
        description: `Convert-style agents on a circular arena.

Controls: N/A
Observations: 1D continuous features
Actions: Turn, accelerate`,
        thumbnail: "assets/convert_circle_thumbnail.png",
        path: "assets/convert_circle/game.html",
        width: 1920,
        height: 1080,
    },
    whisker_racer: {
        title: "Race",
        quality: "cyan",
        description: `A fast version of the classic CarRacing environment. By Kinvert.

Race around the track and don't run into walls.

Controls:
    Steer: A/D or Left/Right
    Shift perspective: Shift + M

Observations: 1d vector (continuous). Uses whiskers as collision checks.
Actions: Discrete and continuous steering supported`,
        thumbnail: "assets/whisker_racer_thumbnail.png",
        path: "assets/whisker_racer/game.html",
        width: 1080,
        height: 720,
    },
    enduro: {
        title: "Enduro",
        quality: "cyan",
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
    pacman: {
        title: "Pacman",
        quality: "cyan",
        description: `A fast version of the classic arcade game. By Gabe.

Score points by eating dots and ghosts. But not when they're eating you!

Controls:
    Move: WASD or Arrow keys

Observations: 1d game state vector (continuous)
Actions: Move`,
        thumbnail: "assets/pacman_thumbnail.png",
        path: "assets/pacman/game.html",
        width: 560,
        height: 660,
    },
    go: {
        title: "Go",
        quality: "cyan",
        description: `The ancient board game of territory control. By Spencer Cheng.

Controls: Click to place a stone or pass

Observations: 2D tile grid (discrete)
Actions: Discrete. Place a stone, pass`,
        thumbnail: "assets/go_thumbnail.png",
        path: "assets/go/game.html",
        width: 950,
        height: 750,
    },
    chess: {
        title: "Chess",
        quality: "cyan",
        description: `Standard chess against a built-in opponent.

Controls: Click to move
Observations: Board tiles
Actions: Discrete. Move`,
        thumbnail: "assets/chess_thumbnail.png",
        path: "assets/chess/game.html",
        width: 512,
        height: 652,
    },
    checkers: {
        title: "Checkers",
        quality: "cyan",
        description: `English draughts on an 8x8 board.

Controls: Click to move
Observations: Board tiles
Actions: Discrete. Move`,
        thumbnail: "assets/checkers_thumbnail.png",
        path: "assets/checkers/game.html",
        width: 512,
        height: 512,
    },
    hex: {
        title: "Hex",
        quality: "cyan",
        description: `The connection game Hex.

Controls: Click to place a stone
Observations: Board tiles
Actions: Discrete. Place stone`,
        thumbnail: "assets/hex_thumbnail.png",
        path: "assets/hex/game.html",
        width: 800,
        height: 600,
    },
    tripletriad: {
        title: "Triple Triad",
        quality: "cyan",
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
    laser_puzzle: {
        title: "Laser Puzzle",
        quality: "cyan",
        description: `Rotate mirrors to complete the laser path.

Controls: Click / number keys
Observations: Puzzle grid
Actions: Discrete`,
        thumbnail: "assets/laser_puzzle_thumbnail.png",
        path: "assets/laser_puzzle/game.html",
        width: 800,
        height: 700,
    },
    lightsout: {
        title: "Lights Out",
        quality: "cyan",
        description: `Toggle lights until the board is dark.

Controls: Click or number keys
Observations: Grid tiles
Actions: Discrete. Toggle cell`,
        thumbnail: "assets/lightsout_thumbnail.png",
        path: "assets/lightsout/game.html",
        width: 640,
        height: 640,
    },
    slimevolley: {
        title: "Slime Volley",
        quality: "cyan",
        description: `A classic RL environment originally by an unknown author and popularized by David Ha (hardmaru). This version contributed by Joao Abrantes.

Controls: A/D or Left/Right, W/Up/Space to jump

Observations: 1D vector (continuous)
Actions: Multidiscrete. Move, jump`,
        thumbnail: "assets/slimevolley_thumbnail.png",
        path: "assets/slimevolley/game.html",
        width: 1200,
        height: 500,
    },
    blastar: {
        title: "Blastar",
        quality: "cyan",
        description: `A fast version of Elon Musk's video game. By Daniel Addis.

Shoot the ship. Sometimes it shoots you. Instantly. Yes, that's how it works. Try getting closer.

Controls:
    Move: WASD or Arrow keys
    Fire: Space

Observations: 1d game state vector (continuous)
Actions: Discrete. Move, Shoot`,
        thumbnail: "assets/blastar_thumbnail.png",
        path: "assets/blastar/game.html",
        width: 640,
        height: 480,
    },
    asteroids: {
        title: "Asteroids",
        quality: "cyan",
        description: `A fast asteroids-style shooter. Destroy rocks without getting hit.

Controls: WASD or Arrow keys, Space to fire
Observations: 1D state (continuous)
Actions: Discrete. Move, fire`,
        thumbnail: "assets/asteroids_thumbnail.png",
        path: "assets/asteroids/game.html",
        width: 500,
        height: 500,
    },
    drmario: {
        title: "Dr. Mario",
        quality: "cyan",
        description: `Clear viruses by matching colored pills.

Controls: A/D move, W rotate, S soft drop
Observations: Board state (continuous)
Actions: Discrete`,
        thumbnail: "assets/drmario_thumbnail.png",
        path: "assets/drmario/game.html",
        width: 256,
        height: 512,
    },
    dino: {
        title: "Dino",
        quality: "cyan",
        description: `Chrome dinosaur runner. Jump and duck obstacles.

Controls: Up/W to jump, Down/S to duck
Observations: 1D state (continuous)
Actions: Discrete. Jump, duck`,
        thumbnail: "assets/dino_thumbnail.png",
        path: "assets/dino/game.html",
        width: 800,
        height: 400,
    },
    freeway: {
        title: "Freeway",
        quality: "cyan",
        description: `A fast version of the classic Atari game. By Hadrien Crassous.

Score points by crossing the road.

Controls: Up/Down or W/S to move

Observations: 1d vector (continuous)
Actions: Discrete. Move up/down`,
        thumbnail: "assets/freeway_thumbnail.png",
        path: "assets/freeway/game.html",
        width: 1216,
        height: 720,
    },
    rware: {
        title: "RWare",
        quality: "cyan",
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
        width: 1280,
        height: 640,
    },
    trash_pickup: {
        title: "Trash Pickup",
        quality: "cyan",
        description: `Collect trash, put it in the bin. By Xander.

Controls: Move with WASD or Arrow keys
Observations: 3D crop of nearby tiles (one-hot)
Actions: Discrete. Move`,
        thumbnail: "assets/trash_pickup_thumbnail.png",
        path: "assets/trash_pickup/game.html",
        width: 800,
        height: 860,
    },
    connect4: {
        title: "Connect4",
        quality: "cyan",
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
    docking: {
        title: "Docking",
        quality: "cyan",
        description: `A simple ship docking simulator. By thealokverse.

Controls: W/A/S/D

Observations: 1D state (continuous)
Actions: Discrete control.`,
        thumbnail: "assets/docking_thumbnail.png",
        path: "assets/docking/game.html",
        width: 960,
        height: 720,
    },
    target: {
        title: "Target",
        quality: "cyan",
        description: `Commented reference multiagent environment for new developers. Feed the puffer a star on GitHub to help us for free! By Joseph Suarez.

Observations: distance to all stars and other agents, own heading, reward, and position. Continuous vector.
Actions: Multidiscrete: acceleration x and y.`,
        thumbnail: "assets/target_thumbnail.png",
        path: "assets/target/game.html",
        width: 1080,
        height: 720,
    },
    minimal: {
        title: "Minimal",
        quality: "cyan",
        description: `Sample multiagent coordination env. Agents collect matching targets. By Joseph Suarez.

Eight puffers, eight targets, four types. Touch the matching target.

Observations: Own heading/speed plus relative pose of all agents and targets
Actions: Multidiscrete. Turn, throttle`,
        thumbnail: "assets/minimal_thumbnail.png",
        path: "assets/minimal/game.html",
        width: 1080,
        height: 720,
    },
    double_pendulum: {
        title: "Double Pendulum",
        quality: "cyan",
        description: `Balance a double inverted pendulum.

Controls: Left/Right
Observations: 1D state (continuous)
Actions: Discrete / continuous force`,
        thumbnail: "assets/double_pendulum_thumbnail.png",
        path: "assets/double_pendulum/game.html",
        width: 800,
        height: 420,
    },
    whackamole: {
        title: "Whack-a-Puffer",
        quality: "cyan",
        description: `Whack the puffer when it pops up.

Controls: Click or number keys
Observations: 1D state (continuous)
Actions: Discrete`,
        thumbnail: "assets/whackamole_thumbnail.png",
        path: "assets/whackamole/game.html",
        width: 640,
        height: 640,
    },
    flappy: {
        title: "Flappy",
        quality: "cyan",
        description: `Flappy Bird. Flap through the pipes.

Trained 5.0 baseline.

Controls: Space / W / Up to flap
Observations: 1D state (continuous)
Actions: Discrete. Flap / noop`,
        thumbnail: "assets/flappy_thumbnail.png",
        path: "assets/flappy/game.html",
        width: 420,
        height: 640,
    },
    space_invaders: {
        title: "Space Invaders",
        quality: "cyan",
        description: `Classic 5x11 invader formation. Three lives.

Trained 5.0 baseline.

Controls: A/D or Left/Right, Space to fire
Observations: 1D game state (continuous)
Actions: Discrete. Move, fire`,
        thumbnail: "assets/space_invaders_thumbnail.png",
        path: "assets/space_invaders/game.html",
        width: 600,
        height: 480,
    },
    click: {
        title: "Click",
        quality: "cyan",
        description: `Move a cursor and click targets as they appear. Misclicks are penalized.

Trained 5.0 baseline.

Controls: Mouse move + click
Observations: Cursor and target features
Actions: Multidiscrete. Move, click`,
        thumbnail: "assets/click_thumbnail.png",
        path: "assets/click/game.html",
        width: 800,
        height: 600,
    },
    bat: {
        title: "Bat",
        quality: "cyan",
        description: `Echolocation foraging. Steer a bat from FFT ear reflections.

Trained 5.0 baseline.

Controls: A/D turn, W/S thrust
Observations: Frequency bins + pose (continuous)
Actions: Multidiscrete. Turn, thrust, chirp`,
        thumbnail: "assets/bat_thumbnail.png",
        path: "assets/bat/game.html",
        width: 1024,
        height: 640,
    },
    pathfinder: {
        title: "Pathfinder",
        quality: "cyan",
        description: `6x6 fog-of-war maze. Discover walls and reach the hidden goal.

Trained 5.0 baseline.

Controls: WASD or Arrow keys
Observations: Known wall edges + position
Actions: Discrete. Move`,
        thumbnail: "assets/pathfinder_thumbnail.png",
        path: "assets/pathfinder/game.html",
        width: 844,
        height: 596,
    },
    boss_fight: {
        title: "Boss Fight",
        quality: "cyan",
        description: `Dodge AOE and hit a stationary boss.

Trained 5.0 baseline.

Controls: WASD move, Space dodge, J attack
Observations: 1D combat state
Actions: Discrete`,
        thumbnail: "assets/boss_fight_thumbnail.png",
        path: "assets/boss_fight/game.html",
        width: 720,
        height: 720,
    },
    backgammon: {
        title: "Backgammon",
        quality: "cyan",
        description: `Standard backgammon against a scripted opponent.

Trained 5.0 baseline.

Controls: Click a legal checker / point
Observations: Board, bar, dice
Actions: Discrete. Source and die`,
        thumbnail: "assets/backgammon_thumbnail.png",
        path: "assets/backgammon/game.html",
        width: 1000,
        height: 640,
    },
    chain_reaction: {
        title: "Chain Reaction",
        quality: "cyan",
        description: `Orbs fill cells and explode into neighbors. Two-player.

Trained 5.0 baseline.

Controls: Click a cell
Observations: Board state
Actions: Discrete. Cell`,
        thumbnail: "assets/chain_reaction_thumbnail.png",
        path: "assets/chain_reaction/game.html",
        width: 1020,
        height: 900,
    },
    ants: {
        title: "Ants",
        quality: "cyan",
        description: `Two colonies forage with pheromones and a vision cone.

Trained 5.0 baseline.

Controls: V vision, P pheromones
Observations: Local food / pheromone features
Actions: Discrete. Turn, move`,
        thumbnail: "assets/ants_thumbnail.png",
        path: "assets/ants/game.html",
        width: 1280,
        height: 720,
    },
    soccer: {
        title: "Soccer",
        quality: "cyan",
        description: `5v5 physics soccer. Port of the Puffer soccer env.

Controls: WASD or Arrow keys
Observations: Ball, teammates, opponents
Actions: Multidiscrete per player`,
        thumbnail: "assets/soccer_thumbnail.png",
        path: "assets/soccer/game.html",
        width: 603,
        height: 339,
    },
    tron: {
        title: "Tron",
        quality: "cyan",
        description: `Light-cycle self-play on a 24x17 grid. By uoRetr0.

Two riders leave walls; last one alive wins. Trained via self-play; this demo races two policies.

Observations: Board trails, local crop, territory
Actions: Discrete. Left, straight, right`,
        thumbnail: "assets/tron_thumbnail.png",
        path: "assets/tron/game.html",
        width: 864,
        height: 612,
    },
    guerrillacheckers: {
        title: "Guerrilla Checkers",
        quality: "cyan",
        description: `Asymmetric Checkers / Go hybrid. Guerrilla stones vs COIN.

Controls: Click a piece, then a destination
Observations: Dual boards + side to move
Actions: Discrete. Place or step`,
        thumbnail: "assets/guerrillacheckers_thumbnail.png",
        path: "assets/guerrillacheckers/game.html",
        width: 576,
        height: 624,
    },
    mazing_contest: {
        title: "Mazing Contest",
        quality: "cyan",
        description: `Build walls and thunderclaps, then a runner has to cross.

Trained 5.0 baseline.

Controls: Click to place
Observations: Grid + build budget
Actions: Discrete. Cell / tower type`,
        thumbnail: "assets/mazing_contest_thumbnail.png",
        path: "assets/mazing_contest/game.html",
        width: 500,
        height: 633,
    },
    clifford: {
        title: "Clifford",
        quality: "cyan",
        description: `Synthesize a Clifford circuit. Tableau is the observation.

Trained 5.0 net; default difficulty=10 / goal_bonus=0 does not solve yet.

Controls: Number keys pick a gate
Observations: 12x12 tableau
Actions: Discrete. Gate`,
        thumbnail: "assets/clifford_thumbnail.png",
        path: "assets/clifford/game.html",
        width: 480,
        height: 568,
    },
    affine_lock: {
        title: "Affine Lock",
        quality: "cyan",
        description: `Match a 16-bit target with reversible bit transforms.

Trained 5.0 baseline.

Controls: Number keys 1-8
Observations: Current and target bits
Actions: Discrete. Transform`,
        thumbnail: "assets/affine_lock_thumbnail.png",
        path: "assets/affine_lock/game.html",
        width: 780,
        height: 360,
    },
}

const toy = {
    squared: {
        title: "Squared",
        quality: "cyan",
        description: `Commented reference environment. By Joseph Suarez.

Go to the red square.

Controls: WASD or Arrow keys

Observations: 2D tile grid (discrete)
Actions: Discrete. Up/Down/Left/Right`,
        thumbnail: "assets/squared_thumbnail.png",
        path: "assets/squared/game.html",
        width: 704,
        height: 704,
    },
    memory: {
        title: "Memory",
        quality: "cyan",
        description: `A short-horizon memory / recall task.

Controls: A/D or Left/Right
Observations: 1D state
Actions: Discrete`,
        thumbnail: "assets/memory_thumbnail.png",
        path: "assets/memory/game.html",
        width: 960,
        height: 480,
    },
    tmaze: {
        title: "T-Maze",
        quality: "cyan",
        description: `A T-maze memory task.

Controls: A/D or Left/Right
Observations: Discrete position
Actions: Discrete`,
        thumbnail: "assets/tmaze_thumbnail.png",
        path: "assets/tmaze/game.html",
        width: 1024,
        height: 320,
    },
    squared_continuous: {
        title: "Squared Continuous",
        quality: "cyan",
        description: `Go to the red square with continuous movement.

Controls: WASD or Arrow keys
Observations: Local tile crop
Actions: Continuous. Move`,
        thumbnail: "assets/squared_continuous_thumbnail.png",
        path: "assets/squared_continuous/game.html",
        width: 704,
        height: 704,
    },
    template: {
        title: "Template",
        quality: "cyan",
        description: `Commented template for your own environments. By Joseph Suarez.

Go to the red square.

Controls: A/D or Left/Right

Observations: 1 if the goal is to the right, -1 if to the left
Actions: Discrete. Left/Right`,
        thumbnail: "assets/template_thumbnail.png",
        path: "assets/template/game.html",
        width: 1080,
        height: 720,
    },
    chain_mdp: {
        title: "Chain MDP",
        quality: "cyan",
        description: `A linear chain MDP used as a credit-assignment test.

Controls: A/D or Left/Right
Observations: Discrete position
Actions: Discrete. Left/Right`,
        thumbnail: "assets/chain_mdp_thumbnail.png",
        path: "assets/chain_mdp/game.html",
        width: 1024,
        height: 40,
    },
    onestateworld: {
        title: "One State World",
        quality: "cyan",
        description: `A one-state MDP used as a sanity-check environment.

Controls: A/D or Left/Right
Observations: Dummy discrete obs
Actions: Discrete. Left/Right`,
        thumbnail: "assets/onestateworld_thumbnail.png",
        path: "assets/onestateworld/game.html",
        width: 320,
        height: 320,
    },
}

const wip = {
    boids: {
        title: "Boids",
        quality: "cyan",
        description: `Flocking agents. Unfinished 5.0 port.

Controls: WASD or Arrow keys
Observations: Nearby boid features (continuous)
Actions: Discrete. Steer`,
        thumbnail: "assets/boids_thumbnail.png",
        path: "assets/boids/game.html",
        width: 1080,
        height: 720,
    },
    scape: {
        title: "Scape",
        quality: "cyan",
        description: `A 3D traversal environment. Unfinished.

Controls: WASD or Arrow keys
Observations: 1D state (continuous)
Actions: Discrete`,
        thumbnail: "assets/scape_thumbnail.png",
        path: "assets/scape/game.html",
        width: 1080,
        height: 720,
    },
    impulse_wars: {
        title: "Impulse Wars",
        quality: "cyan",
        description: `A top-down 2D physics-based shooter, based on Retrograde Arena. By Andrew LeFevre.

Use weapons and physics to push your opponents into a red death walls to kill them. Yellow walls are bouncy, blue walls are nothing special.

Pickup green weapon tiles to switch weapons. Movement is slow, but you can use recoil to move faster, dodge, and more, but it must be managed carefully.

The white ring inside your player is an energy meter, you can use it to brake or to charge bursts, a devastating explosion that can push players and projectiles away. If your burst touches a solid wall it'll push you away from the wall.

This game is best played with a controller, but mouse and keyboard works.

Controls: LEFT CONTROL to toggle human play, NOT shift like the other environments.
    Move: WASD or left stick on controller
    Aim: Mouse or right stick on controller
    Shoot/charge shot: Left click or bottom right trigger on controller
    Burst/charge burst: Right click or top right trigger on controller
    Brake: Space or bottom left trigger on controller
Observations: 2D crop of nearby tiles (discrete), 1D vector of nearby entities and player data (continuous)
Actions: Multidiscrete (move, aim, shoot, burst)`,
        thumbnail: "assets/impulse_wars_thumbnail.png",
        path: "assets/impulse_wars/game.html",
        width: 1280,
        height: 720,
    },
    tactics: {
        title: "Tactics",
        quality: "cyan",
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
    tcg: {
        title: "TCG",
        quality: "cyan",
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
    cpr: {
        title: "Common Pool Resource",
        quality: "cyan",
        description: `Common pool resource, also known as tragedy of the commons. By MX2000.

Collect resources, but not too many, or they won't grow back.

Controls: WASD or Arrow keys

Observations: 2D crop of local tiles (discrete)
Actions: Discrete. Up/Down/Left/Right`,
        thumbnail: "assets/cpr_thumbnail.png",
        path: "assets/cpr/game.html",
        width: 1024,
        height: 1024,
    },
}
