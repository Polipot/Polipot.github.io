import React, { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    // Ici vous pouvez ajouter la logique pour envoyer le mail.
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre email"
      />
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default Form;
