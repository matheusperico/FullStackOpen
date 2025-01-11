import { useState } from "react";

const AddButton = ({ addNewPerson }) => {
  return (
    <div>
      <button type="submit" onClick={addNewPerson}>
        add
      </button>
    </div>
  );
};

const PersonForm = ({ handleNameChange, handleNumberChange, addNewPerson }) => {
  return (
    <form>
      <div>
        name: <input onChange={handleNameChange} />
      </div>
      <div>
        number: <input onChange={handleNumberChange} />
      </div>
      <AddButton addNewPerson={addNewPerson} />
    </form>
  );
};

const Filter = ({ handleFilterChange }) => {
  return (
    <div>
      filter shown with
      <input onChange={handleFilterChange} />
    </div>
  );
};

const Display = ({ persons }) => {
  return (
    <div>
      {persons.map((person, index) => (
        <p key={index}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addNewPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (!newName.trim() || !newNumber.trim()) {
      alert("Name and number cannot be empty.");
      return;
    }

    if (persons.some((person) => person.name === newName)) {
      console.log(persons.some((person) => person.name === newName));

      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(personObject));
    setNewName("");
  };

  const personsToShow = () => {
    console.log(filter);
    console.log(
      "validation",
      filter.trim() &&
        persons.some((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
    );

    if (
      filter.trim() &&
      persons.some((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    ) {
      return persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return persons;
    }
  };

  console.log(personsToShow());

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter handleFilterChange={handleFilterChange} />
        <h3>Add a new</h3>
      </div>
      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addNewPerson={addNewPerson}
      />
      <h3>Numbers</h3>
      <Display persons={personsToShow()} />
    </div>
  );
};

export default App;
