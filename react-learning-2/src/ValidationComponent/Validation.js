const validation = (props) => {
    return(
        <div>
            {
                props.inputLength > 5 ?
                    <p>Text long enough!</p>:
                    <p>Text too short!</p>
            }
        </div>
    );
};

export default validation;


/*Can be done like this:


let message = 'Text long enough';

if(props.inputLength <= 5){
    message = 'Text too short';
}

return(
    <div>
        <p>{message}</p>
    </div>
);*/