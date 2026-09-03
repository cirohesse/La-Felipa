import { useMemo, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import classes from './Tarifas.module.css';

const promocionesPorMes = [
  {
    titulo: 'Escapada de Verano',
    precio: '$165.000 por noche',
    vigencia: 'Enero',
    detalle: 'Promoción válida para 2 personas en estadías de 3 noches o más',
  },
  {
    titulo: 'Promo San Valentín',
    precio: '$165.000 por noche',
    vigencia: 'Febrero',
    detalle: 'Promoción válida para 2 personas en estadías de 3 noches o más',
  },
  {
    titulo: 'Otoño en La Felipa',
    precio: '$165.000 por noche',
    vigencia: 'Marzo',
    detalle: 'Promoción válida para 2 personas en estadías de 3 noches o más',
  },
  {
    titulo: 'Escapada de Abril',
    precio: '$165.000 por noche',
    vigencia: 'Abril',
    detalle: 'Promoción válida para 2 personas en estadías de 3 noches o más',
  },
  {
    titulo: 'Promo de Mayo',
    precio: '$165.000 por noche',
    vigencia: 'Mayo',
    detalle: 'Promoción válida para 2 personas en estadías de 3 noches o más',
  },
  {
    titulo: 'Invierno Anticipado',
    precio: '$165.000 por noche',
    vigencia: 'Junio',
    detalle: 'Promoción válida para 2 personas en estadías de 3 noches o más.',
  },
  {
    titulo: 'Vacaciones de Invierno',
    precio: '$165.000 por noche',
    vigencia: 'Julio',
    detalle: 'Promoción válida para 2 personas en estadías de 3 noches o más',
  },
  {
    titulo: 'Promo de Agosto',
    precio: '$165.000 por noche',
    vigencia: 'Agosto',
    detalle: 'Promoción válida para 2 personas en estadías de 3 noches o más',
  },
  {
    titulo: 'Temporada de Primavera',
    precio: '$165.000 por noche',
    vigencia: 'Septiembre',
    detalle: 'Promoción válida para 2 personas en estadías de 3 noches o más',
  },
  {
    titulo: 'Promo de Octubre',
    precio: '$165.000 por noche',
    vigencia: 'Octubre',
    detalle: 'Promoción válida para 2 personas en estadías de 3 noches o más',
  },
  {
    titulo: 'Pre Verano',
    precio: '$165.000 por noche',
    vigencia: 'Noviembre',
    detalle: 'Promoción válida para 2 personas en estadías de 3 noches o más',
  },
  {
    titulo: 'Fiestas en La Felipa',
    precio: '$165.000 por noche',
    vigencia: 'Diciembre',
    detalle: 'Promoción válida para 2 personas en estadías de 3 noches o más',
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
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Inicializar EmailJS al montar el componente
  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, [publicKey]);

  const promoActual = useMemo(() => {
    const mesActual = new Date().getMonth();
    return promocionesPorMes[mesActual];
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'telefono') {
      if (!/^[0-9 +\-]*$/.test(value) || value.length > 20) return;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage('Su consulta no pudo ser enviada, intente contactarnos por nuestro Whatsapp, lamentamos los inconvenientes');
      setSuccessMessage('');
      return;
    }

    setIsSending(true);
    setErrorMessage('');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          promo_vigencia: promoActual.vigencia,
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono || 'No informado',
          mensaje: formData.mensaje,
          tiempo: new Date().toLocaleString('es-AR'),
          to_email: 'lafelipa.cba@gmail.com',
        },
        { publicKey }
      );

      setFormData(initialForm);
      setSuccessMessage('Su consulta ha sido enviada correctamente.');
    } catch (error) {
      console.error('EmailJS error:', error);
      const reason =
        (error && typeof error === 'object' && 'text' in error && error.text) ||
        (error && typeof error === 'object' && 'message' in error && error.message) ||
        'No se pudo enviar la consulta. Intente nuevamente.';

      setErrorMessage(`No se pudo enviar la consulta. ${reason}`);
      setSuccessMessage('');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={classes.tarifas}>
      <div className={classes.tarifasContainer}>
        <h2>TARIFAS</h2>

        <div className={classes.contentGrid}>
          <article className={classes.promoCard}>
            <p className={classes.promoTag}>Tarifa promocional</p>
            <h3 className={classes.promoTitle}>{promoActual.titulo}</h3>
            <p className={classes.promoPrecio}>{promoActual.precio}</p>
            <p className={classes.chekHorario}>Check-in: 14:00 HS</p>
            <p className={classes.chekHorario}>Check-out: 11:00 HS</p>
            <p className={classes.promoVigencia}>Vigencia: {promoActual.vigencia}</p>
            <div className={classes.promoDivider} />
            <p className={classes.promoDetalle}>{promoActual.detalle}</p>
            <p className={classes.promoNota}>Tarifa no promocional: $175.000 por noche para estadías menores a 3 noches</p>
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
                maxLength={20}
                pattern="[0-9 +\-]*"
                inputMode="tel"
                title="Solo números, espacios, + y -, hasta 20 caracteres"
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

              <button type="submit" disabled={isSending}>
                {isSending ? 'Enviando...' : 'Enviar consulta'}
              </button>

              {successMessage && <p className={classes.successMessage}>{successMessage}</p>}
              {errorMessage && <p className={classes.errorMessage}>{errorMessage}</p>}
            </form>
          </article>
        </div>
      </div>
    </div>
  );
};
