class Player {
    id: number;
    score: number = 0;
    balls: number = 0;
    ballScore: Array<number> = [null, null, null, null, null, null];

    constructor(id: number) {
        this.id = id;
    }

    ballHit() {
        let run = Math.floor(Math.random() * 7);
        this.ballScore[this.balls] = run;
        this.score = this.score + run;
        this.balls++;
    }

}

class Team {
    id: number;
    players: Array<Player> = [];
    score: number;
    currentPlayer: Player;

    constructor(id) {
        this.id = id;

        for(let i=0; i<10; i++) {
            this.players.push(new Player(i));
        }

        this.currentPlayer = this.players[0];
    }
}

class Game {

    teams: Array<Team> = [];
    currentTeam: Team;
    constructor(){
        this.teams.push(new Team(0));
        this.teams.push(new Team(1));

        this.currentTeam = this.teams[0];
    }
}

