

interface Props {
    pays: string
    ville: string
}

export default function Capital(props: Props){

    return(
        <div>
            La capital de <strong>{props.pays}</strong> est <strong>{props.ville}</strong>.
        </div>

    )

}