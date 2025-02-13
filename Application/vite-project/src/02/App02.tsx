
import Capital from "./Capital";
import Hello from "./hello";
import Student from "./student";

export default function App02() {
    
    const capitales = (
        <div>
            <h1>Capitales</h1>
            <Capital pays="RCA" ville="Bangui"/>
            <Capital pays="Sénégal" ville="Dakar"/>
        </div>
    )

    const students = (
        <div>
            <h1>Etudiant</h1>
            <Student name="John" age="21" phone_number="0000000"/>
            <Student name="Jane" age="23" phone_number="1111111"/>
        </div>
    )

    const welcome = (
        <div>
            <h1>Welcome</h1>
            <Hello lang="fr" name="Kassima"/>
            <Hello lang="en" name="Gicquel"/>
            <Hello lang="es" name="Juverson"/>
        </div>
    )

    return(
        <div>
            {capitales}
            {students}
            {welcome}
        </div>
    )
}