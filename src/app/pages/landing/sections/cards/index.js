import React from "react";
import { Container } from "./styles";
import Card from "app/components/card";

const dataCards = [
  {
    id: 0,
    title: "Consult",
    icon: "icon-1",
    desc:
      "Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movvements or a framework social impact low-hanging fruit. Save the world compelling revolutionary progress."
  },
  {
    id: 1,
    title: "Design",
    icon: "icon-2",
    desc:
      "Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable."
  },
  {
    id: 2,
    title: "Develop",
    icon: "icon-3",
    desc:
      "Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking."
  },
  {
    id: 3,
    title: "Marketing",
    icon: "icon-4",
    desc:
      "Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective."
  },
  {
    id: 4,
    title: "Manage",
    icon: "icon-5",
    desc:
      "Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social."
  },
  {
    id: 5,
    title: "Evolve",
    icon: "icon-6",
    desc:
      "Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer."
  }
];

const Cards = () => {
  return (
    <Container>
      {dataCards.map(item => (
        <Card
          key={item.id}
          title={item.title}
          icon={item.icon}
          desc={item.desc}
        />
      ))}
    </Container>
  );
};

export default Cards;
