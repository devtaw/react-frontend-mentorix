import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MentorixButton } from "../Button/MentorixButton.styled.js";
import { updateMentor } from "../../common/services/MentorService";
import {
  Envelope,
  Password,
  GooglePhotosLogo,
  LinkedinLogo,
  IdentificationBadge,
  ShareNetwork,
  Note,
} from "@phosphor-icons/react";
import { Textorodape, Labelleft, EspecialidadesContainer } from "./FormMentor.styled";
import EspecialidadesList from "./CardMentor.jsx";

export function FormMentor(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newSenha, setNewSenha] = useState("");
  const [isSenhaModified, setIsSenhaModified] = useState(false);
  const [selectedEspecialidade, setSelectedEspecialidade] = useState([]);
  const [tempSelectedEspecialidade, setTempSelectedEspecialidade] = useState(
    []
  );

  const [linkedin, setLinkedin] = useState(props.linkedin);
  const [profissao, setProfissao] = useState(props.profissao);
  const [nomeCompleto, setNomeCompleto] = useState(props.nome);
  const [especialidades, setEspecialidades] = useState(props.especialidades);
  const [biografia, setBiografia] = useState(props.biografia);
  const [foto, setFoto] = useState(props.foto);

  const handleLinkedinChange = (event) => {
    setLinkedin(event.target.value);
  };

  useEffect(() => {
    setNomeCompleto(props.nome);
    setLinkedin(props.linkedin);
    setProfissao(props.profissao);
    setBiografia(props.biografia);
    setFoto(props.foto);
  }, [props]);

  console.log("props", props);

  useEffect(() => {
    setSelectedEspecialidade(especialidades);
  }, [especialidades]);

  const especialidadesList = [
    { label: "Estratégia", value: "estrategia" },
    { label: "Finanças", value: "financas" },
    { label: "Investimentos", value: "investimentos" },
    { label: "Desenvolvimento", value: "desenvolvimento" },
    { label: "Criptomoedas", value: "criptomoedas" },
    { label: "Blockchain", value: "blockchain" },
    { label: "Criatividade", value: "criatividade" },
    { label: "Comunicação", value: "comunicacao" },
    { label: "Produtividade", value: "produtividade" },
  ];

  const handleProfissaoChange = (event) => {
    setProfissao(event.target.value);
  };

  const handleNameChange = (event) => {
    setNomeCompleto(event.target.value);
  };

  const handleBiografiaChange = (event) => {
    setBiografia(event.target.value);
  };

  const handleFotoChange = (event) => {
    setFoto(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    const dadosAtualizados = {
      profissao: profissao,
      linkedin: linkedin,
      biografia: biografia,
      nome: nomeCompleto,
      foto: foto,
      senha: isSenhaModified ? newSenha : props.senha,
      especialidade: selectedEspecialidade,
    };

    try {
      const mentorAtualizado = await updateMentor(id, dadosAtualizados);
      console.log("Mentor atualizado:", mentorAtualizado);
    } catch (error) {
      console.error("Erro ao atualizar mentor:", error);
    }

    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setLinkedin(props.linkedin);
    setProfissao(props.profissao);
    setBiografia(props.biografia);

    setIsEditing(false);
  };

  const handleSenhaChange = (event) => {
    const newPassword = event.target.value;
    setNewSenha(newPassword);
    setIsSenhaModified(newPassword !== props.senha);
  };

  const handleTempCheckboxChange = (value) => {
    if (tempSelectedEspecialidade.includes(value)) {
      setTempSelectedEspecialidade(
        tempSelectedEspecialidade.filter((item) => item !== value)
      );
    } else {
      setTempSelectedEspecialidade([...tempSelectedEspecialidade, value]);
    }
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "5px" }}
    >
      {isEditing ? (
        <>
          <MentorixButton
            color={"terciary-200"}
            onClick={handleSaveClick}
            style={{ marginRight: "10px" }}
          >
            Salvar
          </MentorixButton>
          <MentorixButton color={"secondary-100"} onClick={handleCancelClick}>
            Cancelar
          </MentorixButton>
        </>
      ) : (
        <MentorixButton color={"terciary-200"} onClick={handleEditClick}>
          Editar perfil
        </MentorixButton>
      )}
      <hr />

      <div >
        <Labelleft>
          <label className="Label-left">Foto</label>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              <GooglePhotosLogo size={16} color="#4d0057" weight="fill" />
            </InputGroup.Text>
            <Form.Control
              value={foto}
              onChange={handleFotoChange}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              disabled={!isEditing} // Tornar o campo editável
            />
          </InputGroup>
        </Labelleft>

        <Labelleft>
          <label>Nome completo</label>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              <IdentificationBadge size={16} color="#4d0057" weight="fill" />
            </InputGroup.Text>
            <Form.Control
              onChange={handleNameChange}
              value={nomeCompleto}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              disabled={!isEditing}
            />
          </InputGroup>
        </Labelleft>

        <Labelleft>
          <label>Email</label>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              <Envelope size={16} color="#4d0057" weight="fill" />
            </InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              disabled={!isEditing}
            />
          </InputGroup>
        </Labelleft>

        <Labelleft>
          <label>Senha</label>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              <Password size={16} color="#4d0057" weight="fill" />
            </InputGroup.Text>
            <Form.Control
              disabled={!isEditing}
              onChange={handleSenhaChange}
              value={isEditing ? newSenha : "***"}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </Labelleft>

        <Labelleft>
          <label>Biografia</label>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              <Note size={16} color="#4d0057" weight="fill" />
            </InputGroup.Text>
            <Form.Control
              as="textarea"
              rows={5}
              value={biografia}
              maxLength={400} 
              disabled={!isEditing}
              onChange={handleBiografiaChange}
            />
          </InputGroup>
          <Textorodape>
            *O texto deve ter no máximo 400 caracteres (com espaços).
          </Textorodape>
        </Labelleft>

        <Labelleft>
          <label>LinkedIn</label>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              <LinkedinLogo size={16} color="#4d0057" weight="fill" />
            </InputGroup.Text>
            <Form.Control
              disabled={!isEditing}
              onChange={handleLinkedinChange}
              value={linkedin}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </Labelleft>

        <Labelleft>
          <label>Profissão</label>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              <ShareNetwork size={16} color="#4d0057" weight="fill" />
            </InputGroup.Text>
            <Form.Control
              onChange={handleProfissaoChange}
              value={profissao}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              disabled={!isEditing}
            />
          </InputGroup>
        </Labelleft>
      </div>
      {/* <div>
        <EspecialidadesList
          especialidades={especialidadesList}
          selectedEspecialidade={tempSelectedEspecialidade}
          onEspecialidadeChange={handleTempCheckboxChange}
          isEditing={isEditing}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Textorodape>*Você pode marcar mais de 1 opção.</Textorodape>
        </div>
      </div> */}

<label>Especialidades</label>
      <EspecialidadesContainer>
        <Form.Check
          className="col-md-4"
          type="checkbox"
          label="Desenvolvimento"
          id="checkbox-1"
          value="desenvolvimento"
        />
        <Form.Check
          className="col-md-4"
          type="checkbox"
          label="Criptomoedas"
          id="checkbox-2"
          value="criptomoedas"
        />
        <Form.Check
          className="col-md-4"
          type="checkbox"
          label="Blockchain"
          id="checkbox-3"
          value="blockchain"
        />
        <Form.Check
          className="col-md-4"
          type="checkbox"
          label="Finanças"
          id="checkbox-1"
          value="financas"
        />
        <Form.Check
          className="col-md-4"
          type="checkbox"
          label="Investimentos"
          id="checkbox-2"
          value="investimentos"
        />
        <Form.Check
          className="col-md-4"
          type="checkbox"
          label="Estratégia"
          id="checkbox-3"
          value="estrategia"
        />
        <Form.Check
          className="col-md-4"
          type="checkbox"
          label="Criatividade"
          id="checkbox-1"
          value="criatividade"
        />
        <Form.Check
          className="col-md-4"
          type="checkbox"
          label="Comunicação"
          id="checkbox-2"
          value="comunicacao"
        />
        <Form.Check
          className="col-md-4"
          type="checkbox"
          label="Produtividade"
          id="checkbox-3"
          value="produtividade"
        />
        <div img=""></div>
      </EspecialidadesContainer>
    </div>
  );
}
