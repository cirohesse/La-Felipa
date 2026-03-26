import classes from './Servicios.module.css';

const servicios = [
  {
    id: 'desayuno',
    titulo: 'DESAYUNO',
    descripcion: 'seco incluido',
    icono: 'logo-cafe.svg',
  },
  {
    id: 'wifi',
    titulo: 'WIFI',
    descripcion: 'en todo el complejo',
    icono: 'logo-wifi.svg',
  },
  {
    id: 'cocina',
    titulo: 'COCINA EQUIPADA',
    descripcion: 'con anafe, microondas, heladera, pava eléctrica y cafetera',
    icono: 'logo-guantecocina.svg',
  },
  {
    id: 'vajilla',
    titulo: 'VAJILLA COMPLETA',
    descripcion: 'para dos personas',
    icono: 'logo-cubiertos.svg',
  },
  {
    id: 'tv',
    titulo: 'TV SMART',
    descripcion: 'con Direct TV',
    icono: 'logo-tv.svg',
  },
  {
    id: 'bano',
    titulo: 'BAÑO',
    descripcion: 'completo con ducha',
    icono: 'logo-ducha.svg',
  },
  {
    id: 'jacuzzi',
    titulo: 'JACUZZI',
    descripcion: 'en la habitación',
    icono: 'logo-jacuzzi.svg',
  },
  {
    id: 'cama',
    titulo: 'CAMA MATRIMONIAL',
    descripcion: 'en todas las unidades',
    icono: 'logo-cama.svg',
  },
  {
    id: 'terraza',
    titulo: 'TERRAZA INDIVIDUAL',
    descripcion: 'en cada cabaña',
    icono: 'logo-terrazaindividual.svg',
  },
  {
    id: 'mosquitero',
    titulo: 'MOSQUITERO',
    descripcion: 'en todas las ventanas',
    icono: 'logo-mosquitero.svg',
  },
  {
    id: 'limpieza',
    titulo: 'SERVICIO DE LIMPIEZA',
    descripcion: 'incluido',
    icono: 'logo-limpieza.svg',
  },
  {
    id: 'estacionamiento',
    titulo: 'ESTACIONAMIENTO',
    descripcion: 'dentro del predio',
    icono: 'logo-auto.svg',
  },
  {
    id: 'calefaccion',
    titulo: 'CALEFACCIÓN CENTRAL',
    descripcion: 'por radiadores',
    icono: 'logo-temperatura.svg',
  },
  {
    id: 'ropa',
    titulo: 'ROPA BLANCA',
    descripcion: 'recambio de sábanas, toallas y toallones',
    icono: 'logo-hoja.svg',
  },
  {
    id: 'entorno',
    titulo: 'ENTORNO',
    descripcion: 'natural',
    icono: 'logo-arbol.svg',
  },
];

export const Servicios = () => {
  return (
    <div className={classes.servicios}>
      <div className={classes.serviciosContainer}>
        <h2>SERVICIOS Y COMODIDADES</h2>

        <div className={classes.serviciosGrid}>
          {servicios.map((servicio) => (
            <div key={servicio.id} className={classes.servicioCard}>
              <div className={classes.servicioIcon}>
                <img src={`/La-Felipa/assets/${servicio.icono}`} alt={servicio.titulo} />
              </div>
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>

        <div className={classes.serviciosInfo}>
          <p>
            <strong>ADEMÁS LA FELIPA CUENTA UN PREDIO DE 8.000 MTS2</strong> para disfrutar de la
            naturaleza autóctona, el avistaje de aves y los arroyos aledaños
          </p>
          <p>
            CON UNA <strong>UBICACIÓN EXCEPCIONAL</strong> en la base del cerro Wank y a 700 mts del
            lago de los patos y el lago de las Truchas
          </p>
          <p>
            VAS A PODER ACCEDER A LAS MEJORES{' '}
            <strong>VISTAS DE LA CUMBRECITA Y EL PEÑÓN DEL ÁGUILA</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
