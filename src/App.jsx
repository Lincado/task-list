// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect} from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css"

// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default () => {
  const [input, setInput] = useState("");
  const [inputValues, setInputValues] = useState([]);
  const [index, setEditIndex] = useState(-1);

  //função pra lidar com entrada do usuário
  const handleInput = (e) => setInput(e.target.value);

  // lida com evento de submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (index !== -1) { //verifica se index é igual -1, se não for ele é valor a ser editado
      const tempInputsValues = [...inputValues]; // copia do array
      tempInputsValues[index] = input;  // seta o novo valor no index respectivo
      setInputValues(tempInputsValues); //seta a copia do array e tornando o array principal inputValues
      setEditIndex(-1); // define o index como -1 para não ter edições inesperadas
    } else { // se não for edição v vai adicionar nova tarefa
      if (inputValues.indexOf(input) !== -1) return; //verifica o valor a ser adicionado já esta na lista
      setInputValues(inputs => [...inputs, input.trim()]);
    }


    setInput("");
  }

  //excluir uma tarefa da lista
  const handleRemoveTask = (index) => {
    const tempInputsValues = [...inputValues]
    setInputValues(tempInputsValues.filter((_, i) => i !== index)); // _ (underscore) significa que não vai usar primeiro parâmetro de filter
  }

  //lidar com edit
  const handleEdit = (index) => {
    setEditIndex(index);  // define o index a ser editado
    setInput(inputValues[index]); // coloca o valor do index no campo do input para ser editado
  }

  // carrega a lista de tarefa do local storage
  useEffect(() => {
    const taskList = JSON.parse(localStorage.getItem("tarefas"));
    setInputValues(taskList);
  }, [])

  // salva as tarefas dentro do local storage
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(inputValues));
  }, [inputValues]);


  return (
    <>
      <div className="form-content">
        <h1>Task List</h1>
        <TaskForm 
          input={input} 
          handleInput={handleInput} 
          handleSubmit={handleSubmit}/>
        <TaskList 
          inputValues={inputValues}
          handleEdit={handleEdit} 
          handleRemoveTask={handleRemoveTask} />
      </div>
    </>
  )
}