
interface Props {
    name: string
    age: string
    phone_number: string
   
}

export default function student(props: Props){
    const{ name, age, phone_number} = props; 

    return(
        <div>
            Nom : <strong>{name}</strong>
            age : <strong>{age}</strong>
            Telephone : <strong>{phone_number}</strong>
        </div>
    )

}