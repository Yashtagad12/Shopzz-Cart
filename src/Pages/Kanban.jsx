import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { kanbanData } from '../data/dummy';
import { Header } from '../Components';

const columnColors = {
  Open: 'bg-blue-500',
  'In Progress': 'bg-yellow-500',
  Testing: 'bg-purple-500',
  Close: 'bg-green-500',
};

const Kanban = () => {

  // Group cards according to Status
  const initialColumns = {
    Open: kanbanData.filter((item) => item.Status === 'Open'),
    'In Progress': kanbanData.filter((item) => item.Status === 'In Progress'),
    Testing: kanbanData.filter((item) => item.Status === 'Testing'),
    Close: kanbanData.filter((item) => item.Status === 'Close'),
  };

  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {

    if (!result.destination) return;

    const sourceColumn = [...columns[result.source.droppableId]];
    const destinationColumn = [...columns[result.destination.droppableId]];

    const [removed] = sourceColumn.splice(result.source.index, 1);

    removed.Status = result.destination.droppableId;

    destinationColumn.splice(result.destination.index, 0, removed);

    setColumns({
      ...columns,
      [result.source.droppableId]: sourceColumn,
      [result.destination.droppableId]: destinationColumn,
    });
  };

  return (
    <div className="m-2 md:m-10 p-5 md:p-8 bg-white dark:bg-secondary-dark-bg rounded-xl shadow">

      <Header category="App" title="Kanban" />

      <DragDropContext onDragEnd={onDragEnd}>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

          {Object.entries(columns).map(([columnId, cards]) => (

            <Droppable
              key={columnId}
              droppableId={columnId}
            >

              {(provided) => (

                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-gray-100 dark:bg-main-dark-bg rounded-xl p-4 min-h-[600px]"
                >

                  {/* Column Header */}

                  <div className="flex items-center justify-between mb-5">

                    <h2 className="font-bold text-lg">
                      {columnId}
                    </h2>

                    <span
                      className={`w-3 h-3 rounded-full ${columnColors[columnId]}`}
                    />

                  </div>

                  {/* Cards */}

                  {cards.map((card, index) => (

                    <Draggable
                      key={card.Id}
                      draggableId={card.Id.toString()}
                      index={index}
                    >

                      {(provided) => (

                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white dark:bg-secondary-dark-bg rounded-xl shadow p-4 mb-4 border-l-4 border-blue-500 hover:shadow-lg transition"
                        >

                          <div className="flex justify-between">

                            <h3 className="font-semibold">
                              #{card.Id}
                            </h3>

                            <span className="text-xs text-gray-500">
                              {card.Assignee}
                            </span>

                          </div>

                          <p className="mt-3 text-gray-600 dark:text-gray-300">
                            {card.Summary}
                          </p>

                          <div className="flex justify-between items-center mt-4">

                            <span
                              className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700"
                            >
                              {card.Type}
                            </span>

                            <span className="text-xs text-gray-500">
                              Priority {card.Priority}
                            </span>

                          </div>

                        </div>

                      )}

                    </Draggable>

                  ))}

                  {provided.placeholder}

                </div>

              )}

            </Droppable>

          ))}

        </div>

      </DragDropContext>

    </div>
  );
};

export default Kanban;