const dummyData = [
  {
    "numb": 1,
    "question": "Who is known as the 'Father of Geometry'?",
    "options": ["A. Euclid", "B. Archimedes", "C. Pythagoras", "D. Aristotle"],
    "answer": "A. Euclid"
  },
  {
    "numb": 2,
    "question": "Which planet is known as the 'Red Planet'?",
    "options": ["A. Venus", "B. Jupiter", "C. Mars", "D. Saturn"],
    "answer": "C. Mars"
  },
  {
    "numb": 3,
    "question": "Who was the first President of the United States?",
    "options": ["A. Thomas Jefferson", "B. George Washington", "C. Abraham Lincoln", "D. John Adams"],
    "answer": "B. George Washington"
  },
  {
    "numb": 4,
    "question": "What year did World War I begin?",
    "options": ["A. 1914", "B. 1918", "C. 1939", "D. 1941"],
    "answer": "A. 1914"
  },
  {
    "numb": 5,
    "question": "Which country is known as the 'Land of the Rising Sun'?",
    "options": ["A. China", "B. Japan", "C. India", "D. South Korea"],
    "answer": "B. Japan"
  },
  {
    "numb": 6,
    "question": "What is the capital of France?",
    "options": ["A. London", "B. Paris", "C. Rome", "D. Madrid"],
    "answer": "B. Paris"
  },
  {
    "numb": 7,
    "question": "Who wrote 'Romeo and Juliet'?",
    "options": ["A. William Shakespeare", "B. Charles Dickens", "C. Jane Austen", "D. Mark Twain"],
    "answer": "A. William Shakespeare"
  },
  {
    "numb": 8,
    "question": "Which river is the longest in the world?",
    "options": ["A. Nile", "B. Amazon", "C. Mississippi", "D. Yangtze"],
    "answer": "A. Nile"
  },
  {
    "numb": 9,
    "question": "Who developed the theory of relativity?",
    "options": ["A. Isaac Newton", "B. Albert Einstein", "C. Stephen Hawking", "D. Galileo Galilei"],
    "answer": "B. Albert Einstein"
  },
  {
    "numb": 10,
    "question": "What is the chemical symbol for gold?",
    "options": ["A. Au", "B. Ag", "C. Cu", "D. Fe"],
    "answer": "A. Au"
  },
  {
    "numb": 11,
    "question": "Which city hosted the 2016 Summer Olympics?",
    "options": ["A. London", "B. Rio de Janeiro", "C. Beijing", "D. Tokyo"],
    "answer": "B. Rio de Janeiro"
  },
  {
    "numb": 12,
    "question": "Who is the author of 'To Kill a Mockingbird'?",
    "options": ["A. Harper Lee", "B. J.K. Rowling", "C. Ernest Hemingway", "D. F. Scott Fitzgerald"],
    "answer": "A. Harper Lee"
  },
  {
    "numb": 13,
    "question": "What is the largest organ in the human body?",
    "options": ["A. Brain", "B. Liver", "C. Skin", "D. Heart"],
    "answer": "C. Skin"
  },
  {
    "numb": 14,
    "question": "Who painted the Mona Lisa?",
    "options": ["A. Leonardo da Vinci", "B. Vincent van Gogh", "C. Pablo Picasso", "D. Michelangelo"],
    "answer": "A. Leonardo da Vinci"
  },
  {
    "numb": 15,
    "question": "Which country is known as the 'Land of the Midnight Sun'?",
    "options": ["A. Norway", "B. Sweden", "C. Finland", "D. Iceland"],
    "answer": "A. Norway"
  },
  {
    "numb": 16,
    "question": "What is the capital of Australia?",
    "options": ["A. Sydney", "B. Canberra", "C. Melbourne", "D. Perth"],
    "answer": "B. Canberra"
  },
  {
    "numb": 17,
    "question": "What is the chemical symbol for water?",
    "options": ["A. Wa", "B. Wo", "C. W", "D. H2O"],
    "answer": "D. H2O"
  },
  {
    "numb": 18,
    "question": "Who is known as the 'Queen of Soul'?",
    "options": ["A. Aretha Franklin", "B. Beyoncé", "C. Whitney Houston", "D. Mariah Carey"],
    "answer": "A. Aretha Franklin"
  },
  {
    "numb": 19,
    "question": "Which ocean is the largest?",
    "options": ["A. Atlantic Ocean", "B. Pacific Ocean", "C. Indian Ocean", "D. Arctic Ocean"],
    "answer": "B. Pacific Ocean"
  },
  {
    "numb": 20,
    "question": "What is the capital of Brazil?",
    "options": ["A. Rio de Janeiro", "B. Brasília", "C. São Paulo", "D. Salvador"],
    "answer": "B. Brasília"
  },
  {
    "numb": 21,
    "question": "Who painted the 'Starry Night'?",
    "options": ["A. Vincent van Gogh", "B. Pablo Picasso", "C. Leonardo da Vinci", "D. Michelangelo"],
    "answer": "A. Vincent van Gogh"
  },
  {
    "numb": 22,
    "question": "What is the chemical symbol for oxygen?",
    "options": ["A. O", "B. O2", "C. Ox", "D. O3"],
    "answer": "A. O"
  },
  {
    "numb": 23,
    "question": "Which planet is known as the 'Blue Planet'?",
    "options": ["A. Earth", "B. Jupiter", "C. Neptune", "D. Uranus"],
    "answer": "A. Earth"
  },
  {
    "numb": 24,
    "question": "Who wrote '1984'?",
    "options": ["A. George Orwell", "B. Aldous Huxley", "C. J.R.R. Tolkien", "D. Ray Bradbury"],
    "answer": "A. George Orwell"
  },
  {
    "numb": 25,
    "question": "What is the capital of Russia?",
    "options": ["A. Moscow", "B. Saint Petersburg", "C. Novosibirsk", "D. Yekaterinburg"],
    "answer": "A. Moscow"
  },
  {
    "numb": 26,
    "question": "Who discovered penicillin?",
    "options": ["A. Alexander Fleming", "B. Louis Pasteur", "C. Jonas Salk", "D. Marie Curie"],
    "answer": "A. Alexander Fleming"
  },
  {
    "numb": 27,
    "question": "Which country is known as the 'Land of the Thunder Dragon'?",
    "options": ["A. Bhutan", "B. Nepal", "C. Tibet", "D. Mongolia"],
    "answer": "A. Bhutan"
  },
  {
    "numb": 28,
    "question": "What is the chemical symbol for carbon?",
    "options": ["A. Co", "B. C", "C. Ca", "D. Cr"],
    "answer": "B. C"
  },
  {
    "numb": 29,
    "question": "Who wrote 'Hamlet'?",
    "options": ["A. William Shakespeare", "B. Charles Dickens", "C. Jane Austen", "D. Mark Twain"],
    "answer": "A. William Shakespeare"
  },
  {
    "numb": 30,
    "question": "What is the capital of Canada?",
    "options": ["A. Toronto", "B. Ottawa", "C. Vancouver", "D. Montreal"],
    "answer": "B. Ottawa"
  },
  {
    "numb": 31,
    "question": "Which is the largest mammal?",
    "options": ["A. Blue Whale", "B. Elephant", "C. Giraffe", "D. Hippopotamus"],
    "answer": "A. Blue Whale"
  },
  {
    "numb": 32,
    "question": "Who wrote 'The Great Gatsby'?",
    "options": ["A. F. Scott Fitzgerald", "B. Ernest Hemingway", "C. Harper Lee", "D. J.K. Rowling"],
    "answer": "A. F. Scott Fitzgerald"
  },
  {
    "numb": 33,
    "question": "What is the chemical symbol for iron?",
    "options": ["A. Ir", "B. Fe", "C. Fi", "D. In"],
    "answer": "B. Fe"
  },
  {
    "numb": 34,
    "question": "Who composed the 'Moonlight Sonata'?",
    "options": ["A. Ludwig van Beethoven", "B. Wolfgang Amadeus Mozart", "C. Johann Sebastian Bach", "D. Franz Schubert"],
    "answer": "A. Ludwig van Beethoven"
  },
  {
    "numb": 35,
    "question": "Which country is known as the 'Land of the Pharaohs'?",
    "options": ["A. Greece", "B. Egypt", "C. Rome", "D. Mesopotamia"],
    "answer": "B. Egypt"
  },
  {
    "numb": 36,
    "question": "What is the capital of Argentina?",
    "options": ["A. Buenos Aires", "B. Santiago", "C. Rio de Janeiro", "D. Brasília"],
    "answer": "A. Buenos Aires"
  },
  {
    "numb": 37,
    "question": "Who wrote 'War and Peace'?",
    "options": ["A. Leo Tolstoy", "B. Fyodor Dostoevsky", "C. Vladimir Nabokov", "D. Anton Chekhov"],
    "answer": "A. Leo Tolstoy"
  },
  {
    "numb": 38,
    "question": "What is the chemical symbol for silver?",
    "options": ["A. Si", "B. Ag", "C. Au", "D. Sn"],
    "answer": "B. Ag"
  },
  {
    "numb": 39,
    "question": "Who painted the 'Mona Lisa'?",
    "options": ["A. Leonardo da Vinci", "B. Vincent van Gogh", "C. Pablo Picasso", "D. Michelangelo"],
    "answer": "A. Leonardo da Vinci"
  },
  {
    "numb": 40,
    "question": "Which planet is known as the 'Green Planet'?",
    "options": ["A. Earth", "B. Mars", "C. Venus", "D. Uranus"],
    "answer": "C. Venus"
  },
  {
    "numb": 41,
    "question": "What is the capital of South Africa?",
    "options": ["A. Johannesburg", "B. Cape Town", "C. Pretoria", "D. Durban"],
    "answer": "C. Pretoria"
  },
  {
    "numb": 42,
    "question": "Who discovered the theory of evolution?",
    "options": ["A. Charles Darwin", "B. Gregor Mendel", "C. Alfred Russel Wallace", "D. Louis Pasteur"],
    "answer": "A. Charles Darwin"
  },
  {
    "numb": 43,
    "question": "Which is the largest continent by land area?",
    "options": ["A. Africa", "B. Asia", "C. North America", "D. Europe"],
    "answer": "B. Asia"
  },
  {
    "numb": 44,
    "question": "What is the chemical symbol for potassium?",
    "options": ["A. K", "B. Po", "C. Pt", "D. Pb"],
    "answer": "A. K"
  },
  {
    "numb": 45,
    "question": "Who wrote 'The Catcher in the Rye'?",
    "options": ["A. J.D. Salinger", "B. Harper Lee", "C. F. Scott Fitzgerald", "D. Ernest Hemingway"],
    "answer": "A. J.D. Salinger"
  },
  {
    "numb": 46,
    "question": "What is the capital of Spain?",
    "options": ["A. Barcelona", "B. Madrid", "C. Valencia", "D. Seville"],
    "answer": "B. Madrid"
  },
  {
    "numb": 47,
    "question": "Who discovered electricity?",
    "options": ["A. Benjamin Franklin", "B. Thomas Edison", "C. Nikola Tesla", "D. Alexander Graham Bell"],
    "answer": "A. Benjamin Franklin"
  },
  {
    "numb": 48,
    "question": "What is the chemical symbol for sodium?",
    "options": ["A. Na", "B. So", "C. Sn", "D. Ni"],
    "answer": "A. Na"
  },
  {
    "numb": 49,
    "question": "Who painted 'The Last Supper'?",
    "options": ["A. Leonardo da Vinci", "B. Vincent van Gogh", "C. Pablo Picasso", "D. Michelangelo"],
    "answer": "A. Leonardo da Vinci"
  },
  {
    "numb": 50,
    "question": "Which river is the longest in Africa?",
    "options": ["A. Nile", "B. Congo", "C. Niger", "D. Zambezi"],
    "answer": "A. Nile"
  },
  {
    "numb": 51,
    "question": "What is the capital of Italy?",
    "options": ["A. Rome", "B. Milan", "C. Venice", "D. Florence"],
    "answer": "A. Rome"
  },
  {
    "numb": 52,
    "question": "Who wrote 'The Lord of the Rings'?",
    "options": ["A. J.R.R. Tolkien", "B. C.S. Lewis", "C. George R.R. Martin", "D. J.K. Rowling"],
    "answer": "A. J.R.R. Tolkien"
  },
  {
    "numb": 53,
    "question": "What is the chemical symbol for calcium?",
    "options": ["A. Ca", "B. C", "C. Cl", "D. Co"],
    "answer": "A. Ca"
  },
  {
    "numb": 54,
    "question": "Which country is known as the 'Emerald Isle'?",
    "options": ["A. Scotland", "B. Ireland", "C. Iceland", "D. New Zealand"],
    "answer": "B. Ireland"
  },
  {
    "numb": 55,
    "question": "Who painted 'The Scream'?",
    "options": ["A. Edvard Munch", "B. Vincent van Gogh", "C. Pablo Picasso", "D. Claude Monet"],
    "answer": "A. Edvard Munch"
  },
  {
    "numb": 56,
    "question": "What is the chemical symbol for hydrogen?",
    "options": ["A. H", "B. He", "C. Ho", "D. Hy"],
    "answer": "A. H"
  },
  {
    "numb": 57,
    "question": "Which country is known as the 'Land of the Long White Cloud'?",
    "options": ["A. New Zealand", "B. Australia", "C. Canada", "D. United Kingdom"],
    "answer": "A. New Zealand"
  },
  {
    "numb": 58,
    "question": "Who wrote 'Pride and Prejudice'?",
    "options": ["A. Jane Austen", "B. Emily Brontë", "C. Charlotte Brontë", "D. Virginia Woolf"],
    "answer": "A. Jane Austen"
  },
  {
    "numb": 59,
    "question": "What is the chemical symbol for nitrogen?",
    "options": ["A. N", "B. Ni", "C. Ne", "D. Na"],
    "answer": "A. N"
  },
  {
    "numb": 60,
    "question": "Who composed 'The Four Seasons'?",
    "options": ["A. Antonio Vivaldi", "B. Johann Sebastian Bach", "C. Ludwig van Beethoven", "D. Wolfgang Amadeus Mozart"],
    "answer": "A. Antonio Vivaldi"
  },
  {
    "numb": 61,
    "question": "What is the capital of Germany?",
    "options": ["A. Berlin", "B. Munich", "C. Frankfurt", "D. Hamburg"],
    "answer": "A. Berlin"
  },
  {
    "numb": 62,
    "question": "Who wrote 'The Odyssey'?",
    "options": ["A. Homer", "B. Virgil", "C. Sophocles", "D. Plato"],
    "answer": "A. Homer"
  },
  {
    "numb": 63,
    "question": "What is the chemical symbol for helium?",
    "options": ["A. He", "B. H", "C. Ho", "D. Hy"],
    "answer": "A. He"
  },
  {
    "numb": 64,
    "question": "Which country is known as the 'Land of Fire and Ice'?",
    "options": ["A. Iceland", "B. Greenland", "C. Finland", "D. Norway"],
    "answer": "A. Iceland"
  },
  {
    "numb": 65,
    "question": "Who painted 'The Persistence of Memory'?",
    "options": ["A. Salvador Dalí", "B. Pablo Picasso", "C. Vincent van Gogh", "D. Claude Monet"],
    "answer": "A. Salvador Dalí"
  },
  {
    "numb": 66,
    "question": "What is the chemical symbol for lead?",
    "options": ["A. L", "B. Pb", "C. Pd", "D. Li"],
    "answer": "B. Pb"
  },
  {
    "numb": 67,
    "question": "Which river is the longest in South America?",
    "options": ["A. Amazon", "B. Paraguay", "C. Orinoco", "D. Uruguay"],
    "answer": "A. Amazon"
  },
  {
    "numb": 68,
    "question": "Who wrote 'Moby-Dick'?",
    "options": ["A. Herman Melville", "B. Nathaniel Hawthorne", "C. Edgar Allan Poe", "D. Mark Twain"],
    "answer": "A. Herman Melville"
  },
  {
    "numb": 69,
    "question": "What is the chemical symbol for tin?",
    "options": ["A. Ti", "B. Ta", "C. Sn", "D. Tn"],
    "answer": "C. Sn"
  },
  {
    "numb": 70,
    "question": "What is the capital of China?",
    "options": ["A. Beijing", "B. Shanghai", "C. Guangzhou", "D. Hong Kong"],
    "answer": "A. Beijing"
  },
  {
    "numb": 71,
    "question": "Who composed 'Eine kleine Nachtmusik'?",
    "options": ["A. Wolfgang Amadeus Mozart", "B. Ludwig van Beethoven", "C. Johann Sebastian Bach", "D. Franz Schubert"],
    "answer": "A. Wolfgang Amadeus Mozart"
  },
  {
    "numb": 72,
    "question": "What is the chemical symbol for uranium?",
    "options": ["A. Ur", "B. U", "C. Un", "D. Ub"],
    "answer": "B. U"
  },
  {
    "numb": 73,
    "question": "Which country is known as the 'Land of the Rising Sun'?",
    "options": ["A. China", "B. Japan", "C. India", "D. South Korea"],
    "answer": "B. Japan"
  },
  {
    "numb": 74,
    "question": "Who wrote 'Don Quixote'?",
    "options": ["A. Miguel de Cervantes", "B. Gabriel García Márquez", "C. Jorge Luis Borges", "D. Isabel Allende"],
    "answer": "A. Miguel de Cervantes"
  },
  {
    "numb": 75,
    "question": "What is the chemical symbol for silver?",
    "options": ["A. Si", "B. Ag", "C. Au", "D. Sn"],
    "answer": "B. Ag"
  },
  {
    "numb": 76,
    "question": "Which planet is known as the 'Red Planet'?",
    "options": ["A. Venus", "B. Jupiter", "C. Mars", "D. Saturn"],
    "answer": "C. Mars"
  },
  {
    "numb": 77,
    "question": "What is the capital of South Korea?",
    "options": ["A. Seoul", "B. Busan", "C. Incheon", "D. Daegu"],
    "answer": "A. Seoul"
  },
  {
    "numb": 78,
    "question": "Who discovered the theory of relativity?",
    "options": ["A. Isaac Newton", "B. Albert Einstein", "C. Stephen Hawking", "D. Galileo Galilei"],
    "answer": "B. Albert Einstein"
  },
  {
    "numb": 79,
    "question": "What is the chemical symbol for gold?",
    "options": ["A. Au", "B. Ag", "C. Cu", "D. Fe"],
    "answer": "A. Au"
  },
  {
    "numb": 80,
    "question": "Which river is the longest in the world?",
    "options": ["A. Nile", "B. Amazon", "C. Mississippi", "D. Yangtze"],
    "answer": "A. Nile"
  },
  {
    "numb": 81,
    "question": "Who wrote 'Romeo and Juliet'?",
    "options": ["A. William Shakespeare", "B. Charles Dickens", "C. Jane Austen", "D. Mark Twain"],
    "answer": "A. William Shakespeare"
  },
  {
    "numb": 82,
    "question": "What is the capital of India?",
    "options": ["A. Mumbai", "B. New Delhi", "C. Kolkata", "D. Chennai"],
    "answer": "B. New Delhi"
  },
  {
    "numb": 83,
    "question": "Which country is known as the 'Land of the Midnight Sun'?",
    "options": ["A. Norway", "B. Sweden", "C. Finland", "D. Iceland"],
    "answer": "A. Norway"
  },
  {
    "numb": 84,
    "question": "Who painted the 'Starry Night'?",
    "options": ["A. Vincent van Gogh", "B. Pablo Picasso", "C. Leonardo da Vinci", "D. Michelangelo"],
    "answer": "A. Vincent van Gogh"
  },
  {
    "numb": 85,
    "question": "What is the chemical symbol for water?",
    "options": ["A. Wa", "B. Wo", "C. W", "D. H2O"],
    "answer": "D. H2O"
  },
  {
    "numb": 86,
    "question": "Which country is known as the 'Land of the Thunder Dragon'?",
    "options": ["A. Bhutan", "B. Nepal", "C. Tibet", "D. Mongolia"],
    "answer": "A. Bhutan"
  },
  {
    "numb": 87,
    "question": "What is the chemical symbol for carbon?",
    "options": ["A. Co", "B. C", "C. Ca", "D. Cr"],
    "answer": "B. C"
  },
  {
    "numb": 88,
    "question": "Who is known as the 'Queen of Soul'?",
    "options": ["A. Aretha Franklin", "B. Beyoncé", "C. Whitney Houston", "D. Mariah Carey"],
    "answer": "A. Aretha Franklin"
  },
  {
    "numb": 89,
    "question": "What is the chemical symbol for oxygen?",
    "options": ["A. O", "B. O2", "C. Ox", "D. O3"],
    "answer": "A. O"
  },
  {
    "numb": 90,
    "question": "Which country is known as the 'Land of the Pharaohs'?",
    "options": ["A. Greece", "B. Egypt", "C. Rome", "D. Mesopotamia"],
    "answer": "B. Egypt"
  },
  {
    "numb": 91,
    "question": "What is the capital of Argentina?",
    "options": ["A. Buenos Aires", "B. Santiago", "C. Rio de Janeiro", "D. Brasília"],
    "answer": "A. Buenos Aires"
  },
  {
    "numb": 92,
    "question": "Who wrote 'War and Peace'?",
    "options": ["A. Leo Tolstoy", "B. Fyodor Dostoevsky", "C. Vladimir Nabokov", "D. Anton Chekhov"],
    "answer": "A. Leo Tolstoy"
  },
  {
    "numb": 93,
    "question": "What is the chemical symbol for potassium?",
    "options": ["A. K", "B. Po", "C. Pt", "D. Pb"],
    "answer": "A. K"
  },
  {
    "numb": 94,
    "question": "Which planet is known as the 'Blue Planet'?",
    "options": ["A. Earth", "B. Jupiter", "C. Neptune", "D. Uranus"],
    "answer": "A. Earth"
  },
  {
    "numb": 95,
    "question": "What is the capital of Russia?",
    "options": ["A. Moscow", "B. Saint Petersburg", "C. Novosibirsk", "D. Yekaterinburg"],
    "answer": "A. Moscow"
  },
  {
    "numb": 96,
    "question": "Who discovered penicillin?",
    "options": ["A. Alexander Fleming", "B. Louis Pasteur", "C. Jonas Salk", "D. Marie Curie"],
    "answer": "A. Alexander Fleming"
  },
  {
    "numb": 97,
    "question": "Which country is known as the 'Land of the Thunder Dragon'?",
    "options": ["A. Bhutan", "B. Nepal", "C. Tibet", "D. Mongolia"],
    "answer": "A. Bhutan"
  },
  {
    "numb": 98,
    "question": "What is the chemical symbol for carbon?",
    "options": ["A. Co", "B. C", "C. Ca", "D. Cr"],
    "answer": "B. C"
  },
  {
    "numb": 99,
    "question": "Who wrote 'Hamlet'?",
    "options": ["A. William Shakespeare", "B. Charles Dickens", "C. Jane Austen", "D. Mark Twain"],
    "answer": "A. William Shakespeare"
  },
  {
    "numb": 100,
    "question": "What is the capital of Canada?",
    "options": ["A. Toronto", "B. Ottawa", "C. Vancouver", "D. Montreal"],
    "answer": "B. Ottawa"
  }
]


  

  module.exports = dummyData