import React from "react";
import { useForm } from "react-hook-form";
import Api from '../../Api';
import {useHistory} from 'react-router-dom';
import "./style.css";


function Contact(){

    const {register, handleSubmit} = useForm();
    const history = useHistory();

    const onSubmit = (data)=>{
        Api.post('/contacts', {
            name: data.name,
            email: data.email,
            message: data.message
        })
        .then((response)=>{
            console.log(response);
        })
        .catch(function(errors){
            console.log(errors);
        })
        .finally(function(){
            history.push('/contacts/view')
        })
    }

    return(
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <h1 className="contato">Contact</h1>
                <form 
                onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input 
                            {...register("name")}
                            className="form-control" 
                            type="text" 
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                        {...register("email")}
                        className="form-control" 
                        type="text" 
                        name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Mensagem:</label>
                        <textarea 
                        {...register("message")}
                        className="form-control" 
                        name="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
            <div className="col-sm-1"></div>
        </div>
    );
}

export default Contact;