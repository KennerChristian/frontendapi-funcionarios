import React, {useEffect, useState} from 'react'
import { criarFuncionario, getFuncionario, updateFuncionario } from '../services/funcionariosService'
import { useNavigate, useParams } from 'react-router-dom'

const FuncionarioComponent = () => {

    const [primeiroNome, setPrimeiroNome] = useState('')
    const [segundoNome, setSegundoNome] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams();

    const [errors, setErrors] = useState({
        primeiroNome:'',
        segundoNome:'',
        email:''
    })

    useEffect(() => {

        if(id){
            getFuncionario(id).then((response) => {
                setPrimeiroNome(response.data.primeiroNome);
                setSegundoNome(response.data.segundoNome);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }

    }, [id])

    const navigator = useNavigate()

    const salvarOuAlterarFuncionario = (e) => {
        e.preventDefault();

        if(validarFormulario()){

            const funcionario = {primeiroNome, segundoNome, email}

            console.log(funcionario)

            if(id){
                updateFuncionario(id, funcionario).then((response) => {
                    console.log(response.data);
                    navigator('/funcionarios');
                }).catch(error => {
                    console.error(error);
                }) 
            } else {
                criarFuncionario(funcionario).then((response) => {
                    console.log(response.data);
                    navigator('/funcionarios')
                }).catch(error => {
                    console.error(error);
                })
            }

            
        }

        
    }

    function validarFormulario(){
        let valid = true;
        const errorsCopy = {... errors}

        if(primeiroNome.trim()){
            errorsCopy.primeiroNome = '';            
        } else {
            errorsCopy.primeiroNome = 'Primeiro nome obrigatório';
            valid = false;
        }

        if(segundoNome.trim()){
            errorsCopy.segundoNome = '';
        } else {
            errorsCopy.segundoNome = 'Segundo nome obrigatório';
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email obrigatório';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function tituloPagina(){
        if(id){
            return <h2 className='text-center'>Alterar Funcionário</h2>
        } else {
            return <h2 className='text-center'>Adicionar Funcionário</h2>
        }
    }

  return (
    <div className='container'>
        <br/><br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    tituloPagina()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Primeiro nome:</label>
                            <input
                                type='text'
                                placeholder='Digite o primeiro nome:'
                                name='primeiroNome'
                                value={primeiroNome}
                                className={`form-control ${errors.primeiroNome ? 'Campo inválido' : ''}`}
                                onChange={(e) => setPrimeiroNome(e.target.value)}
                            >

                            </input>
                            { errors.primeiroNome && <div className='invalid-feedback'> {errors.primeiroNome} </div> }    
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Sobrenome:</label>
                            <input
                                type='text'
                                placeholder='Digite o sobrenome:'
                                name='segundoNome'
                                value={segundoNome}
                                className={`form-control ${errors.segundoNome ? 'Campo inválido' : ''}`}
                                onChange={(e) => setSegundoNome(e.target.value)}
                            >

                            </input>
                            { errors.segundoNome && <div className='invalid-feedback'> {errors.segundoNome} </div> }    
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input
                                type='text'
                                placeholder='Digite o email:'
                                name='email'
                                value={email}
                                className={`form-control ${errors.email ? 'Campo inválido' : ''}`}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </input>
                            { errors.email && <div className='invalid-feedback'> {errors.email} </div> }
                        </div>
                        <button className='btn btn-success' onClick={salvarOuAlterarFuncionario}>Adicionar</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default FuncionarioComponent
