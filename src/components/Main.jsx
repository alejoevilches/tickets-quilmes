/* eslint-disable react/prop-types */
import "./Main.css"
import { useStage } from "../hooks/useStage"
import { BARRIOS, AREAS } from "../logic/consts"

function SubmitModal({handleClick}){
    return (
        <div className="mainMessage">
            <h2 id="submitMessage">Tu reclamo ha sido enviado con exito! Nos contactaremos a la brevedad para solicitarte mas informacion de ser necesario.</h2>
            <p className="button" onClick={handleClick}>Volver a empezar</p>
        </div>
    )
}

function MainMessage({handleClick}){
    return( 
            <div className="mainMessage">
                <h1>Bienvenidx a la central de reclamos de nuestra Secretaría</h1>
                <h3>Podes iniciar reclamos y sugerencias para cualquiera de nuestras areas</h3>
                <p className="button" onClick={handleClick}>Iniciar reclamo</p>
            </div>
        )
}

function MainInput({handleClick}){
    return (
        <div className="mainMessage">
            <div className="messageTitle">
                <h2>Completá el formulario para cargar tu reclamo</h2>
                <img className="closeButton" src="public/images/close.png" alt="Close icon" onClick={handleClick}/>
            </div>
            <form action="">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" required/>
                <label htmlFor="address">Direccion</label>
                <input type="text" id="address" name="address" required/>
                <label htmlFor="tel">Telefono</label>
                <input type="number" id="tel" name="tel"/>
                <label htmlFor="barrio">Seleccione su barrio</label>
                <select name="barrio" id="barrio">
                    {BARRIOS.map(barrio=>{
                        return (
                            <option key={barrio.id} value={barrio.id}>{barrio.name}</option>
                        )
                    })}
                </select>
                <label htmlFor="area">Seleccione el área a la que se dirige el reclamo</label>
                    <select name="area" id="area">
                        {AREAS.map(area=>{
                            return (
                                <option key={area.id} value={area.id}>{area.name}</option>
                            )
                        })}
                    </select>
                <label htmlFor="message">Ingresá tu reclamo</label>
                <textarea name="message" id="message" cols="20" rows="10" required></textarea>
                <input type="submit" id="submit" value="Enviar" className="messageButton button" onClick={handleClick}/>
            </form>
        </div>
    )
}

export function Main(){
    const {stage, handleClick}=useStage();
    console.log(stage);
    return (
        <main>
            {stage=="message" && <MainMessage handleClick={handleClick} />}
            {stage=="input" && <MainInput handleClick={handleClick}/>}
            {stage=="submit" && <SubmitModal handleClick={handleClick}/>}
        </main>
    )
}