import Local from '../imagem/Endereço.png'
import { useState, useEffect } from 'react'
import './Endereço.css'
function Endereço({date}) {
  const [cep, setCep] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleCep(cep)

  }, [cep] );

  const handleCep = (cep) => {
    if (cep.length === 8) {
      date.cpe = cep
      setLoading(true);
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          if (data.erro) {
            setError('CEP não encontrado');
          } else {
            setError('');
            date.endereço = data

          }
        })
        .finally(() => setLoading(false));
    } 
  }
console.log(date)
  return (
    <div className='conteudo'>
      <img src={Local} alt="logo" className='Localimg' />
      <div className="input-containe">
        <div className="header">
          <h1>Endereço</h1>
        </div>
        <br />
        <div className="content-input">
          <label htmlFor="cep">CEP:</label>
          <input type="text" name="cep" id="cep" value={cep} onChange={e => setCep(e.target.value.replace(/[^0-9]/g, "")) }/>
          {error && <span className="error">{error}</span>}
          {loading && <span className="loading">Consultando CEP...</span>}
          <br />
          <label htmlFor="rua">Rua:</label>
          <input type="text" name="rua" id="rua" value={date.endereço.logradouro || ''} readOnly /> 
          <label htmlFor="num">N:</label>
          <input type="text" name="num" id="num" value={date.endereço.numero} className='number'/>
        </div>
        <div className="content-input">
          <label htmlFor="bairro">Bairro:</label>
          <input type="text" name="bairro" id="bairro" value={date.endereço.bairro || ''} readOnly />
        </div>
        <div className="content-input">
          <label htmlFor="cidade">Cidade</label>
          <input type="text" name="cidade" id="cidade" value={date.endereço.localidade || ''} readOnly />
        </div>
        <div class="regiao">
        <select value={date.endereço.uf} className="estados">
              <option value="Estado" className='estadoInput'>Estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>
      </div>
    </div>
  )
}

export default Endereço
