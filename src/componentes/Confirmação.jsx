import './Confirmação.css'
function Confirmaçao({date}){
    return(
        <div className='confirmation-section'>
               <h2>Para prosseguir <mark>{date.nome}</mark>, verifique se os dados abaixo estão corretos:</h2>
            <div className='data-confirmation'>
                <div>
                    <span>Nome:</span> <p>{date.nome}</p>
                    <span>Email:</span> <p>{date.email}</p>
                </div>
                
                <div>
                    <span>Aplicação:</span> <p>{date.aplicação}</p>
                    <span>Curso:</span> <p>{date.curso}</p>
                </div>

                <div>
                    <span>Telefone:</span> <p>{date.tel}</p>
                    <span>CEP:</span> <p>{date.endereço.cep}</p>
                </div>

                <div>
                    <span>Rua:</span> <p>{date.endereço.logradouro}</p>
                    <span>Bairro:</span> <p>{date.endereço.bairro}</p>
                </div>
                
                <div>
                    <span>Cidade:</span> <p>{date.endereço.localidade}</p>
                    <span>UF:</span> <p>{date.endereço.uf}</p>
                    
                </div>
            </div>
        </div>
    )
}export default Confirmaçao