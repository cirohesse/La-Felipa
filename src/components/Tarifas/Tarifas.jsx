import { useMemo, useState } from 'react';
import classes from './Tarifas.module.css';

const promocionesPorMes = [
  {
    titulo: 'Escapada de Verano',
    precio: '$92.000 por noche',
    vigencia: 'Enero',
    detalle: '10% off en estadías de 3 noches o más',
  },
  {
    titulo: 'Promo San Valentín',
    precio: '$95.000 por noche',
    vigencia: 'Febrero',
    detalle: '10% off en estadías de 3 noches o más',
  },
  {
    titulo: 'Otoño en La Felipa',
    precio: '$88.000 por noche',
    vigencia: 'Marzo',
    detalle: '10% off en estadías de 3 noches o más.',
  },
  {
    titulo: 'Escapada de Abril',
    precio: '$100.000 por noche',
    vigencia: 'Abril',
    detalle: 'Promoción válida para estadías de 3 noches o más',
  },
  {
    titulo: 'Promo de Mayo',
    precio: '$84.000 por noche',
    vigencia: 'Mayo',
    detalle: '10% off en estadías de 3 noches o más',
  },
  {
    titulo: 'Invierno Anticipado',
    precio: '$90.000 por noche',
    vigencia: 'Junio',
    detalle: '10% off en estadías de 3 noches o más',
  },
  {
    titulo: 'Vacaciones de Invierno',
    precio: '$98.000 por noche',
    vigencia: 'Julio',
    detalle: '10% off en estadías de 3 noches o más',
  },
  {
    titulo: 'Promo de Agosto',
    precio: '$89.000 por noche',
    vigencia: 'Agosto',
    detalle: '10% off en estadías de 3 noches o más',
  },
  {
    titulo: 'Primavera Temprana',
    precio: '$87.000 por noche',
    vigencia: 'Septiembre',
    detalle: '10% off en estadías de 3 noches o más',
  },
  {
    titulo: 'Promo de Octubre',
    precio: '$91.000 por noche',
    vigencia: 'Octubre',
    detalle: '10% off en estadías de 3 noches o más',
  },
  {
    titulo: 'Pre Verano',
    precio: '$93.000 por noche',
    vigencia: 'Noviembre',
    detalle: '10% off en estadías de 3 noches o más',
  },
  {
    titulo: 'Fiestas en La Felipa',
    precio: '$110.000 por noche',
    vigencia: 'Diciembre',
    detalle: '10% off en estadías de 3 noches o más',
  },
];

const initialForm = {
  nombre: '',
  email: '',
  telefono: '',
  mensaje: '',
};

export const Tarifas = () => {
  const [formData, setFormData] = useState(initialForm);
  const destinationEmail = 'lafelipa.cba@gmail.com';

  const promoActual = useMemo(() => {
    const mesActual = new Date().getMonth();
    return promocionesPorMes[mesActual];
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Consulta web - ${promoActual.vigencia}`;
    const body =
      `Nombre: ${formData.nombre}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.telefono || 'No informado'}\n\n` +
      `Mensaje:\n${formData.mensaje}`;

    const gmailParams = new URLSearchParams({
      view: 'cm',
      fs: '1',
      to: destinationEmail,
      su: subject,
      body,
    });

    const gmailComposeUrl = `https://mail.google.com/mail/?${gmailParams.toString()}`;
    const openedWindow = window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');

    if (!openedWindow) {
      const mailtoUrl =
        `mailto:${destinationEmail}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    }

    setFormData(initialForm);
  };

  return (
    <div className={classes.tarifas}>
      <div className={classes.tarifasContainer}>
        <h2>TARIFAS</h2>

        <div className={classes.contentGrid}>
          <article className={classes.promoCard}>
            <p className={classes.promoTag}>Promoción del mes</p>
            <h3>{promoActual.titulo}</h3>
            <p className={classes.promoPrecio}>{promoActual.precio}</p>
            <p className={classes.promoVigencia}>Vigencia: {promoActual.vigencia}</p>
            <p className={classes.promoDetalle}>{promoActual.detalle}</p>
            <p className={classes.promoNota}>Consultanos por otras promociones vigentes.</p>
          </article>

          <article className={classes.formCard}>
            <h3>Formulario de consultas</h3>
            <form className={classes.form} onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombre y apellido</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="telefono">Teléfono</label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
              />

              <label htmlFor="mensaje">Consulta</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
              />

              <button type="submit">Enviar consulta</button>
            </form>
          </article>
        </div>
      </div>
    </div>
  );
};
