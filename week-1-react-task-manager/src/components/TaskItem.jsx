import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px',
        marginBottom: '8px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        backgroundColor: task.completed ? '#e6ffe6' : '#fff',
      }}
    >
      <span
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          flex: 1,
          color: task.completed ? '#666' : '#000'
        }}
      >
        {task.text}
      </span>
      <div>
        <button
          onClick={() => onToggle(task.id)}
          style={{ marginRight: '8px', padding: '6px 12px', cursor: 'pointer' }}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          style={{ backgroundColor: '#ff4d4d', color: '#fff', border: 'none', padding: '6px 12px', cursor: 'pointer', borderRadius: '4px' }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;