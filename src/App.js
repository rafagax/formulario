
import './App.css';

function App() {
  return (
    <form className='container'>
    <div >
   
        <div >
            <h2>Por favor, complete con sus datos</h2>
            <h4> 📁 Recaudos (que debe llevar a la empresa):</h4>
            <h4>✅ Rif Actualizado (en caso de ser pyme debe consignar RIF del Negocio).</h4>
            <h4>✅ Registro mercantil (en caso de ser pyme).</h4>
            <h4>✅ Copia de la Cedula de Identidad (vigente)</h4>
            <h4>💵 Los pagos de instalación son Divisas.</h4>
            <input type="text" name="nombre_completo" id="nombre_completo" placeholder="Nombre Completo" />
            <input type="text" name="apellido_completo" id="apellido_completo" placeholder="Apellido Completo" />
            <input type="text" name="direccion_completa" id="direccion_completa" placeholder="Direccion Completa" />
            <input type="number" name="cedula" id="cedula" placeholder="Cedula de Identidad" />
            <input type="email" name="email" id="Localidad" placeholder="Barrio o Localidad" />
            <input type="email" name="email" id="Ciudad" placeholder="Municipio o Ciudad" />
            <input type="email" name="email" id="email" placeholder="Correo Electronico" />
            <input type="email" name="email" id="Telefono" placeholder="+58 Telefono" />
            {/* Más campos del formulario */}
        </div>
        {/* Más pasos del formulario */}
        <p>
        El número télefonico que debe ingresar debe incluir al inicio el codigo del país y no es necesario colocar el 0, ejemplo: +584121234567
        </p>
        <div>
            
            <button className='button'>Siguiente</button>
           
        </div>
    
</div>
</form>
  );
}

export default App;
