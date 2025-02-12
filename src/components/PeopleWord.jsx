import React from 'react';

const PeopleWords = () => {
  const people = [
    {
      image: '/images/person1.jpg', // Replace with actual image path
      name: 'Stephen Smith',
      title: 'Co Founder',
      quote: 'elusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.',
      rating: 5,
    },
    {
      image: '/images/person2.jpg', // Replace with actual image path
      name: 'Lorem Robinson',
      title: 'Manager',
      quote: 'elusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.',
      rating: 3,
    },
    {
      image: '/images/person3.jpg', // Replace with actual image path
      name: 'Saddika Alard',
      title: 'Team Leader',
      quote: 'elusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.',
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i} className={`star ${i < rating ? 'filled' : ''}`}></span>);
    }
    return stars;
  };

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Great Words From People</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {people.map((person, index) => (
          <div className="w-full sm:w-80 md:w-96 bg-gray-100 rounded-lg p-6 shadow-md" key={index}>
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
              <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{person.name}</h3>
              <p className="text-gray-600 italic mb-4">{person.title}</p>
              <p className="mb-4">"{person.quote}"</p>
              <div className="flex justify-center">
                {renderStars(person.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleWords;
