import { Employee } from './employee';

const employees: Employee[] = [
  {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
    },
    workAddress: {
      street: '456 Main St',
      city: 'Anytown',
      state: 'CA',
    },
    workPhone: '123-456-7890',
    workEmail: 'john@example.com',
    salary: 100000,
  },
  {
    name: 'Jane',
    age: 25,
    address: {
      street: '789 Main St',
      city: 'Anytown',
      state: 'CA',
    },
    workAddress: {
      street: '101 Main St',
      city: 'Anytown',
      state: 'CA',
    },
    workPhone: '123-456-7890',
    workEmail: 'jane@example.com',
    salary: 100000,
  },
  {
    name: 'Jim',
    age: 35,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
    },
    workAddress: {
      street: '101 Main St',
      city: 'Anytown',
      state: 'CA',
    },
    workPhone: '123-456-7890',
    workEmail: 'jim@example.com',
    salary: 100000,
  },
  {
    name: 'Jill',
    age: 28,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
    },
    workAddress: {
      street: '101 Main St',
      city: 'Anytown',
      state: 'CA',
    },
    workPhone: '123-456-7890',
    workEmail: 'jill@example.com',
    salary: 100000,
  },
];

function findEmployeeByName(name: string): Employee | undefined {
  return employees.find((employee) => employee.name === name);
}

function getEmployeesWithSalaryGreaterThan(salary: number): Employee[] {
  return employees.filter((employee) => employee.salary > salary);
}

function getEmployeesWithSalaryGreaterThanAndAgeGreaterThan(
  salary: number,
  age: number
): Employee[] {
  return employees.filter(
    (employee) => employee.salary > salary && employee.age > age
  );
}

function getEmployeesNames(employees: Employee[]): string[] {
  return employees.map((employee) => employee.name);
}

function getMaximumSalary(employees: Employee[]): number {
  // use reduce to find the maximum salary
  return employees.reduce((max, employee) => {
    return Math.max(max, employee.salary);
  }, 0);
}

function getAverageSalary(employees: Employee[]): number {
  // use reduce to find the average salary
  return (
    employees.reduce((sum, employee) => sum + employee.salary, 0) /
    employees.length
  );
}
