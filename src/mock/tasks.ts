import { v4 as uuidv4 } from 'uuid';

import type { TaskType } from '../types';

export const mockTasks: TaskType[] = [
  {
    id: uuidv4(),
    title: 'Fix login issue',
    description: 'Critical bug affecting login process',
    category: 'Bug',
    status: 'todo',
    priority: 'high',
  },
  {
    id: uuidv4(),
    title: 'Implement search functionality',
    description: 'Improve navigation for users',
    category: 'Feature',
    status: 'in-progress',
    priority: 'low',
  },
  {
    id: uuidv4(),
    title: 'Update README',
    description: 'Provide basic usage documentation',
    category: 'Documentation',
    status: 'done',
    priority: 'medium',
  },
  {
    id: uuidv4(),
    title: 'Refactor authentication module',
    description: 'Simplify token handling logic',
    category: 'Refactor',
    status: 'in-progress',
    priority: 'high',
  },
  {
    id: uuidv4(),
    title: 'Write unit tests',
    description: 'Increase test coverage for utilities',
    category: 'Test',
    status: 'todo',
    priority: 'medium',
  },
];
