import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ModalContainer } from "./MentorixModal.styled";

//componente genérico de modal que recebe propriedades:
//children: será o elemento filho que será redenrizado dentro da modal
//isOpen: propriedade booleana que representa informação se modal está aberta ou fechada
//buttonSaveName: propriedade string que representa o valor do botão de salvar, este recebe valor padrão de "Salvar" caso propriedade não seja informada
//title:propriedade string que representa título da modal
//onClose: propriedade function que representa função que será chamada quando user clicar pra fechar X modal, esta recebe valor padrão uma função vazia que retorna null, se ngm informar o onClick clicando no botão vai retornar null e não acontece nada
//onSave: propriedade function que representa função que será chamada quando user clicar em salvar, esta recebe valor padrão uma função vazia que retorna null, ou seja, se ngm informar o onClick clicando no botão não vai retornar null e não acontece nada
//usei desestruturação de objetos function NomeDela({propriedade1, propriedade2}) para obter de forma clara e simples as propriedades do objeto props
export function MentorixModal({
  children,
  isOpen,
  buttonSaveName = "Salvar",
  title,
  onClose = () => null,
  onSave = () => null,
}) {
  //função que passo como valor pra propriedade onHide, portanto esta função será executada quando user clica p/ fechar modal
  function handleClose() {
    //função chamada quando clica no x para fechar a modal
    onClose();
  }
  //função chamada quando user clicar no botão de salvar
  function handleSave() {
    onSave();
  }
  return (
    <>
      {/*show={isOpen} mostra e desmostra a modal.
      onHide={handleClose} propriedade que recebe função que será chamada quando usur clicar p/ fechar modal*/}
      <ModalContainer show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* {title} passa o valor do título da Modal, exemplo "Faça cadastro" */}
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        {/* {children} vai redenrizar qualquer coisa que passe entre tags de abertura e fechamento do MentorixModal */}
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          {/*variante="primary" é a cor padrão do bootstrap, será trocado quando eu colocar o button que criei no common.
          onClick={handleSave} chama a botão handleSave quando o botão é clcicado*/}
          <Button className="text-uppercase" variant="primary" onClick={handleSave}>
            {/* buttonSaveName é o texto que vai dentro do button, exemplo: enviar, cadastrar, salvar e etc */}
            {buttonSaveName}
          </Button>
        </Modal.Footer>
      </ModalContainer>
    </>
  );
}
