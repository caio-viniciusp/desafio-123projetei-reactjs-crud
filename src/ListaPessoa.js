import React, {useState, useEffect} from 'react';

export default function ListaPessoa() {
  const [Pessoas,setPessoas]=useState([])

  useEffect(()=>{
    fetch('http://desafio-123projetei-node.herokuapp.com/P')
    .then((res)=>res.json())
    .then(
      (resultado)=>{
      setPessoas(resultado)
        console.log(setPessoas)
      }
    )
  }
)


return (
  <div>
    {Pessoas.map(
      pessoa => <div key={pessoa.cpf}>
        {pessoa.cpf} - {pessoa.name} - {pessoa.phone} - {pessoa.birth}
        </div>
    )}
  </div>
)
}