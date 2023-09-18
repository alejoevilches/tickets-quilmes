/* eslint-disable react/prop-types */
import "./Main.css"
import { useStage } from "../hooks/useStage"
import { BARRIOS, AREAS } from "../logic/consts"


function MainMessage({handleClick}){
    return( 
            <div className="mainMessage">
                <h1>Bienvenido a la central de reclamos de nuestra Secretaría</h1>
                <h3>Podes iniciar reclamos y sugerencias para cualquiera de nuestras areas</h3>
                <div className="button">
                    <a href="" onClick={handleClick}>Iniciar reclamo</a>
                 </div>
            </div>
        )
}

function MainInput({handleClick}){
    return (
        <div className="mainMessage">
            <h2>Completá el formulario para cargar tu reclamo</h2>
            <form action="">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" required/>
                <label htmlFor="address">Direccion</label>
                <input type="text" id="address" required/>
                <label htmlFor="tel">Telefono</label>
                <input type="number" id="tel" />
                <label htmlFor="barrio">Seleccione su barrio</label>
                <select name="barrio" id="barrio">
                    {BARRIOS.map(barrio=>{
                        return (
                            <option key={barrio.id} value={barrio.id}>{barrio.name}</option>
                        )
                    })}
                </select>
                <label htmlFor="area">Seleccione el área a la que se dirige el reclamo</label>
                    <select name="barrio" id="barrio">
                        {AREAS.map(area=>{
                            return (
                                <option key={area.id} value={area.id}>{area.name}</option>
                            )
                        })}
                    </select>
                <label htmlFor="message">Ingresá tu reclamo</label>
                <input type="text" id="message" />
            </form>
        </div>
    )
}

export function Main(){
    const {stage, handleClick}=useStage();
    return (
        <main>
            {stage=="message" ? <MainMessage handleClick={handleClick} /> : <MainInput />}
        </main>
    )
}