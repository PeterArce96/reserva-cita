import { useState } from 'react';
import './App.css';
import Header from './components/forms/sections/Header';
import ReservaForm from './components/forms/ReservaForm';
import ReservaReservas from './components/forms/ReservaReservas';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [reservas,setReservas]=useState([]);
  

  const createReserva = (reserva) => {
    reserva.id = uuidv4();
    setReservas([...reservas, reserva]);
  };

  const company = {
    name: 'Reserva de Cita',
    slogan: '😀 Un checkeo al año no hace daño 😀'
  };

  const submitReserva=(reserva)=>{
    if(reserva.id){
      console.log('editar');
    }else{
      createReserva(reserva);
    }
  };

  return (
    <>
      <Header 
      company = {company}/>
      
      <main>
        <section className="container">
          <div className="row justify-content-between gap-4">
            <ReservaForm
              submitReserva={submitReserva}
            />
            <ReservaReservas
              reservas={reservas}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;