import './Curso.css'
import Design from '../imagem/Design.png'
import Front from '../imagem/frontend.png'
import Back from '../imagem/backend.png'
import Full from '../imagem/fullstack.png'
import Dados from '../imagem/Dados.png'
import Game from '../imagem/game.png'
function Curso({date,upDateFielHandler}){
    return(
        <div className='container-curso'>
            <div className="header_curso">
                <h1>Curso</h1>
                <span>De qual lado da aplicação você desenvolve?</span>
            </div>
            <div className='radio-container'>
            <label className="radio">
                <img src={Front} alt="frontend" className='aplicaçao'/>
                <p>Front-end</p>
                <input type="radio" name="review" value="Front-end" checked={date.aplicação==="Front-end"} onChange={(e)=>upDateFielHandler("aplicação",e.target.value)}/>
            </label>

            <label className="radio">
                <img src={Back} alt="backend" className='aplicaçao' />
                <p>Back-end</p>
                <input type="radio" name="review" value="Back-end" checked={date.aplicação=== "Back-end"} onChange={(e)=>upDateFielHandler("aplicação",e.target.value)}/>
            </label>

            <label className="radio">
                <img src={Full} alt="fullstack"  className='aplicaçao'/>
                <p>FullStack</p>
               <input type="radio" name="review" value="FullStack" checked={date.aplicação==="FullStack"}onChange={(e)=>upDateFielHandler("aplicação",e.target.value)}/>
            </label>
            </div>
            <div className='Pacote'>
                <h2>Escolha o Curso:</h2>
            </div>
           <div className="footer">
               <label className="SecaoPacote">
                   <img src={Design} alt="Design" className='Tecnologia'/>
                   <h1>Design</h1>
                   <p className='label-itemlabel-item'>HTML</p>
                   <p htmlFor="CSS" className='label-item'>CSS</p>
                   <p className='label-item'>React</p>
                   <p className='label-item'>JavaScript</p>
                   <input type="radio" name="design" value="Design" checked={date.curso==="Design"}onChange={(e)=>upDateFielHandler("curso",e.target.value)}/>
               </label>
               <label className="SecaoPacote">
                   <img src={Dados} alt="Dados" className='Tecnologia'/>
                   <h1>Ciência de dados</h1>
                   <p>Python</p>
                   <p>SQL</p>
                   <p>JAVA</p>
                   <p>C/C++</p>
                   <input type="radio" name="design" value="Ciência de Dados"  checked={date.curso==="Ciência de Dados"}onChange={(e)=>upDateFielHandler("curso",e.target.value)}/>
               </label>
               <label className="SecaoPacote">
                   <img src={Game} alt="game" className='Tecnologia'/>
                   <h1>Games Designer</h1>
                   <p>C#</p>
                   <p>C++</p>
                   <p>JAVA</p>
                   <p>Python</p>
                   <input type="radio" name="design" value="Game Designer"  checked={date.curso==="Game Designer"}onChange={(e)=>upDateFielHandler("curso",e.target.value)}/>
               </label>
           </div>
        </div>
        
    )
    
}export default Curso