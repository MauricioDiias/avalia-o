import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css'
function Avaliação({comment,comment2}) {
    const location = useLocation()
    console.log(location)

    const [showAvaliar, setShowAvaliar] = useState(true)
    const [rating, setRating] = useState(0)
    const [comment3, setComment3] = useState('');
    const [showModal, setShowModal] = useState(false);
    
    const closeModal = () => { setShowModal(false); setShowAvaliar(true) };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ rating, comment2 });
        // Aqui você pode enviar os dados para o servidor
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                {showAvaliar && (
                    <div className='container'>
                        <div></div>
                        <div style={{ color: 'black' }}> {comment}</div>
                        <div className='stars'>
                            {[1, 2, 3, 4, 5].map((star) => {
                                console.log('star', star)
                                const status = star <= rating
                                console.log(status)
                                return (<div >

                                    <div
                                        key={star}
                                        onClick={() => setRating(star)}
                                        style={{ display: 'flex', color: status ? '#ffd000' : '#46536d' }}
                                    >&#9733;</div>
                                </div>
                                )
                            })}
                        </div>
                        <div style={{ color: 'black' }}>{comment2}</div>
                        <div>
                            <textarea
                                id="comment3"
                                value={comment3}
                                placeholder='Descreva a sua experiência!'

                                onChange={(event) => setComment3(event.target.value)}
                            />
                        </div>
                        <button className='input' type="submit" onClick={handleSubmit}>Enviar</button>

                    </div>
                )}

            </form>
            <div>
                {showModal && (
                    <div className="modal">
                        <p>Obrigado por usar nosso aplicativo!</p>
                        <div>&#9989;</div>
                        <button onClick={closeModal}>Fechar</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Avaliação;
