import { useState } from "react";

const ReservaForm = ({submitReserva}) => {

    const [formReserva, setFormReserva] = useState({
        usuario: "",
        dni: "",
        fecha: "",
        hora: "",
        motivo: "",
    });

    const [alert, setAlert] = useState(false);

    const { usuario, dni, fecha, hora, motivo } = formReserva;

    const handleChange = (e) => {
        setFormReserva({
        ...formReserva,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
        [
            usuario.trim(),
            dni.trim(),
            fecha.trim(),
            hora.trim(),
            motivo.trim(),
        ].includes("")
        ) {
        setAlert(true);
        } else {
        submitReserva(formReserva);
        setFormReserva({
            usuario: "",
            dni: "",
            fecha: "",
            hora: "",
            motivo: "",
        });
        setAlert(false);
        }
    };

    return ( 
        <section className="d-flex flex-column gap-3 col-md-5">
        <form
            className=" sectionForm text-dark rounded container"
            onSubmit={handleSubmit}
        >
            <h3 className="text-center text-warning" id="formTitle">👨‍👩‍👧‍👦 Crear Cita 👨‍👩‍👧‍👦</h3>
            <div className="text-dark form-floating mb-3" style={{ display: "none" }}>
            <input
                type="number"
                className="form-control"
                name="id"
                placeholder="Id"
                id="formId"
                readOnly
            />
            <label htmlFor="id" className="text-dark">Id</label>
            </div>

            <div className="form-floating mb-3">
            <input
                type="text"
                name="usuario"
                placeholder="Nombre del usuario"
                className="form-control"
                value={usuario}
                onChange={handleChange}
                required
            />
            <label htmlFor="usuario" className="text-dark">Nombre del usuario</label>
            </div>

            <div className="form-floating mb-3">
            <input
                type="number"
                name="dni"
                placeholder="Documento de Identidad"
                className="form-control"
                value={dni}
                onChange={handleChange}
                required
            />
            <label htmlFor="dni" className="text-dark">Documento de Identidad</label>
            </div>

            <div className="form-floating mb-3">
            <input
                type="date"
                name="fecha"
                placeholder="Fecha de Reserva"
                className="form-control"
                value={fecha}
                onChange={handleChange}
                required
            />
            <label htmlFor="fecha" className="text-dark">Fecha de Reserva</label>
            </div>

            <div className="form-floating mb-3">
            <input
                type="time"
                name="hora"
                placeholder="Hora de Reserva"
                className="form-control"
                value={hora}
                onChange={handleChange}
                required
            />
            <label htmlFor="hora" className="text-dark">Hora de Reserva</label>
            </div>

            <div className="form-floating mb-3">
            <input
                type="text"
                name="motivo"
                placeholder="Motivo de Reserva"
                className="form-control"
                value={motivo}
                onChange={handleChange}
                required
            />
            <label htmlFor="motivo" className="text-dark">Motivo de Cita</label>
            </div>
            <button
            type="submit"
            className="btn btn-info border boder-warning w-100"
            >
            🏥 Reservar 🏥 
            </button>
        </form>
        {
            alert && <div className="align-self-center badge bg-warning text-dark">Todos los campos son obligatorios</div>
        }
        </section>
    );
    }
    
export default ReservaForm;