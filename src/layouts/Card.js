import React from 'react';
// import itchioLogo from '/itchio_logo.svg';

const Card = ({ title, image, description, count, links, roles, className }) => {
   const divLinks = links.flatMap((linkObj) => {
      return Object.entries(linkObj).map(([key, value]) => {
        if (value !== "") {
          return (
            <a href={value} key={key}>
              <img src={`/icons/${key}_logo.svg`} alt={`logo ${key}`} className='icon'></img>
            </a>
          );
        }
      });
   });

   const divTags = roles.map((value, key) => {
      return (
         <div className='tag'>
           {value}
         </div>
      )
   });

   return (
      <div className={`card ${className}`}>
         <div className='card_header'>
            <h2>{title}</h2>
            <div className='card_count'>
               <p>{count}</p>
               <i className="fa-solid fa-user"></i>
            </div>
         </div>
         <div className='card_container'>
            <div className='card_descriptif'>
               <div>
                  <div className='tags_container'>
                     {divTags}
                  </div>
                  <div>
                     <p>{description}</p>
                  </div>
               </div>

               <div>
                  {divLinks}
               </div>
            </div>
            <div className='card_illustration'>
               <img src={image} alt={`image descriptif de ${title}`}></img>
            </div>
         </div>
      </div>
   );
};

export default Card;
