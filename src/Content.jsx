import React from "react";

export default function Content({ activeSection }) {
  return (
    <main className="content">
      {activeSection === "inicio" && (
        <section>
          <h1>Inicio</h1>
          <p>
            Bienvenido a esta guía práctica sobre el sistema de jubilación en
            Chile. Aquí encontrarás información clara y resumida sobre cómo
            funciona el sistema previsional, qué requisitos se piden, cuáles son
            las opciones disponibles al momento de pensionarse y qué beneficios
            adicionales entrega el Estado.
          </p>
          <p>
            El objetivo de esta página es servir como una fuente confiable y
            sencilla de información para quienes están próximos a jubilar o
            desean entender mejor cómo planificar su futuro. La jubilación no es
            solo un trámite, es una etapa importante de la vida que debe
            enfrentarse con preparación.
          </p>
          <p>
            A lo largo de este sitio, recorreremos los aspectos más comunes que
            generan dudas: cómo jubilar, cuáles son los requisitos, las
            diferencias entre retiro programado y renta vitalicia, y los
            beneficios sociales que apoyan a los pensionados en Chile.
          </p>
        </section>
      )}

      {activeSection === "quien-soy" && (
        <section>
          <h1>Quién soy</h1>
          <p>
            Mi nombre es Sandra Fuentes, Asesor previsional certificada por la 
            SuperIntendencia de Pensiones.
            Esta página fue creada con el propósito de acercar la información
            previsional de manera simple y accesible. Muchas veces, los trámites
            y requisitos pueden parecer complejos, por lo que contar con un
            resumen claro ayuda a tomar mejores decisiones.
          </p>
          <p>
            Mi intención es que cualquier persona, sin importar su nivel de
            conocimiento sobre pensiones, pueda comprender las opciones que
            existen y cuáles son los pasos a seguir para iniciar el proceso de
            jubilación en Chile.
          </p>
          <p>
            El sistema previsional impacta directamente en la calidad de vida
            durante la vejez, y conocerlo en detalle es clave para tener una
            etapa de retiro más tranquila y planificada.
          </p>
        </section>
      )}

      {activeSection === "videos" && (
        <section>
          <h1>Videos</h1>
          <p>
            Aquí podrás encontrar material audiovisual diseñado para explicar de
            manera sencilla los conceptos clave sobre jubilación, pensiones y
            beneficios estatales. Estos recursos buscan complementar la lectura
            con ejemplos visuales y explicaciones prácticas.
          </p>
          <p>
            Los videos incluyen testimonios, tutoriales sobre cómo hacer
            trámites en línea y explicaciones sobre las diferencias entre las
            modalidades de pensión disponibles en Chile.
          </p>
          <p>
            Con este contenido multimedia, podrás reforzar tu comprensión y
            resolver dudas frecuentes de forma rápida y didáctica.
          </p>
        </section>
      )}

      {activeSection === "contacto" && (
        <section>
          <h1>Contacto</h1>
          <p>
            Si tienes preguntas o necesitas más información sobre algún tema en
            particular, puedes escribir a fuentesandra@gmail.cl. o llamar a +569 6445 8731. Estaré
            encantada de ayudarte a aclarar tus dudas sobre jubilación y
            pensiones.
          </p>
          <p>
            También puedes comunicarte a través de redes sociales o foros
            especializados donde se discuten temas previsionales. El intercambio
            de experiencias siempre es útil para quienes se enfrentan al mismo
            proceso.
          </p>
          <p>
            Recuerda que, además de la información de esta página, siempre
            puedes acudir a tu AFP, al IPS o a la Superintendencia de Pensiones
            para obtener orientación oficial.
          </p>
        </section>
      )}

      {activeSection === "como-jubilar" && (
        <section>
          <h1>Cómo jubilar</h1>
          <p>
            Jubilar en Chile implica iniciar un trámite en tu AFP, el Instituto
            de Previsión Social (IPS) o en una compañía de seguros, según tu
            situación previsional. Este proceso comienza verificando si cumples
            con la edad legal de jubilación o con los requisitos que permitan un
            retiro anticipado.
          </p>
          <p>
            Una vez presentada la solicitud, la institución revisa tu historial
            de cotizaciones y calcula el monto de la pensión a la que puedes
            acceder. Durante esta etapa, también te asesoran sobre las distintas
            modalidades de pensión para que elijas la más conveniente.
          </p>
          <p>
            Tras la aprobación, recibirás mensualmente tu pensión bajo la
            modalidad seleccionada. Es importante recordar que jubilar no
            significa dejar de trabajar: puedes seguir generando ingresos,
            siempre considerando cómo eso puede afectar tu pensión.
          </p>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zC9CGTha15Y"
              title="Video de jubilación en Chile"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {activeSection === "requisitos" && (
        <section>
          <h1>Requisitos</h1>
          <p>
            En Chile, la edad legal para jubilar es de 65 años en el caso de los
            hombres y 60 años para las mujeres. Sin embargo, además de la edad,
            se deben cumplir condiciones relacionadas con los fondos
            acumulados en tu AFP.
          </p>
          <p>
            Existe la opción de jubilar anticipadamente si logras acumular un
            capital suficiente para financiar una pensión equivalente al 70% del
            promedio de tus ingresos de los últimos diez años y, además, que sea
            mayor al 80% de la pensión máxima con aporte solidario.
          </p>
          <p>
            Para realizar el trámite, necesitarás presentar documentos como tu
            cédula de identidad, historial de cotizaciones y, en casos
            especiales, certificados médicos o declaraciones juradas.
          </p>
        </section>
      )}

      {activeSection === "anticipada" && (
        <section>
          <h1>Jubilación anticipada</h1>
          <p>
            La jubilación anticipada es una opción para quienes han acumulado
            fondos suficientes antes de la edad legal. Esta modalidad exige que
            la pensión calculada sea al menos un 70% del promedio de tus últimos
            diez años de remuneraciones.
          </p>
          <p>
            Jubilar de forma anticipada puede sonar atractivo, pero requiere una
            planificación muy cuidadosa. Cuanto antes te retires, más tiempo
            deberás financiar con tus ahorros, lo que puede reducir el monto
            mensual disponible.
          </p>
          <p>
            Es recomendable analizar la decisión junto con un asesor financiero
            para evaluar si conviene jubilar antes o esperar a la edad legal y
            así obtener una pensión más estable.
          </p>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rAvBgxmLbPE"
              title="Video de jubilación en Chile"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {activeSection === "invalidez" && (
        <section>
          <h1>Pensión de invalidez</h1>
          <p>
            La pensión de invalidez se otorga a personas que, por enfermedad o
            accidente, han perdido gran parte de su capacidad laboral. En Chile,
            este beneficio se entrega cuando una comisión médica certifica que
            la persona tiene una pérdida de al menos dos tercios de su capacidad
            de trabajo.
          </p>
          <p>
            El proceso incluye presentar antecedentes médicos, exámenes y
            evaluaciones por distintas comisiones. Una vez aprobado, se puede
            optar por retiro programado o renta vitalicia, al igual que en la
            pensión por vejez.
          </p>
          <p>
            Esta pensión es esencial para garantizar un ingreso a quienes no
            pueden seguir trabajando y, en algunos casos, se complementa con
            beneficios estatales para reforzar la protección social.
          </p>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PuvRC78nzWw"
              title="Video de jubilación en Chile"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {activeSection === "retiro-vs-renta" && (
        <section>
          <h1>Retiro programado vs renta vitalicia</h1>

          <h2>Retiro programado</h2>
          <p>
            El retiro programado consiste en que la AFP administra los fondos y
            va entregando pagos mensuales que se recalculan cada año. Una de sus
            ventajas es que, si el pensionado fallece, el saldo puede quedar
            como herencia para los beneficiarios.
          </p>
          <p>
            Sin embargo, el monto de la pensión puede disminuir con el tiempo,
            ya que depende de la rentabilidad de los fondos y de la expectativa
            de vida proyectada.
          </p>

          <h2>Renta vitalicia</h2>
          <p>
            La renta vitalicia se contrata con una aseguradora, la cual se
            compromete a entregar un pago fijo mensual de por vida. Esto da
            seguridad y estabilidad al pensionado, aunque implica que los fondos
            pasan a ser propiedad de la aseguradora y no quedan como herencia.
          </p>
          <p>
            La elección entre ambas modalidades depende de factores como tu
            situación familiar, tolerancia al riesgo y proyecciones de vida.
          </p>
        </section>
      )}

      {activeSection === "otros" && (
        <section>
          <h1>Otros temas</h1>
          <p>
            Además de las modalidades principales de pensión, existen beneficios
            estatales como la Pensión Garantizada Universal (PGU), que asegura
            un ingreso mínimo para quienes cumplen ciertos requisitos de edad y
            residencia.
          </p>
          <p>
            También existen convenios internacionales que permiten reconocer
            cotizaciones realizadas en otros países, lo que facilita el acceso a
            una pensión en Chile a quienes trabajaron en el extranjero.
          </p>
          <p>
            Estos beneficios buscan complementar el sistema previsional y dar
            mayor cobertura a quienes, de otra forma, tendrían ingresos muy
            bajos en la vejez.
          </p>
        </section>
      )}
    </main>
  );
}
