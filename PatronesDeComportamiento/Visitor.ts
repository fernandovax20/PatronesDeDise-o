//Visitor: Permite separar algoritmos de los objetos sobre los cuales operan.

//Contexto: Implementar un sistema de reportes para diferentes tipos de elementos de una estructura empresarial (Empleado, Departamento) sin alterar sus clases.
// Visitor Interface
interface Visitor {
    visitEmployee(employee: Employee): void;
    visitDepartment(department: Department): void;
}

// Element Interface
interface Element {
    accept(visitor: Visitor): void;
}

// Concrete Elements
class Employee implements Element {
    constructor(public name: string, public salary: number) {}

    accept(visitor: Visitor): void {
        visitor.visitEmployee(this);
    }
}

class Department implements Element {
    private employees: Employee[] = [];

    constructor(public name: string) {}

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    accept(visitor: Visitor): void {
        visitor.visitDepartment(this);
        for (const employee of this.employees) {
            employee.accept(visitor);
        }
    }
}

// Concrete Visitor
class ReportVisitor implements Visitor {
    visitEmployee(employee: Employee): void {
        console.log(`Employee: ${employee.name}, Salary: ${employee.salary}`);
    }

    visitDepartment(department: Department): void {
        console.log(`Department: ${department.name}`);
    }
}

// Uso
const sales = new Department("Sales");
sales.addEmployee(new Employee("Alice", 50000));
sales.addEmployee(new Employee("Bob", 40000));

const reportVisitor = new ReportVisitor();
sales.accept(reportVisitor);
