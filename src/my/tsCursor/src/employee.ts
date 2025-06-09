type Address = {
  street: string;
  city: string;
  state: string;
};

type Email = `${string}@${string}.${string}`;

type Employee = {
  name: string;
  age: number;
  address: Address;
  workAddress: Address;
  workPhone: string;
  workEmail: Email;
  salary: number;
};

const john: Employee = {
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
};
