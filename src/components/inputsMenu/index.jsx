import React from 'react';
import DropDownInput from '../dropDownInput';
import InputEntrada from '../inputEntrada';

export default function InputsMenu() {
  return (
    <div>
      <div className='InputsMenu'>
        <InputEntrada title={"F1 - Orçamento"} />
        <InputEntrada title={"F2 - Abrir Venda"} />
        <InputEntrada title={"F3 - Fechar Venda"} />
        <InputEntrada title={"F5 - Cancelar Item"} />
        <InputEntrada title={"F6 - Cancelar Venda"} />
        <InputEntrada title={"F7 - Desconto Item"} />
        <InputEntrada title={"F8 - Troca"} />
        <InputEntrada title={"F10 - Mesas"} />
        <InputEntrada title={"F11 - Pesquisar Produtos"} />
        <DropDownInput style={{ background: 'red' }} />
        <InputEntrada title={"ESC - Sair"} />
      </div>
    </div>
  )
}
