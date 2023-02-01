
import '../App.css'
function PrimeiraTela({ comment, comment2, setComment, setComment2 }) {
    const showFeed=(true)
    const handleClick = () => {
        alert('salvo');
    };
    return (<>
        {(showFeed &&
            <div className='container'>
                <div>
                    <textarea
                        id="comment"
                        value={comment}
                        placeholder='Descreva o serviço!'

                        onChange={(event) => setComment(event.target.value)}
                    />
                </div>

                <div>
                    <textarea
                        id="comment2"
                        value={comment2}
                        placeholder='Descreva o serviço!'

                        onChange={(event) => setComment2(event.target.value)}
                    />
                </div>

                <button className='input' onClick={() => handleClick()}>Enviar</button>

            </div>
        )}
    </>
    );
}

export default PrimeiraTela;
