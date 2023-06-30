import React from 'react';
import LineVertical from './components/LineVertical';
import Card from './layouts/Card';
import projects from './assets/projects.json';

const App = () => {
   const cards = projects;

   return (
      <main>
        <section className='projects_cards' id='projects_cards'>
          <LineVertical />
          {cards.map((card, index) => (
            <Card key={index} {...card} className={index % 2 === 0 ? 'left_card' : 'right_card'} />
          ))}
        </section>
         {/* <Form /> */}
      </main>
   );
};


export default App;

// https://www.adhamdannaway.com/about
// Header
// about + visage
// section competence
// section experiences
// section formulaire
// footer

// https://polipot.github.io/mySite.html