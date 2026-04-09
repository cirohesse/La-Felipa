import { useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
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
    precio: '$89.000 por noche',
    vigencia: 'Marzo',
    detalle: '10% off en estadías de 3 noches o más.',
  },
  {
    titulo: 'Escapada de Abril',
    precio: '$100.000 por noche',
    vigencia: 'Abril',
    detalle: 'Promoción válida para estadías de 2 noches o más',
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
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
      setErrorMessage('Falta configurar EmailJS. Revisá las variables VITE_EMAILJS_*');
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
          name: formData.nombre,
          email: formData.email,
          telefono: formData.telefono || 'No informado',
          mensaje: formData.mensaje,
          message: formData.mensaje,
          tiempo: new Date().toLocaleString('es-AR'),
          time: new Date().toLocaleString('es-AR'),
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
            <p className={classes.promoTag}>Promoción del mes</p>
            <h3>{promoActual.titulo}</h3>
            <p className={classes.promoPrecio}>{promoActual.precio}</p>
            <p className={classes.promoVigencia}>Vigencia: {promoActual.vigencia}</p>
            <p className={classes.promoDetalle}>{promoActual.detalle}</p>
            <p className={classes.promoNota}>Consultanos por otras promociones vigentes</p>
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
