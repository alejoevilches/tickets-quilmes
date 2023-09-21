import { useState } from "react";
import { handleForm } from "../logic/handleForm";

export function useStage(){
    const [stage, setStage]=useState("message");
    const handleClick=(e)=>{
        e.preventDefault();
        if (e.target.id=="submit"){
            const formValues=handleForm(e);
            if (
                formValues.name=="" ||
                formValues.address=="" ||
                formValues.tel=="" ||
                formValues.message==""
            ){
                alert("Debe completar todos los campos");
                return;
            }
            return setStage("submit")
        } else if (e.target.id=="admin"){
            setStage("admin")
            return stage;
        }
        setStage(stage === "message" ? "input" : "message");
    }
    return {handleClick, stage, setStage}
}