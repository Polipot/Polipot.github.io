import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LineVertical from './components/LineVertical';
import Card from './layouts/Card';
// import Form from './layouts/Form';

const App = () => {
  const cards = [
    { title: 'Titre 1', image: '/chemin/vers/image1.jpg', description: 'Description 1' },
    { title: 'Titre 2', image: '/chemin/vers/image2.jpg', description: 'Description 2' },
  ];

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
