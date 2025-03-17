
import './App.css';
import {useState} from "react";

function App() {
  const [teacher, setTeacher] = useState("");
  const [classAssigned, setClass] = useState("");
  const [gender, setGender] = useState("männlich")
  const [name, setName] = useState("")

  const displayData = document.getElementById("displayData");
  const submitForm = (event) =>{
      event.preventDefault();

      const data = document.createElement("div");
      data.className = "data";
      data.innerHTML =  `
      <p><strong>Klasse:</strong> ${classAssigned}</p>
      <p><strong>Lehrperson:</strong> ${teacher}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Geschlecht:</strong> ${gender}</p>
      <hr />
    `;

      displayData.append(data);

      setTeacher("")
      setClass("")
      setName("")
      setGender("männlich")


  }

  const handleChangeTeacher = (event) =>{
      setTeacher(event.target.value);
  }
    const handleChangeClass = (event) =>{
        setClass(event.target.value);
    }
    const handleChangeGender = (event) =>{
        setGender(event.target.value);
    }
    const handleChangeName = (event) =>{
      setName(event.target.value);
    }
  return (
    <div>
      <h1>Anmeldung Klasse Turnier</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="class">Klasse</label>
        <input
            name="class"
            type="text"
            value={classAssigned}
            onChange={handleChangeClass}
            placeholder="Schreibe etwas"
            required
        />
        <label htmlFor="teacher">Klasse Lehrperson</label>
        <input
            name="teacher"
            type="text"
            value={teacher}
            onChange={handleChangeTeacher}
            placeholder="Schreibe etwas"
            required
        />
        <label htmlFor="name">Name</label>
        <input
            name="name"
            type="text"
            value={name}
            onChange={handleChangeName}
            placeholder="Schreibe etwas"
            required
        />
        <div><h2>Geschlecht</h2>
        <label htmlFor="gender">männlich</label>
        <input
            name="gender"
            type="radio"
            value="männlich"
            onChange={handleChangeGender}
        />
        <label htmlFor="gender">weiblich</label>
        <input
            name="gender"
            type="radio"
            value="weiblich"
            onChange={handleChangeGender}
        />
        <label htmlFor="gender">divers</label>
        <input
            name="gender"
            type="radio"
            value="divers"
            onChange={handleChangeGender}
        />
        </div>
        <input
            type="submit"
            onSubmit={submitForm}
        />
      </form>
      <div id="displayData">
          <h2>Personen, die schon angemeldet sind</h2>
      </div>
    </div>
  );
}

export default App;
