//Command: Convierte una solicitud en un objeto independiente que contiene toda la información sobre la solicitud.

//Contexto: Implementar un sistema de comandos para realizar operaciones en un editor de texto, como copiar y pegar texto.
// Command Interface
interface Command {
    execute(): void;
}

// Receiver
class TextEditor {
    public text: string = "";

    public copy() {
        console.log("Text copied!");
    }

    public paste() {
        this.text += "pasted ";
        console.log("Text pasted!");
    }
}

// Concrete Commands
class CopyCommand implements Command {
    constructor(private editor: TextEditor) {}

    execute(): void {
        this.editor.copy();
    }
}

class PasteCommand implements Command {
    constructor(private editor: TextEditor) {}

    execute(): void {
        this.editor.paste();
    }
}

// Invoker
class CommandManager {
    private commands: Command[] = [];

    public storeAndExecute(command: Command) {
        this.commands.push(command);
        command.execute();
    }
}

// Uso
const editor = new TextEditor();
const copyCommand = new CopyCommand(editor);
const pasteCommand = new PasteCommand(editor);
const manager = new CommandManager();

manager.storeAndExecute(copyCommand);
manager.storeAndExecute(pasteCommand);
console.log(editor.text); // "pasted "
