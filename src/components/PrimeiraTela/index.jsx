import { message } from "antd";
import "../../App.css";
import { postData } from "../../api";
function PrimeiraTela({
  question_text,
  feedback_text,
  setQuestion_text,
  setFeedback_text,
}) {
  const showFeed = true;

  const handleClick = () => {
    if (!question_text) {
      alert("O campos da questão é obrigatório!");
      return;
    }
    console.log({ question_text, feedback_text }, "comentario");
    postData(question_text, feedback_text)
      .then((response) => {
        console.log(response);
        message.success("Dados enviados com sucesso!");
      })
      .catch((error) => {
        console.log(error);
        message.error("Erro ao enviar dados");
      });
  };

  return (
    <>
      {showFeed && (
        <div className="container">
          <div>
            <textarea
              id="question_text"
              value={question_text}
              placeholder="Descreva o serviço!"
              onChange={(event) => setQuestion_text(event.target.value)}
            />
          </div>

          <div>
            <textarea
              id="feedback_text"
              value={feedback_text}
              placeholder="Descreva o serviço!"
              onChange={(event) => setFeedback_text(event.target.value)}
            />
          </div>

          <button className="input" onClick={() => handleClick()}>
            Enviar
          </button>
        </div>
      )}
    </>
  );
}

export default PrimeiraTela;
