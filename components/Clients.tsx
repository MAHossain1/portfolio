import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { testimonials } from '@/data';

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading mt-4">
        Kind Words from <span className="text-purple">Clients</span>
      </h1>
      <div className="mt-10  flex flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          speed="slow"
          direction="right"
        />
      </div>
    </div>
  );
};

export default Clients;
