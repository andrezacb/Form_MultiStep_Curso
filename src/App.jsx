import { useState } from 'react'
import Usuario from './componentes/Usuario'
import Endereço from './componentes/Endereço';
import Curso from './componentes/Curso'
import Confirmaçao from './componentes/Confirmação';
import Concluido from './componentes/Concluido';
import Logica from './hooks/Logica';
import {GrFormNextLink,GrFormPreviousLink} from 'react-icons/gr'
import {BsSendCheck} from 'react-icons/bs'
import Etapas from './componentes/Etapas'
import './App.css'
const formTemplate={
  nome:"",
  email:"",
  tel:"",
  endereço:{},
  aplicação:"",
  curso:"",
}
function App() {
  const[date,setDate]=useState(formTemplate)
  const upDateFielHandler=(key,value) =>{
    setDate((prev)=>{
      return{...prev,[key]:value}
    })
  }


  const FormComponents=[<Usuario date={date} upDateFielHandler={upDateFielHandler}/>,<Endereço date={date} />,<Curso date={date} upDateFielHandler={upDateFielHandler}/>,<Confirmaçao date={date} />]
  const{passoatual,PassoComponents,changePass, isFirststep, isLaststep}=Logica(FormComponents)
  const [enviado, setEnviado] = useState(false)
  function EnviadoHandler(){
    setEnviado(true)
  }
  return (
    <div className="App">
      <br />
      {enviado ?(
        <div>
          <Concluido/>
        </div>
      ) : (
      <div className="container">
        <form onSubmit={(e)=>changePass(passoatual + 1,e)}>
          <Etapas currentStep={passoatual}/>
          <div className="input-container">{PassoComponents}</div>
          <div className='actions'>
            {!isFirststep &&(
              <button type="button" onClick={()=>changePass(passoatual - 1)}>
              <GrFormPreviousLink/>
              <span>Voltar</span>
            </button>
            )}
            {!isLaststep?(
              <button type="submit">
              <GrFormNextLink/>
              <span>Proximo</span>
            </button>
            ):(
              <button type="button" onClick={EnviadoHandler}> 
              <BsSendCheck/>
              <span>Enviar</span>
            </button>
            )}
          </div>
        </form>
      </div>
  )}
   </div>
  )
}
export default App
