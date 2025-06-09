type Address = {
  city: string;
  country: string;
  state: string;
  zip: number;
};

// template literal type for emails:
type Email = `${string}@${string}.${string}`;

type Employee = {
  name: string;
  age: number;
  address: Address;
  workAddress: Address;
  salary: number;
  phone: string;
  email: Email;
};

const john: Employee = {
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
};
