//Mediator: Reduce el acoplamiento entre clases al ser la única clase que tiene información detallada sobre sus métodos y mantiene el seguimiento de cómo están interconectadas y cómo interactúan.

//Contexto: Coordinar la comunicación entre diferentes componentes en una aplicación de chat.
// Mediator Interface
interface ChatMediator {
    sendMessage(msg: string, user: User): void;
    addUser(user: User): void;
}

// Concrete Mediator
class ChatRoom implements ChatMediator {
    private users: User[] = [];

    public sendMessage(msg: string, user: User) {
        for (let u of this.users) {
            // message should not be received by the user sending it
            if (u !== user) {
                u.receive(msg);
            }
        }
    }

    public addUser(user: User) {
        this.users.push(user);
    }
}

// Colleague
class User {
    constructor(private name: string, private chatMediator: ChatMediator) {}

    public send(msg: string) {
        console.log(this.name + ": Sending Message=" + msg);
        this.chatMediator.sendMessage(msg, this);
    }

    public receive(msg: string) {
        console.log(this.name + ": Received Message:" + msg);
    }
}

// Uso
const mediator: ChatMediator = new ChatRoom();

const john = new User("John", mediator);
const jane = new User("Jane", mediator);

mediator.addUser(john);
mediator.addUser(jane);

john.send("Hi there!");
jane.send("Hey!");
