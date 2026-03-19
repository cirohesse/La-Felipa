import '../styles/Servicios.css'

const servicios = [
  {
    id: 'desayuno',
    titulo: 'DESAYUNO',
    descripcion: 'Seco incluido',
    icono: 'logo-cafe.svg'
  },
  {
    id: 'wifi',
    titulo: 'WIFI',
    descripcion: 'En todo el complejo',
    icono: 'logo-wifi.svg'
  },
  {
    id: 'cocina',
    titulo: 'COCINA EQUIPADA',
    descripcion: 'Con añafe, microondas, heladera, pava eléctrica y cafetera',
    icono: 'logo-guantecocina.svg'
  },
  {
    id: 'vajilla',
    titulo: 'VAJILLA COMPLETA',
    descripcion: 'Para dos personas',
    icono: 'logo-cubiertos.svg'
  },
  {
    id: 'tv',
    titulo: 'TV SMART',
    descripcion: 'Con Direct TV',
    icono: 'logo-tv.svg'
  },
  {
    id: 'bano',
    titulo: 'BAÑO',
    descripcion: 'Completo con ducha',
    icono: 'logo-ducha.svg'
  },
  {
    id: 'jacuzzi',
    titulo: 'JACUZZI',
    descripcion: 'En la habitación',
    icono: 'logo-jacuzzi.svg'
  },
  {
    id: 'cama',
    titulo: 'CAMA MATRIMONIAL',
    descripcion: 'En todas las unidades',
    icono: 'logo-cama.svg'
  },
  {
    id: 'terraza',
    titulo: 'TERRAZA INDIVIDUAL',
    descripcion: 'En cada cabaña',
    icono: 'logo-terrazaindividual.svg'
  },
  {
    id: 'mosquitero',
    titulo: 'MOSQUITERO',
    descripcion: 'En todas las ventanas',
    icono: 'logo-mosquitero.svg'
  },
  {
    id: 'limpieza',
    titulo: 'SERVICIO DE LIMPIEZA',
    descripcion: 'Incluido',
    icono: 'logo-limpieza.svg'
  },
  {
    id: 'estacionamiento',
    titulo: 'ESTACIONAMIENTO',
    descripcion: 'Dentro del predio',
    icono: 'logo-auto.svg'
  },
  {
    id: 'calefaccion',
    titulo: 'CALEFACCIÓN CENTRAL',
    descripcion: 'Por radiadores',
    icono: 'logo-temperatura.svg'
  },
  {
    id: 'ropa',
    titulo: 'ROPA BLANCA',
    descripcion: 'Recambio de sábanas, toallas y toallones',
    icono: 'logo-hoja.svg'
  },
  {
    id: 'entorno',
    titulo: 'ENTORNO',
    descripcion: 'Natural',
    icono: 'logo-arbol.svg'
  }
]

export default function Servicios() {
  return (
    <section className="servicios">
      <div className="servicios-container">
        <h2>SERVICIOS Y COMODIDADES</h2>
        
        <div className="servicios-grid">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="servicio-card">
              <div className="servicio-icon">
                <img 
                  src={`/La-Felipa/assets/${servicio.icono}`}
                  alt={servicio.titulo}
                />
              </div>
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="servicios-info">
          <p>
            <strong>ADEMÁS LA FELIPA CUENTA UN PREDIO DE 8.000 MTS2</strong> para disfrutar de la naturaleza autóctona, el avistaje de aves y los arroyos aledaños
          </p>
          <p>
            CON UNA <strong>UBICACIÓN EXCEPCIONAL</strong> en la base del cerro Wank y a 700 mts del lago de los patos y el lago de las Truchas
          </p>
          <p>
            VAS A PODER ACCEDER A LAS MEJORES <strong>VISTAS DE LA CUMBRECITA Y EL PEÑÓN DEL ÁGUILA</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
