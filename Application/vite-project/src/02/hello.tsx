
interface Props {
    lang?: string //facultatif
    name: string
   
}

export default function hello(p: Props){
    //return {lang, name} = p

    if(p.lang == "en"){
        return(
            <div>
                Welcome <strong> {p.name} </strong>
            </div>
        )
    }

    return(
        <div>
            Bienvenue <strong> {p.name} </strong>
        </div>
    )

}