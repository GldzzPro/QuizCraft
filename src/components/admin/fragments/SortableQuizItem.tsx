
import { CSS } from '@dnd-kit/utilities';
import CardQuizzes from '@/components/admin/quizzes/card/CardQuizzesPages';
import { useSortable } from '@dnd-kit/sortable';

export default function SortableQuizItem({ quiz }: { quiz: any }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: quiz.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <CardQuizzes {...quiz} questions={quiz.questions} />
    </div>
  );
}
