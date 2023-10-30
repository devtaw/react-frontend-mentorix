import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const EspecialidadeCheckbox = ({ label, value, checked, onChange, isEditing }) => {
  return (
    <Card style={{ width: "18rem", marginRight: "10px" }}>
      <Card.Header>
        <strong>{label}</strong>
      </Card.Header>
      <Card.Body>
        <Form.Check
          type="checkbox"
          label={label}
          id={`checkbox-${value}`}
          checked={checked}
          onChange={() => onChange(value)}
          disabled={!isEditing}
        />
      </Card.Body>
    </Card>
  );
};

const EspecialidadesList = ({ especialidades, selectedEspecialidade, onEspecialidadeChange, isEditing }) => {
  return (
    <div>
      <p>
        <strong>Especialidades por áreas de atuação:</strong>
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {especialidades.map((especialidade) => (
          <EspecialidadeCheckbox
            key={especialidade.value}
            label={especialidade.label}
            value={especialidade.value}
            checked={selectedEspecialidade.includes(especialidade.value)}
            onChange={onEspecialidadeChange}
            isEditing={isEditing}
          />
        ))}
      </div>
    </div>
  );
};

export default EspecialidadesList;
