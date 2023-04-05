import { useState } from "react";

function Logica(steps){
    const[passoatual,setPassoAtual] = useState(0)
    function changePass(i,e){
       if(e) e.preventDefault()
        if(i< 0 || i >= steps.length)return
        setPassoAtual(i)
    }
    return{
        passoatual,
        PassoComponents:steps[passoatual],
        changePass,
        isLaststep:passoatual +1 ===steps.length ? true : false,
        isFirststep:passoatual === 0 ? true : false,
    }
}
export default Logica