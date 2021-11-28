const getRandomGreeting = async () => {
  const response = await fetch('http://localhost:3000/greeting');

  return response.json();
};

export default getRandomGreeting;
