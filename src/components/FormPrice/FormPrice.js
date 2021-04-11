import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './FormPrice.css';

const FormPrice = () => {

    const [forms, setForms] = useState([
        {
            key: 1,
            controlId: 'projectState',
            label: 'Estado del proyecto',
            checkboxLabel: 'Idea',
            checkboxName: 'projectState',
            checkboxValue: 'false'
        },
        {
            key: 2,
            controlId: 'ideaState',
            label: 'Idea',
            checkboxLabel: 'Tengo una idea y un modelo de negocio',
            checkboxName: 'ideaState',
            checkboxValue: 'false'
        },
    ]);


    function createFormGroup(form) {
        return (
            <>
                <Form.Group controlId={form.controlId} >
                    <Form.Label>{form.label}</Form.Label>
                    <Form.Check type="checkbox" label={form.checkboxLabel} name="checkIdea" value={form.checkboxName} onClick={()=>handleClickCheckBox(form.key)} />
                </Form.Group>
                <p>El valor del checkbox es: {form.checkboxValue.toString()}</p>
            </>
        )
    }
    function handleClickCheckBox(formKey) {
        let newForm = forms.forEach((form) => {
            if (form.key === formKey) {
                form.checkboxValue = !form.checkboxValue;
            }
        })
        setForms(newForm);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Enviado!");
    }
    return <>
        <div className="formStyle centerDiv">
            <Form className="m-5">
                <>
                    {
                        forms.map((form) => (
                            createFormGroup(form)))
                    }
                </>
                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Siguiente
                    </Button>
                </div>
            </Form>
        </div>
    </>

}
export default FormPrice;