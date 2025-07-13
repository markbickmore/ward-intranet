import React, { useState } from 'react';

export const SacramentProgram = () => {
  const [program, setProgram] = useState({
    presiding: '',
    conducting: '',
    openingHymn: '',
    invocation: '',
    sacramentHymn: '',
    musicalNumber: '',
    speakers: [{ name: '', topic: '' }],
    closingHymn: '',
    benediction: '',
  });

  const updateField = (field, value) => {
    setProgram(prev => ({ ...prev, [field]: value }));
  };

  const updateSpeaker = (index, field, value) => {
    const updatedSpeakers = [...program.speakers];
    updatedSpeakers[index][field] = value;
    setProgram(prev => ({ ...prev, speakers: updatedSpeakers }));
  };

  const addSpeaker = () => {
    setProgram(prev => ({
      ...prev,
      speakers: [...prev.speakers, { name: '', topic: '' }]
    }));
  };

  const handleSubmit = () => {
    console.log('Program submitted:', program);
    // Next: save to Firestore or API
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Sacrament Program Builder</h1>

      {['presiding', 'conducting', 'openingHymn', 'invocation', 'sacramentHymn', 'musicalNumber', 'closingHymn', 'benediction'].map(field => (
        <div key={field} className="mb-3">
          <label className="block font-medium capitalize">{field.replace(/([A-Z])/g, ' $1')}:</label>
          <input
            type="text"
            value={program[field]}
            onChange={(e) => updateField(field, e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
      ))}

      <div className="mb-3">
        <label className="block font-medium">Speakers:</label>
        {program.speakers.map((speaker, index) => (
          <div key={index} className="mb-2 grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Name"
              value={speaker.name}
              onChange={(e) => updateSpeaker(index, 'name', e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Topic"
              value={speaker.topic}
              onChange={(e) => updateSpeaker(index, 'topic', e.target.value)}
              className="border p-2 rounded"
            />
          </div>
        ))}
        <button onClick={addSpeaker} className="text-sm underline mt-2">+ Add Speaker</button>
      </div>

      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Program
      </button>
    </div>
  );
};

