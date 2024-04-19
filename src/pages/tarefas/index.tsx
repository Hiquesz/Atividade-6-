import { Link, useNavigate } from "react-router-dom";


export default function Tarefas() {
    const navigate = useNavigate()
    return (
        <>
        <h1 onClick={() => {
            navigate('/')
        }}>Tarefas</h1>
        <Link to ='/'>Ir para Home</Link>
        <p>1. Definir equipe</p>
        <p>2. Definir framework</p>
        <p>3. Criação do repositório</p>
        <p>4. Definição do escopo</p>
        </>
    )
}