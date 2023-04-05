import {AiOutlineUser} from 'react-icons/ai'
import {FaMapMarkedAlt,FaAddressBook} from 'react-icons/fa'
import {FiSend} from 'react-icons/fi'
import './Etapas.css'
function Etapas({currentStep}){
    return(
        <div className="steps">
        <div className="step active">
            <AiOutlineUser/>
            <p>Identificação</p>
        </div>
        <div className={`step ${currentStep >= 1 ? "active": ""}`}>
            <FaMapMarkedAlt/>
            <p>Endereço</p>
        </div>
        <div className={`step ${currentStep >=2 ? "active": ""}`}>
          <FaAddressBook/>
          <p>Curso</p>
        </div>
        <div className={`step ${currentStep >=3 ? "active": ""}`}>
            <FiSend/>
            <p>Confirmação</p>
        </div>
    </div>
    )
}export default Etapas