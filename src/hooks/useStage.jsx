import { useState } from "react";

export function useStage(){
    const [stage, setStage]=useState("message");
    const handleClick=(e)=>{
        e.preventDefault();
        setStage(stage === "message" ? "input" : "message");
        console.log(stage)
    }
    return {handleClick, stage}
}