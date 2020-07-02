import utilities from '../../helpers/utilities';

import './home.scss';

const homePage = () => {
  const domString = `
  <div class="box">
          <div class="text">
              <h1>Hey, I'm Randy Tate</h1>
              <h2> Welcome to my site </h2>
          </div>
      </div>
  `;
  utilities.printToDom('home', domString);
};

export default { homePage };
