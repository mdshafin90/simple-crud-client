import { Link } from 'react-router-dom';
import './App.css'

function App() {


  const handleAddUser = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user)

    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'Content-Type': "application/JSON"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('Users Added Successfully')
          form.reset();
        }
      })

  }

  

  return (
    <>
      <h1>Simple Crud Client</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name='name' required placeholder='Name' />
        <br />
        <input type="email" name="email" required placeholder='Email' />
        <br />
        <input type="submit" value='Add User' />
      </form>
      <Link to="/users">See Users</Link>
    </>
  )
}

export default App
