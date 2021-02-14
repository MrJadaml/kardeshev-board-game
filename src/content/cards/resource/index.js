import { ore } from './ore';
import { credit } from './credit';
import { science } from './science';

const getResourceCard = (type, value, isOneTimeUse) => {
  const resourceCard = {
    cardId: 1000,
    name: '',
    description: `( ${value} )`,
    cardType: 'resource',
    resources: [
      { [type]: value },
    ],
    isOneTimeUse,
  }

  return resourceCard;
}

export { ore, credit, science, getResourceCard };
