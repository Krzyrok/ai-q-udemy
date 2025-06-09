import { Employee } from './employee.js';

const employees: Employee[] = [
  {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA',
      state: 'NY',
      zip: 1001,
    },
    workAddress: {
      city: 'New York',
      country: 'USA',
      state: 'NY',
      zip: 1001,
    },
    salary: 1000,
    phone: '1010101',
    email: 'email@example.com',
  },
  {
    name: 'Jane',
    age: 25,
    address: {
      city: 'New York',
      country: 'USA',
      state: 'NY',
      zip: 1001,
    },
    workAddress: {
      city: 'New York',
      country: 'USA',
      state: 'NY',
      zip: 1001,
    },
    salary: 2000,
    phone: '1010101',
    email: 'email@example.com',
  },
  {
    name: 'Jack',
    age: 20,
    address: {
      city: 'New York',
      country: 'USA',
      state: 'NY',
      zip: 1001,
    },
    workAddress: {
      city: 'New York',
      country: 'USA',
      state: 'NY',
      zip: 1001,
    },
    salary: 3000,
    phone: '1010101',
    email: 'email@example.com',
  },
  {
    name: 'Jill',
    age: 35,
    address: {
      city: 'New York',
      country: 'USA',
      state: 'NY',
      zip: 1001,
    },
    workAddress: {
      city: 'New York',
      country: 'USA',
      state: 'NY',
      zip: 1001,
    },
    salary: 4000,
    phone: '1010101',
    email: 'email@example.com',
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

function getAllEmployeesNames(): string[] {
  return employees.map((employee) => employee.name);
}

function getMaximumSalary(): number {
  return employees.reduce(
    (maxSalary, employee) => Math.max(maxSalary, employee.salary),
    0
  );
}

function getAverageSalary(): number {
  return (
    employees.reduce((sum, employee) => sum + employee.salary, 0) /
    employees.length
  );
}
