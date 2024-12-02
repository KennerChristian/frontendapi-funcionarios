import React, {useEffect, useState} from 'react'
import { deletarFuncionario, listFuncionarios } from '../services/funcionariosService'
import { useNavigate } from 'react-router-dom'

const ListFuncionarioComponent = () => {

    const [funcionarios, setFuncionarios] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllFuncionarios();
    }, [])

    function getAllFuncionarios(){

        listFuncionarios().then((response) => {
            setFuncionarios(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNovoFuncionario(){
        navigator('/add-funcionario')
    }

    function updateFuncionario(id){
        navigator(`/alterar-funcionarios/${id}`)
    }

    function removerFuncionario(id){
        console.log(id);

        deletarFuncionario(id).then((response) => {
            getAllFuncionarios();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center'>Lista de funcionários</h2>
        <button className='btn btn-primary mb-2' onClick={addNovoFuncionario}>Adicionar funcionario</button>
        <table className='table table striped table bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Email</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {
                    funcionarios.map(funcionario =>
                        <tr key={funcionario.id}>
                            <td>{funcionario.id}</td>
                            <td>{funcionario.primeiroNome}</td>
                            <td>{funcionario.segundoNome}</td>
                            <td>{funcionario.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateFuncionario(funcionario.id)}>Alterar</button>
                                <button className='btn btn-danger' onClick={() => removerFuncionario (funcionario.id)}
                                    style={{marginLeft: '10px'}}
                                >Deletar</button>
                            </td>
                        </tr>)
                }                
            </tbody>
        </table>
    </div>
  )
}

export default ListFuncionarioComponent
