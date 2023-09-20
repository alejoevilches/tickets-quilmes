import { useState } from "react";
import { handleForm } from "../logic/handleForm";

export function useStage(){
    const [stage, setStage]=useState("message");
    const handleClick=(e)=>{
        e.preventDefault();
        if (e.target.id=="submit"){
            handleForm(e)
            return setStage("submit")
        }
        setStage(stage === "message" ? "input" : "message");
    }
    return {handleClick, stage, setStage}
}