import { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
function Avaliacao() {
  const [ratingConfig, setRatingConfig] = useState();

  const configHeader = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    },
  };
  async function getRatingConfig() {
    await axios
      .post("https://4016-189-4-107-66.sa.ngrok.io/quiz/1", configHeader)
      .then(function (response) {
        const config = response.data.message[0];
        console.log("response", response);
        setRatingConfig(config);
        console.log(config);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }
  useEffect(() => {
    getRatingConfig();
  });

  const [showAvaliar, setShowAvaliar] = useState(true);
  const [rating, setRating] = useState(0);
  const [comment3, setComment3] = useState("");
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setShowAvaliar(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Aqui você pode enviar os dados para o servidor
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {showAvaliar && (
          <div className="container">
            <div></div>
            <div style={{ color: "black" }}> {ratingConfig.question_text}</div>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => {
                const status = star <= rating;
                return (
                  <div key={star}>
                    <div
                      onClick={() => setRating(star)}
                      style={{
                        display: "flex",
                        color: status ? "#ffd000" : "#46536d",
                      }}
                    >
                      &#9733;
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ color: "black" }}></div>
            <div>
              <textarea
                id="comment3"
                value={comment3}
                placeholder="Descreva a sua experiência!"
                onChange={(event) => setComment3(event.target.value)}
              />
            </div>
            <button className="input" type="submit" onClick={handleSubmit}>
              Enviar
            </button>
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

export default Avaliacao;
