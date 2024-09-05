import UserCard from "@/components/UserCard";

//Funcion de backend
async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
}

//Componente que se renderiza (RSC = React Server Component)
async function HomePage() {
    const users = await fetchUsers();

    return (
        <div>
            {users.map((user) => (
                <UserCard user={user} key={user.id}/>
            ))}
        </div>
    )
}

export default HomePage