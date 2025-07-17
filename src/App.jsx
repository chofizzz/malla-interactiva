
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const materias = [
  { codigo: "MAT101", nombre: "Matemáticas I", semestre: 1 },
  { codigo: "QUI101", nombre: "Química General", semestre: 1 },
  { codigo: "BIO101", nombre: "Biología Celular", semestre: 1 },
];

export default function App() {
  const [estadoMaterias, setEstadoMaterias] = useState({});
  const [notas, setNotas] = useState({});
  const [comentarios, setComentarios] = useState({});

  const handleCheckboxChange = (codigo) => {
    setEstadoMaterias((prev) => ({
      ...prev,
      [codigo]: !prev[codigo],
    }));
  };

  const handleNotaChange = (codigo, nota) => {
    setNotas((prev) => ({
      ...prev,
      [codigo]: nota,
    }));
  };

  const handleComentarioChange = (codigo, comentario) => {
    setComentarios((prev) => ({
      ...prev,
      [codigo]: comentario,
    }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {materias.map((materia) => (
        <div key={materia.codigo} className="bg-white shadow-md rounded-2xl p-4">
          <div>
            <div className="font-bold text-lg mb-1">{materia.nombre}</div>
            <div className="text-sm text-gray-600 mb-2">
              Código: {materia.codigo} | Semestre: {materia.semestre}
            </div>
            <div className="flex items-center mb-2 gap-2">
              <Checkbox
                checked={estadoMaterias[materia.codigo] || false}
                onCheckedChange={() => handleCheckboxChange(materia.codigo)}
              />
              <span>{estadoMaterias[materia.codigo] ? "Aprobada" : "Pendiente"}</span>
            </div>
            <Input
              type="text"
              placeholder="Nota (opcional)"
              value={notas[materia.codigo] || ""}
              onChange={(e) => handleNotaChange(materia.codigo, e.target.value)}
              className="mb-2"
            />
            <Textarea
              placeholder="Comentarios / Links"
              value={comentarios[materia.codigo] || ""}
              onChange={(e) => handleComentarioChange(materia.codigo, e.target.value)}
              className="text-sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
