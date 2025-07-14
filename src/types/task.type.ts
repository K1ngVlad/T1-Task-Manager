type ID = string;

export type TaskType = {
  id: ID;
  title: string;
  description: string;
  category: 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test';
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
};
