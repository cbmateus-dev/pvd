import React from 'react'
import { useNavigate } from 'react-router-dom';
import InputEntrada from '../../components/inputEntrada'
import './index.css';

export default function MainPage() {
  let navigate = useNavigate()
  return (
    <div className='content'>
      <div className='inputsMain' >
        <InputEntrada onClick={()=>{navigate("/caixapage")}} width={"300px"} title={"Caixa Net"} />
        <InputEntrada width={"300px"} title={"Autenticket"} />
        <InputEntrada width={"300px"} title={"Cadastros"} />
      </div>
    </div>
  )
}
