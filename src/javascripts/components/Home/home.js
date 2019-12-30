import utilities from '../../helpers/utilities';

import './home.scss';

const homePage = () => {
  const domString = `
  <h2>"I never lose. I either win or I learn." - Nelson Mandela</h2>
  `;
  utilities.printToDom('home', domString);
};

export default { homePage };
