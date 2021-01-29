const InitState = {
  matrics: [
    {
      id: 1,
      name: "Ongoing metric",
      total: 31454,
    },
    {
      id: 1,
      name: "Past metric",
      total: 2344,
    },
    {
      id: 1,
      name: "Missed metric",
      total: 14224,
    },
    {
      id: 1,
      name: "Failed metric",
      total: 635,
    },
    {
      id: 1,
      name: "Pending metric",
      total: 11334,
    },
  ],
};
const matricsCounter = (state = InitState, action) => {
  switch (action.type) {
    case "matrics_count":
      return {
        matrics: action.data,
      };

    default:
      return state;
  }
};

export default matricsCounter;
