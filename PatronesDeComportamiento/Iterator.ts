//Iterator: Proporciona una forma de acceder a los elementos de un objeto agregado sin exponer su representación subyacente.

//Contexto: Navegar a través de una colección de perfiles de usuario de una red social.
// Iterator Interface
// Iterator Interface
interface Iterator<T> {
    next(): T | null;
    hasNext(): boolean;
}

// Aggregate Interface
interface Aggregate {
    createIterator(): Iterator<Profile>;
}

// Concrete Class representing a Profile
class Profile {
    constructor(public id: number, public name: string) {}
}

// Concrete Aggregate
class ProfileCollection implements Aggregate {
    private profiles: Profile[] = [];

    constructor(profiles: Profile[]) {
        this.profiles = profiles;
    }

    public createIterator(): Iterator<Profile> {
        return new ProfileIterator(this);
    }

    public get length(): number {
        return this.profiles.length;
    }

    public get(index: number): Profile | null {
        return index < this.profiles.length ? this.profiles[index] : null;
    }
}

// Concrete Iterator
class ProfileIterator implements Iterator<Profile> {
    private collection: ProfileCollection;
    private position: number = 0;

    constructor(collection: ProfileCollection) {
        this.collection = collection;
    }

    public next(): Profile | null {
        const result = this.collection.get(this.position);
        this.position++;
        return result;
    }

    public hasNext(): boolean {
        return this.position < this.collection.length;
    }
}

// Uso del Iterator
const profiles = [
    new Profile(1, "Alice"),
    new Profile(2, "Bob"),
    new Profile(3, "Charlie")
];

const collection = new ProfileCollection(profiles);
const iterator = collection.createIterator();

while (iterator.hasNext()) {
    const profile = iterator.next();
    console.log(`Perfil: ${profile?.id}, Nombre: ${profile?.name}`);
}
