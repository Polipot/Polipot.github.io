import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LineVertical from './components/LineVertical';
import Card from './layouts/Card';
import projects from './assets/projects.json';
// import Form from './layouts/Form';

const App = () => {
  const cards = projects;

  return (
    <>
      <Header />
      <main>
        <section className='projects_cards' id='projects_cards'>
          {/* <LineVertical /> */}
          {cards.map((card, index) => (
            <Card key={index} {...card} className={index % 2 === 0 ? 'left_card' : 'right_card'} />
          ))}
        </section>
        <section>
          {/* <Form /> */}
        </section>
      </main>
      <Footer />
    </>
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