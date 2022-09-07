
import React from 'react';
import InputDisabled from '../inputDisabled';

export default function Footer({ dataAtual, horaAtual }) {
  return (
    <div>
      <div className='InputsMenu'>
        <InputDisabled title={"Operador: ADM"} />
        <InputDisabled title={`Data: ${dataAtual}`} />
        <InputDisabled title={`Hora ${horaAtual}`} />
        <InputDisabled title={"Caixa: 1"} />
        <InputDisabled title={"Versão:343.134"} />
        <InputDisabled title={"Modelo: NFC 4.0"} />
        <InputDisabled title={"Status Serviço: OPERACIONAL"} />
        <InputDisabled title={`Validade Cert:${dataAtual}`} />
        <InputDisabled title={"SYNC"} />
      </div >
    </div >
  )
}
