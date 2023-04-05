import Logo from '../imagem/foto.svg';

function Usuario({date,upDateFielHandler}){
    return(
        <div className='conteudo'>
            <img src={Logo} alt="logo" className='Logo' />
            <div className="input-containe">
            <div className="header">
                <h1>Cadastro do Desenvolvedor</h1>
                <span className='subtitulo'>Faça seu cadastro na lista e aguarde nosso contato</span>
            </div>
                <br />
                <div className="content-input">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" id="nome" required value={date.nome||""} onChange={(e)=>upDateFielHandler("nome",e.target.value)}/>
                </div>
                <div className="content-input">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required value={date.email||""} onChange={(e)=>upDateFielHandler("email",e.target.value)} />
                </div>
                <div className="content-input">
                    <label htmlFor="tel">Telefone</label>
                    <input type="tel" name="tel" id="tel"  placeholder='(xx) xxxxx-xxxx' value={date.tel||""} onChange={(e)=>upDateFielHandler("tel",e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default Usuario;
