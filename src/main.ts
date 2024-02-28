type Trainer = {
  name: string;
  reputation: number;
  availableSlots: number;
};

type Client = {
  name: string;
  importance: number;
};

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

const trainersSorted = trainers.sort((a, b) => b.reputation - a.reputation);
const clientsSorted = clients.sort((a, b) => b.importance - a.importance);

type TrainerWithClients = Trainer & {
  assignedClients: Client[];
  clientsSatisfaction: number;
};

const trainersWithClients: TrainerWithClients[] = trainersSorted.map(
  (trainer) => ({ ...trainer, assignedClients: [], clientsSatisfaction: 0 }),
);

for (let index = 0; index < clientsSorted.length; index++) {
  const currentClient = clientsSorted[index];

  const availableTrainerIndex = trainersWithClients.findIndex(
    (trainer) => trainer.availableSlots >= 1,
  );

  trainersWithClients[availableTrainerIndex].assignedClients.push(
    currentClient,
  );

  trainersWithClients[availableTrainerIndex].availableSlots--;

  trainersWithClients[availableTrainerIndex].assignedClients.forEach(
    (client) =>
      (trainersWithClients[availableTrainerIndex].clientsSatisfaction +=
        client.importance *
        trainersWithClients[availableTrainerIndex].reputation),
  );
}

const totalSatisfaction = trainersWithClients.reduce((acc, currentTrainer) => {
  return acc + currentTrainer.clientsSatisfaction;
}, 0);

trainersWithClients.forEach(
  ({
    name,
    reputation,
    availableSlots,
    assignedClients,
    clientsSatisfaction,
  }) =>
    console.log({
      name,
      reputation,
      availableSlots,
      assignedClients,
      clientsSatisfaction,
    }),
);

console.log({ totalSatisfaction });
