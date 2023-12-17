//Memento: Permite guardar y restaurar el estado previo de un objeto sin revelar los detalles de su implementación.

//Contexto: Permitir guardar y restaurar el estado anterior de un editor de texto.
// Memento
class EditorMemento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }
}

// Originator
class Editor {
    private content: string = "";

    public setContent(content: string) {
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }

    public save(): EditorMemento {
        return new EditorMemento(this.content);
    }

    public restore(memento: EditorMemento) {
        this.content = memento.getState();
    }
}

// Uso
const editor = new Editor();
const caretaker = [];

editor.setContent("First state");
caretaker.push(editor.save());

editor.setContent("Second state");
caretaker.push(editor.save());

editor.setContent("Third state");

// Restore to second state
editor.restore(caretaker[1]);
console.log(editor.getContent()); // Output: Second state
