
import './App.css'
import Sidebar from './components/Sidebar'
import fotodev from "./img/general/fotocv.jpeg"
import IconsDev from './components/IconsDev'

function App() {

  return (
    <div className="APPgeneral">

      <Sidebar />

      {containerFoto}

      <div className="container-text">
        <h1 className='nombre'>AMADO DAMIS</h1>
        <h2 className='titulo'>Desarrollador Full stack </h2>
        <p className='descripcion'>{descripcion} </p>
        <p className='descripcion'>{descripcion2} </p>
        <p className='descripcion'>{descripcion3} </p>
        <p className='descripcion'>{descripcion4} </p>
        <IconsDev />
      </div>

    </div>
  )
}

export default App


let containerFoto = <div className="containerFoto">
  <img src={fotodev} alt='fotodev' className='devFoto' />
</div>

let descripcion = "Cuento con un año de experiencia en el desarrollo de proyectos personales, período durante el cual he consolidado mis habilidades en programación y en la resolución de problemas complejos, tanto en el desarrollo front-end como back-end. Me he centrado en crear soluciones eficientes y bien estructuradas, lo que me ha permitido adquirir un dominio sólido de JavaScript. He trabajado principalmente con React en el front-end y con Node.js y Express en el back-end, desarrollando aplicaciones funcionales y escalables."
let descripcion2 = "Tengo experiencia en el diseño de bases de datos, especialmente con MongoDB, lo que me ha permitido crear arquitecturas de datos flexibles y eficientes adaptadas a las necesidades de cada proyecto. Además, poseo conocimientos en bases de datos relacionales como MySQL, lo que me permite seleccionar y aplicar la solución de almacenamiento más adecuada según los requisitos de cada caso."
let descripcion3 = "No me limito a un solo lenguaje de programación; siempre busco la herramienta más adecuada para cada desafío y me adapto con facilidad a nuevos lenguajes y tecnologías, con el objetivo de encontrar soluciones efectivas y funcionales."
let descripcion4 = "Aunque mi especialidad está en la parte lógica del desarrollo, también me aseguro de que las interfaces sean claras y funcionales. Para ello, utilizo herramientas como Tailwind CSS y Bootstrap, que me permiten optimizar el proceso sin comprometer la calidad del producto final."