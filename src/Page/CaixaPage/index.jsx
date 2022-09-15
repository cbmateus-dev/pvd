
import moment from 'moment';
import './index.css';
import BodyContent from '../../components/bodyContent';
import Footer from '../../components/footer';
import InputsMenu from '../../components/inputsMenu';



function CaixaPage() {
  var dataAtual = moment().format('DD/MM/YYYY')
  var horaAtual = moment().format('HH:mm')
  return (
    <div  className="App">
      <div className='Main'>
        <InputsMenu />
      </div>
      <div className='BodyContent'>
        <BodyContent />
      </div>
      <div className='Footer'>
        <Footer dataAtual={dataAtual} horaAtual={horaAtual} />
      </div>

    </div >
  );
}

export default CaixaPage;
