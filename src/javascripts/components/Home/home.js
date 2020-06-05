import utilities from '../../helpers/utilities';

import './home.scss';

const homePage = () => {
  const domString = `
  <h2>"Whatever you do, work at it with all your heart, as working for the Lord, not for human master.” Colossians 3:23</h2>
  `;
  utilities.printToDom('home', domString);
};

export default { homePage };
