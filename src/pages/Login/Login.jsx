import React from "react";
import { MentorixModal } from "../../common/MentorixModal/MentorixModal";
import { useState } from "react";
import FormLogin from "./FormLogin/FormLogin";
import { useNavigate } from "react-router-dom";

export function Login({ isOpen, onClose }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  function handleLogin() {
    navigate("/area-mentor");
    console.log(usuario, senha);
  }

  // function handleCloseModal () {
  //   setModalIsOpen(false)
  // }
  return (
    <div>

      <FormLogin />
    </div>
  );
}
