import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "12px",
    margin: "6px",
    minWidth: "120px",
    background: "limegreen",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
};

export default function OnibusDragDrop() {
  const [items, setItems] = useState([
    "Allana Souza", "Gabriel", "Jennifer",
    "Vitoria Oliveira", "Maria Beatriz", "Raiane M.", "Dalila",
    "Karla Morais", "Antonio F.", "Erivaldo", "Valter",
    "Antonio L.", "Biatriz Sandes", "Eduarda F.", "Tainá Rocha",
    "Beatriz Mesquita", "Fernanda L.", "Lara Kézia", "Sofhia",
    "Maria Clara", "Lana Evelin", "Claudio G.", "Valdinei",
    "Marcos Vinicius", "Letícia M.", "Graziely", "Victor Berlink",
    "Maria Talia", "Alex Alves", "Heloiza", "Noara B.",
    "Thais Feitosa", "Ketlyn Melo", "Valéria", "Vitoria Silva",
    "Vitoria Braga", "Taissa", "Lavinia", "João Filho",
    "Marlon", "Mariana Barroso", "Zé Davi", "Francislayne", "Matheus Barreto",
    "Lucélia", "Ana Júlia", "Maria Laiane", "Leticia de Oliveira", "Diêniffer",
    "Ana Gabriele", "Fenanda Eduarda", "Heloísa", "Jessica Martins", "Julia de Andrade",
    "Thalia Araujo", "Pablo Augusto", "Kauê", "Gabriel de Lima", "Ronaldo Wendel",
    "Vitor Farias", "Richardson Sousa",
    "Maria Luiza", "Kailane Marinho", "Clecia Xavier", "Fábio F.", "Aloisio Morais",
    "Eduarda Araujo", "Rogiane", "Edite"
  ]);

  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={({ active, over }) => {
        if (over && active.id !== over.id) {
          setItems((items) => {
            const oldIndex = items.indexOf(active.id);
            const newIndex = items.indexOf(over.id);
            return arrayMove(items, oldIndex, newIndex);
          });
        }
      }}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "10px",
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          {items.map((id) => (
            <SortableItem key={id} id={id} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
