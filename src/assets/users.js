export const users = [
  {
    id: 1,
    username: "Namir",
    firstName: "Albert",
    lastName: "Nasibullin",
    email: "email@gmail.com",
    followers: 5,
    isAdmin: true,
    twoots: [
      { id: 1, content: "initil twoot!" },
      { id: 2, content: "second Twoot" },
      { id: 3, content: "third Twoot" },
    ],
  },
  {
    id: 2,
    username: "ThirdComander",
    firstName: "Robert",
    lastName: "Lohkamp",
    email: null,
    followers: 7,
    isAdmin: false,
    twoots: [
      { id: 1, content: "It's only terrible to have nothing to wait for" },
      {
        id: 2,
        content:
          "I've not much interest in the important things of life. Only in the beautiful things. Just this lilac here makes me happy",
      },
      {
        id: 3,
        content:
          "To forget is the secret of eternal youth. One grows old only through memory. There's much too little forgetting",
      },
    ],
  },
  {
    id: 3,
    username: "thirdUser",
    firstName: "user",
    lastName: "third",
    email: "three@email.com",
    followers: 10,
    isAdmin: false,
    twoots: [],
  },
  {
    id: 4,
    username: "Green Day",
    firstName: "day",
    lastName: "green",
    email: "greenDay@email.com",
    followers: 30,
    isAdmin: false,
    twoots: [
      { id: 1, content: "Stray heart" },
      { id: 2, content: "Boulevards of broken dreams" },
      { id: 3, content: "21 Guns" },
      { id: 4, content: "Holiday" },
    ],
  },
];
