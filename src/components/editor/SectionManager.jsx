
import React, { useState } from 'react';
import AddSectionModal from './AddSectionModal';

export default function SectionManager({
  containerOrder,
  setContainerOrder,
  shiftOrderPosition
}) {
  const [isAddOpen, setIsAddOpen] = useState(false);

  const addSection = (section) => {
    if (!containerOrder.includes(section)) {
      setContainerOrder([...containerOrder, section]);
    }
  };

  const deleteSection = (section) => {
    setContainerOrder(
      containerOrder.filter((item) => item !== section)
    );
  };

  return (
    <div
      className="p-5 rounded-xl border shadow-md space-y-3"
      style={{
        backgroundColor: '#C5A496',
        borderColor: '#B39183'
      }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900">
          📐 Canvas Flow Architecture Controller
        </h3>

        <button
          onClick={() => setIsAddOpen(true)}
          className="px-3 py-1.5 rounded-lg bg-stone-900 text-white font-bold text-xs hover:bg-stone-700"
        >
          + Add Section
        </button>
      </div>

      <div className="space-y-2">
        {containerOrder.map((section, idx) => (
          <div
            key={section}
            className="flex justify-between items-center p-2.5 rounded text-xs font-semibold bg-stone-800 text-white border border-stone-900"
          >
            <span>{section} Grid Section Node Block</span>

            <div className="flex gap-1">
              <button
                onClick={() => shiftOrderPosition(idx, 'up')}
                className="p-1 px-2 rounded bg-stone-700 text-white hover:bg-stone-600"
              >
                ▲
              </button>

              <button
                onClick={() => shiftOrderPosition(idx, 'down')}
                className="p-1 px-2 rounded bg-stone-700 text-white hover:bg-stone-600"
              >
                ▼
              </button>

              <button
                onClick={() => deleteSection(section)}
                className="p-1 px-2 rounded bg-red-600 text-white hover:bg-red-700"
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>

      <AddSectionModal
        isOpen={isAddOpen}
        activeSections={containerOrder}
        onAddSection={addSection}
        onClose={() => setIsAddOpen(false)}
      />
    </div>
  );
}

