//State: Permite a un objeto alterar su comportamiento cuando su estado interno cambia.

//Contexto: Implementar un reproductor de música que cambie su comportamiento según el estado en el que se encuentre (reproduciendo, pausado, detenido).
// State Interface
interface State {
    clickPlay(): void;
    clickStop(): void;
}

// Context
class MusicPlayer {
    private state: State;

    constructor() {
        this.state = new StoppedState(this);
    }

    public setState(state: State) {
        this.state = state;
    }

    public clickPlay() {
        this.state.clickPlay();
    }

    public clickStop() {
        this.state.clickStop();
    }
}

// Concrete States
class PlayingState implements State {
    constructor(private player: MusicPlayer) {}

    public clickPlay() {
        console.log("Music is already playing.");
    }

    public clickStop() {
        console.log("Music stopped.");
        this.player.setState(new StoppedState(this.player));
    }
}

class StoppedState implements State {
    constructor(private player: MusicPlayer) {}

    public clickPlay() {
        console.log("Music started playing.");
        this.player.setState(new PlayingState(this.player));
    }

    public clickStop() {
        console.log("Music is already stopped.");
    }
}

// Uso
const player = new MusicPlayer();
player.clickPlay(); // Music started playing.
player.clickStop(); // Music stopped.
