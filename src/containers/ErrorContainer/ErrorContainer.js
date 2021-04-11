import React, {useState} from "react";
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

import * as defaultOptions from '../../helpers/default-options-lottie';

const ErrorContainer = () => {

    const personalEmail = "garzontoroyeison@gmail.com"
    const errorInfo = `La ruta especificada no existe, por favor intente con otra o vuelva a la página de inicio, si el problema persiste por favor mande un tickect al correo: ${personalEmail}`;
    
    const [isPaused, setIsPaused] = useState(false);
    
    const handleClick = () =>{
        setIsPaused(!isPaused);
    }
    
    return <ErrorPage errorInfo={errorInfo} options={defaultOptions} handleClick={handleClick} isPaused={isPaused}/>
}

export default ErrorContainer;
