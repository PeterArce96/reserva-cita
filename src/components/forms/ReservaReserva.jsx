const ReservaReserva = ({ reserva }) => {

    const { usuario, dni, fecha, hora, motivo } = reserva;
    const urlWhatsapp = 'https://wa.me/51951569544?text=Confirmo%20mi%20cita: ';
    return (
        <li
            className="d-flex flex-column gap-2 list-group-item list-group-item-action border-2 border-info"
            aria-current="true"
        >
            <div className="d-flex align-items-center justify-content-between">
                <h5 className=" m-0 text-success">Usuario: <span className="text-dark">{usuario}</span></h5>
                <small className="badge bg-primary rounded-pill">
                    {fecha} {hora}
                </small>
                </div>
                <h5 className="m-0 text-success">Motivo: <span className="text-dark">{motivo}</span></h5>
                <h5 className="m-0 text-success">
                Documento de identidad: <span className="text-dark">{dni}</span>
                </h5>
                <div className="d-flex align-items-center justify-content-center">
                <div className="d-flex gap-1">
                    <a
                    href={`${urlWhatsapp} Usuario: ${usuario}, DNI: ${dni}, Fecha: ${fecha}, Hora: ${hora}, Motivo: ${motivo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                    >
                    Confirmar
                    </a>
                </div>
            </div>
        </li>
        );
    };
    
    export default ReservaReserva;