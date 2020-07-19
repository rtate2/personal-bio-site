import utilities from '../../helpers/utilities';

import './home.scss';

const homePage = () => {
  const domString = `
  <div class="box" style="padding-bottom: 100px; padding-top: 900px;">
          <div class="text">
              <h2>Hey, welcome to my site!</h2>
          </div>
      </div>
  `;
  utilities.printToDom('home', domString);
};

export default { homePage };
