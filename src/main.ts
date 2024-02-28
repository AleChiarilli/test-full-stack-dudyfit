// Tipados de los objetos
type Trainer = {
  name: string;
  reputation: number;
  availableSlots: number;
};

type Client = {
  name: string;
  importance: number;
};

//Asignación de valor a las claves de Trainer
const trainers: Trainer[] = [
  {
    name: 'A',
    reputation: 4.5,
    availableSlots: 1,
  },
  {
    name: 'B',
    reputation: 3.2,
    availableSlots: 4,
  },
  {
    name: 'C',
    reputation: 1.2,
    availableSlots: 3,
  },
  {
    name: 'D',
    reputation: 3.4,
    availableSlots: 2,
  },
];

//Asignación de valor a las claves de Client
const clients: Client[] = [
  {
    name: 'q',
    importance: 2.6,
  },
  {
    name: 'r',
    importance: 3.7,
  },
  {
    name: 's',
    importance: 8.5,
  },
  {
    name: 't',
    importance: 9.7,
  },
  {
    name: 'u',
    importance: 2.6,
  },
  {
    name: 'v',
    importance: 4.7,
  },
  {
    name: 'w',
    importance: 5.6,
  },
  {
    name: 'x',
    importance: 3.7,
  },
  {
    name: 'y',
    importance: 8.1,
  },
  {
    name: 'z',
    importance: 2.5,
  },
];

//Ordenar los arrays de entrenadores y clientes
const trainersSorted = trainers.sort((a, b) => b.reputation - a.reputation);
const clientsSorted = clients.sort((a, b) => b.importance - a.importance);

// Tipado del nuevo objeto "Entrenador con clientes"
type TrainerWithClients = Trainer & {
  assignedClients: Client[];
  clientsSatisfaction: number;
};

// Asignación de las nuevas claves al objeto
const trainersWithClients: TrainerWithClients[] = trainersSorted.map(
  (trainer) => ({ ...trainer, assignedClients: [], clientsSatisfaction: 0 }),
);

for (let index = 0; index < clientsSorted.length; index++) {
  const currentClient = clientsSorted[index];

  const availableTrainerIndex = trainersWithClients.findIndex(
    (trainer) => trainer.availableSlots >= 1,
  );

  // Verificar si hay al menos un entrenador con plazas disponibles
  const hasAvailableTrainer = trainersWithClients.some(
    (trainer) => trainer.availableSlots >= 1,
  );

  console.log(hasAvailableTrainer);

  if (!hasAvailableTrainer) {
    console.log('No quedan entrenadores con plazas disponibles.');
    break; // Salir del bucle
  }

  //Iteración para asignar el nuevo cliente al entrenador con plaza(s) disponible(s)
  trainersWithClients[availableTrainerIndex].assignedClients.push(
    currentClient,
  );

  trainersWithClients[availableTrainerIndex].availableSlots--;

  // Cálculo de satisfacción (importancia * reputación)
  trainersWithClients[availableTrainerIndex].assignedClients.forEach(
    (client) =>
      (trainersWithClients[availableTrainerIndex].clientsSatisfaction +=
        client.importance *
        trainersWithClients[availableTrainerIndex].reputation),
  );
}

// Cálculo de la satisfacción global
const totalSatisfaction = trainersWithClients.reduce((acc, currentTrainer) => {
  return acc + currentTrainer.clientsSatisfaction;
}, 0);

// Print en consola
// trainersWithClients.forEach(
//   ({
//     name,
//     reputation,
//     availableSlots,
//     assignedClients,
//     clientsSatisfaction,
//   }) =>
//     console.log({
//       name,
//       reputation,
//       availableSlots,
//       assignedClients,
//       clientsSatisfaction,
//     }),
// );

console.log({ totalSatisfaction });
