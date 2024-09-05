"use client"

//Componente de backend (RCC = React Client Component)
function UserCard({ user }) {
    return (
        <div>
            <h3>{user.username}</h3>
            <p>{user.phone}</p>
            <button onClick={() => {}}>Click</button>
        </div>
    )
}

export default UserCard