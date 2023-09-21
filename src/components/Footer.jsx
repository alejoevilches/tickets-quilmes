import "./Footer.css"
import { useStage } from "../hooks/useStage"

export function Footer(){
    const {handleClick}=useStage();
    return (
        <footer>
            <p className="adminButton" id="admin" href="" onClick={handleClick}>Ver como administrador</p>
        </footer>
    )
}