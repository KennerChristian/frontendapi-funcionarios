import './App.css'
import FooterComponent from './components/FooterComponent'
import FuncionarioComponent from './components/FuncionarioComponent'
import HeaderComponent from './components/HeaderComponent'
import ListFuncionarioComponent from './components/ListFuncionarioComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <>
    <BrowserRouter>

      <HeaderComponent />
      <Routes>
        {/* // http://locarlhost:3000 */}
        <Route path='/' element = {<ListFuncionarioComponent />}></Route>
        {/* // http://locarlhost:3000/funcionarios */}
        <Route path='/funcionarios' element = {<ListFuncionarioComponent />}></Route>
        {/* // http://locarlhost:3000/add-funcionario */}
        <Route path='/add-funcionario' element = {<FuncionarioComponent/>}></Route>
        {/* // http://locarlhost:3000/alterar-funcionarios/1 */}
        <Route path='/alterar-funcionarios/:id' element = {<FuncionarioComponent/>}></Route>
      </Routes>      
      <FooterComponent />

      </BrowserRouter> 
    </>
  )
}

export default App
