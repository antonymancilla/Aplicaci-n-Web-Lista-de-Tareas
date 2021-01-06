import React,{ useState, useEffect} from 'react';
import './App.css';
import FormularioTareas from './componentes/FormularioTareas';
import Header from './componentes/Header';
import ListaTareas from './componentes/ListaTareas';

const App = () => {

  const tareasGuardadas = 
  localStorage.getItem('tareas') ?
  JSON.parse(localStorage.getItem('tareas')) : [];

  const [tareas, setTareas]=useState(tareasGuardadas); 
  
  useEffect(() => {
    localStorage.setItem('tareas',JSON.stringify(tareas));
  }, [tareas]);

  let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarTareas') === null){
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarTareas') === 'true';
  }
  
  const [mostrarTareas, setmostrarTareas] = useState(configMostrarCompletadas);  
  
  useEffect(() => {
    localStorage.setItem('mostrarTareas', mostrarTareas.toString());
  }, [mostrarTareas]);

  return (
    <div className="contenedor">
      <Header 
        mostrarTareas={mostrarTareas}
        setmostrarTareas={setmostrarTareas}
      />
      <FormularioTareas tareas={tareas} setTareas={setTareas} />
      <ListaTareas 
      tareas={tareas} 
      setTareas={setTareas}
      mostrarTareas={mostrarTareas}
      />
    </div>
  );
}

export default App;