import { useState, useEffect } from "react";
import "../../App.css";
import { message } from "antd";
import { getRatingConfig, postAssessment } from "../../api";
// import { config } from "react-spring";
function Avaliacao() {
  const [ratingConfig, setRatingConfig] = useState({});
  const [showAvaliar, setShowAvaliar] = useState(true);
  const [rating, setRating] = useState(0);
  const [feedback_end, setFeedback_end] = useState("");
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
    setShowAvaliar(true);
  };

  async function handleSubmit(event) {
    if (!feedback_end || !rating) {
      alert("O campos da questão é obrigatorio!");
      return;
    }
    try {
      const response = await postAssessment(rating, feedback_end);
      message.success("Dados enviados com sucesso!");
    } catch (error) {
      console.log(error);
      message.error("Erro ao enviar dados");
    }
  }

  useEffect(() => {
    getRatingConfig().then((ratingConfig) => setRatingConfig(ratingConfig));
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        {showAvaliar && (
          <div className="container">
            <div></div>
            <div style={{ color: "black" }}>{ratingConfig.question_text}</div>
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
            <div style={{ color: "black" }}>{ratingConfig.feedback_text}</div>
            <div>
              <textarea
                id="feedback_end"
                value={feedback_end}
                placeholder="Descreva a sua experiência!"
                onChange={(event) => setFeedback_end(event.target.value)}
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
