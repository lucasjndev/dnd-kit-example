import React, { useState } from 'react';
import {
  DndContext,
  closestCenter
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';

import { SortableItem } from "./SortableItem"

const list = [
  { id: 1, content: "texto" },
  { id: 2, content: "texto" },
  { id: 3, content: "texto" },
  { id: 4, content: "texto" },
  { id: 5, content: "texto" },
  { id: 6, content: "texto" },
  { id: 7, content: "texto" },
  { id: 8, content: "texto" }
]
export default function App() {
  const [languages, setLanguages] = useState(["Vídeo 1", "Vídeo 2", "Vídeo 3","Vídeo 4", "Vídeo 5", "Vídeo 6"])

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div style={{ backgroundColor: "white", padding: 0, width: "50%", justifyContent: "center", textAlign: "center" }}>
        <h3 style={{ color: "black" }}> Lista com arrasta e solta. </h3>
        <div style={{ display: "flex", justifyContent: "center" ,flexWrap:"wrap" }}>
          {languages.map(e =>
            <p key={e} style={{ color: "red", marginLeft: 40 }}>
              {e}
            </p>
          )
          }
        </div>
        <div style={{ backgroundColor: "lightgray", padding: 5, margin: "5px", display: "flex", justifyContent: "center", flexDirection: "column" }}>

          <SortableContext
            items={languages}
            strategy={verticalListSortingStrategy}
          >
            {languages.map(language => <SortableItem key={language} id={language} />)}
          </SortableContext>

        </div>

      </div>
    </DndContext>

  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    console.log("ACTIVE: " + active.id)
    console.log("OVER: " + over.id)
    if (active.id !== over.id) {
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id)
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));

        return arrayMove(items, activeIndex, overIndex)
      })
    }
  }
};