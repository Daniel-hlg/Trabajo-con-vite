import './hdv.css'

function hoja() {

  return (
    <body>
      <div class="container">
        <header class="header">
          <div class="header-content">

            <div class="profile-image">
              <img src="/imagenes/fotohdv.jpg" alt="Foto de Daniel Steven Holguín Soto" />
            </div>


            <div class="profile-info">
              <h1>Daniel Steven Holguín Soto</h1>
              <p>
                Mi nombre es Daniel Steven Holguín Soto, tengo 17 años y soy estudiante de Análisis y Desarrollo de Software,
                con un gran interés en la creación de soluciones tecnológicas que faciliten procesos y brinden mejoras a los usuarios.
                Me considero una persona analítica, responsable y comprometida, con facilidad para el trabajo en equipo y la adaptación
                a diferentes entornos. Me gustan los desafíos y siempre me ha gustado seguir aprendiendo cosas nuevas para así aportar
                mi conocimiento a la empresa. En lo que llevo estudiando he adquirido conocimientos sobre Python, bases de datos con SQL,
                XAMPP y MySQL. También tengo conocimiento de HTML con CSS y un poco de JavaScript.
              </p>
            </div>


            <div class="extra-info">
              <div class="contact">
                <p class="label">Teléfono</p>
                <p>+57 3127927098</p>
                <p class="label">Correo</p>
                <p>holguinsotodanielsteven@gmail.com</p>
              </div>

              <div class="address">
                <p class="label">Dirección</p>
                <p>Calle 5 #4-12</p>
              </div>

              <div class="skills">
                <p class="label">Habilidades</p>
                <ul>
                  <li>Trabajo en equipo</li>
                  <li>Responsable</li>
                  <li>Autodidacta</li>
                  <li>Comunicación efectiva</li>
                  <li>Paciencia y tolerancia</li>
                  <li>Adaptabilidad</li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    </body>

  )
} 

export default hoja