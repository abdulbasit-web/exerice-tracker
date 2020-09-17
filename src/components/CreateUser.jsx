import React, {useState} from 'react'

function CreateUser() {
  const [username, setUsername] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(username)
    setUsername('')
  }
  return (
    <div className='container mt-5'>
      <h3>Create New User</h3>
      <form action='' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            className='form-control'
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>
            Create User
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateUser