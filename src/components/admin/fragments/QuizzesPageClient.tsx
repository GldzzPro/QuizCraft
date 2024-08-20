"use client";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import CreateButton from "@/components/admin/core/CreateButton";
import SortableQuizItem from "./SortableQuizItem";

export default function QuizzesPageClient({ quizzes }: { quizzes: any }) {
  const [items, setItems] = useState(quizzes);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((prevItems: any) => {
        const oldIndex = prevItems.findIndex((item: any) => item.id === active.id);
        const newIndex = prevItems.findIndex((item: any) => item.id === over.id);
        return arrayMove(prevItems, oldIndex, newIndex);
      });
    }
  };

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Quizzes</h2>
        <CreateButton path="/quizzes/create" text="Create Quiz" />
      </div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((quiz: any) => (
              <SortableQuizItem key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </>
  );
}
