import { useState } from "react";

export function useStage(){
    const [stage, setStage]=useState("message");
    const handleClick=(e)=>{
        e.preventDefault();
        console.log(e)
        if (e.target.id=="submit"){
            return setStage("submit")
        }
        setStage(stage === "message" ? "input" : "message");
    }
    return {handleClick, stage, setStage}
}