import React, { useState } from "react";
import { updateUserRoutine } from "../services/userService";

const RoutineTracker = ({ userId, routineId }: { userId: string; routineId: string }) => {
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);

  const handleSave = async () => {
    await updateUserRoutine(userId, routineId, { weight, reps });
    alert("Datos guardados correctamente");
  };

  return (
    <div>
      <h2>Seguimiento de Rutina</h2>
      <label>
        Peso (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </label>
      <label>
        Repeticiones:
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(Number(e.target.value))}
        />
      </label>
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default RoutineTracker;
