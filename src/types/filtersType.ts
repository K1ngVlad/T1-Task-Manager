export type FiltersType = {
  category: 'All' | 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test';
  status: 'All' | 'todo' | 'in-progress' | 'done';
  priority: 'All' | 'low' | 'medium' | 'high';
};
