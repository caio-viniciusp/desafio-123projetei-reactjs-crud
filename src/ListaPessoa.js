/*import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function ListaPessoa() {

  const [Pessoas,setPessoas] = useState([])
  useEffect(()=>{
      axios.get('http://desafio-123projetei-node.herokuapp.com/pessoas')
      .then(res=>{
        const dadosPessoas = res.data
        console.log(dadosPessoas)
        setPessoas({dadosPessoas})
      })

    }
  )
 
    return(
        <div>
          {
          Pessoas.map(
            pessoa=> <div key={pessoa.cpf}>{pessoa.cpf} - {pessoa.name} - {pessoa.birth} - {pessoa.phone}</div>
          )}
        </div>
    )
  }*/
