import {useEffect, useState} from 'react';
import * as axios  from 'axios';



function App() {

  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [selector, setSelector] = useState("");
  const [date, setDate] = useState("");
  const [affectation, setAffectation] = useState("");
  const [entre, setEntre] = useState("");
  const [sortie, setSortie] = useState("");
  const [result, setResult] = useState("");
  const [searchapi, setSearchapi] = useState("");
    
  useEffect(() => {
    loadData();
  }, []);


    const loadData = async () => {
      const response = await axios.get('http://localhost:3004/users');
      console.log(response.data);
      setUsers(response.data)
    
    }

    const Adduser = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3004/users', {
        id, selector, date, affectation, entre, sortie, result
      }).then (() => {
         setId(""); setSelector("");setDate("");setAffectation("");setEntre("");setSortie("");setResult("");
      }).catch((err)=> {
        console.log(err);
      })
      setTimeout(() => {
        loadData();
      },500)
    }
    const deleteUser = (id) => {
     axios.delete(`http://localhost:3004/users/${id}`);
     setTimeout(() => {
      loadData();
    },500)
    }
   
    
    
  return (
    <div className="App">
        <select  class="btn btn" value={selector}  onChange={e => setSelector(e.target.value)}  >
         <option value="">Selector</option>
        <option value="range">Range</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
        <option value="mercedes">Mercedes</option>
        <option value="porsh">Porsh</option>
        <option value="bmw">Bmw</option>


         </select>
        <input placeholder='date' type="date" value={date} onChange={e => setDate(e.target.value)}/>
        <input placeholder='affectation' value={affectation} onChange={e => setAffectation(e.target.value)}/>
        <input placeholder='entre' value={entre} onChange={e => setEntre(e.target.value)}/>
        <input placeholder='sortie' value={sortie} onChange={e => setSortie(e.target.value)}/>
        <input placeholder='result' value={result} onChange={e => setResult(e.target.value)}/>

      <button onClick={Adduser} type="button" class="btn btn-primary my-4 m-2">Add</button>

      <div>
        <input placeholder='Search'
        type='text'
        className='search'
   
        onChange={(e) => setSearchapi(e.target.value)}
        />
      </div>

      <table>

        <thead>

        
            <tr>

                  <th>ID</th>
                <th>Seletor</th>
                <th>Date</th>
                <th>Affectation</th>
                <th>Entre</th>
                <th>Sortie</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            {users.filter(e => 
            e.affectation.toLowerCase().includes(searchapi)).map(e => (


            <tr>

  <td><button onClick={() => {deleteUser(e.id)}}
   type="button" class="btn btn-outline-danger btn-sm ">
    Delete
    </button> ID : {e.id}</td>
  

       <td>{e.selector}</td>

       <td> {e.date}</td>
       <td>{e.affectation}</td> 
       <td>{e.entre}</td> 
       <td>{e.sortie}</td> 
       <td>{e.result}</td> 


            </tr>
             ))}
        </tbody>
    </table>     

      </div>
    
  );
}

export default App;


