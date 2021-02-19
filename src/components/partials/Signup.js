import { useState } from 'react'

const Signup = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
//TODO add form password verification

const handleSubmit = (e) =>{
    e.preventDefault()

    console.log('Sending up user data', {name, email, password})
}

    return (
        <section>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-elem">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" placeholder="Display name" onChange={ e => setName(e.target.value)} />
                </div>
                <div className="form-elem">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="Email" placeholder="Your Email" onChange={ e => setEmail(e.target.value)} />
                </div>
                <div className="form-elem">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" placeholder="Your password" onChange={ e => setPassword(e.target.value)} />
                </div>
                <input type="submit" value="Sign up" />
            </form>
        </section>
    )
}

export default Signup