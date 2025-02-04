//App01.tsx
import './style.css'
import logo from './react.jpeg'

//Mon premier composant React 
export default function App01(){
    return (
        <div className="t01">
            <div>
                <img src={logo} alt="" width={500} />
            </div>
            Mon premier Composant React
        </div>
    )
}
