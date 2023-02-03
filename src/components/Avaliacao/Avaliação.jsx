import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios'
import '../App.css'
import { config } from 'react-spring';
function Avaliação({ question_text, feedback_text }) {
    // axios.get('http://localhost:7070')
    // .then(function (response) {

    //     const lista = response.data
    //     console.log(response.data);
    //     console.log('lista',lista.map(i=>i.nome))

    // })
    // .catch(function (error) {
    //     // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
    //     console.log(error);
    // })
    const [ratingConfig, setRatingConfig] = useState()

    const { settingId } = useSearchParams()
    const configHeader = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'

        }
    };
    async function getRatingConfig() {
        const response = await axios.post('https://85d1-189-4-107-66.sa.ngrok.io/quiz/1', configHeader)
        .then(function (response) {
            const config = response.data.message[0] 
            console.log('response',response)
            setRatingConfig(config);
            console.log(config);
        })
        .catch(function (error) {
            console.log('error', error);
        })
    }
    useEffect(() => {
        // console.log(location)
        getRatingConfig();
        // console.log(settingId)
    }, []);


    const location = useLocation()
    // console.log(location)

    const [showAvaliar, setShowAvaliar] = useState(true)
    const [rating, setRating] = useState(0)
    const [comment3, setComment3] = useState('');
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => { setShowModal(false); setShowAvaliar(true) };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ rating, feedback_text });
        // Aqui você pode enviar os dados para o servidor
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                {showAvaliar && (
                    <div className='container'>
                        <div></div>
                        <div style={{ color: 'black' }}> {ratingConfig.question_text}</div>
                        <div className='stars'>
                            {[1, 2, 3, 4, 5].map((star) => {
                                const status = star <= rating
                                return (<div key={star} >

                                    <div

                                        onClick={() => setRating(star)}
                                        style={{ display: 'flex', color: status ? '#ffd000' : '#46536d' }}
                                    >&#9733;</div>
                                </div>
                                )
                            })}
                        </div>
                        <div style={{ color: 'black' }}>{feedback_text}</div>
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
