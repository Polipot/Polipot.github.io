import React, { useEffect, useState } from 'react';

const LineVertical = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const calculateScrollHeight = () => {
      const section = document.getElementById('projects_cards');
      const rect = section.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const sectionTop = rect.top + scrollTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      const scrollPosition = Math.max(scrollTop - sectionTop, 0);
      const totalSectionScrollLength = sectionBottom - sectionTop;

      const scrollPositionInPercent = (scrollPosition / totalSectionScrollLength) * 100;

      setScrollHeight(scrollPositionInPercent);
    }

    window.addEventListener('scroll', calculateScrollHeight);

    return () => window.removeEventListener('scroll', calculateScrollHeight);
  }, []);

  return (
    <div className='scroll-line-container'>
      <div 
        className='scroll-line' 
        style={{ height: `${scrollHeight}%` }} 
      />
    </div>
  );
};

export default LineVertical;
