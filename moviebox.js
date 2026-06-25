const searchInput =
  document.getElementById("searchInput");

const searchBtn =
  document.getElementById("searchBtn");

const moviesContainer =
  document.getElementById("moviesContainer");

const API_KEY = "7d90e87f";

async function searchMovies() {

  const movieName =
    searchInput.value.trim();

  if (!movieName) {
    alert("Enter movie name");
    return;
  }

  moviesContainer.innerHTML =
    "<p>Loading...</p>";

  try {

    const response = await fetch(
     `https://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`
);  

    const data = await response.json();
    console.log(data);
    

    if (data.Response === "False") {
      moviesContainer.innerHTML =
        "<h2>No Movies Found</h2>";
      return;
    }

    displayMovies(data.Search);

  } catch (error) {

    moviesContainer.innerHTML =
      "<h2>Something went wrong</h2>";

    console.log(error);
  }
}

function displayMovies(movies) {
    console.log(movies)

  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {

    const card =
      document.createElement("div");

    card.className =
      "bg-slate-900 rounded-2xl overflow-hidden border border-slate-800";

    card.innerHTML = `
      <img
        src="${movie.Poster}"
        alt="${movie.Title}"
        class="w-full h-80 object-cover hover:scale-105 duration-300"
      >

      <div class="p-4">

        <h2 class="font-bold text-lg mb-2">
          ${movie.Title}
        </h2>

        <p class="text-slate-400">
          ${movie.Year}
        </p>

      </div>
    `;

    moviesContainer.appendChild(card);
  });
}

searchBtn.addEventListener(
  "click",
  searchMovies
);

searchInput.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Enter") {
      searchMovies();
    }
  }
);
function debounce(fnc , delay){
   let timer ;
   return function(...args){
       clearTimeout(timer);
       timer = setTimeout(() => {
          fnc(...args)
       }, delay);
   }
}


searchInput.addEventListener(
  "input",  debounce(function(){
    searchMovies()
  } , 1000)
           
);





const trendingMovies = [
  {
    title: "Stranger Things",
    year: 2016,
    image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
  },
  {
    title: "Wednesday",
    year: 2022,
    image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg"
  },
  {
    title: "The Last of Us",
    year: 2023,
    image: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg"
  },
  {
    title: "Breaking Bad",
    year: 2008,
    image: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg"
  },
  {
    title: "Money Heist",
    year: 2017,
    image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg"
  },
  {
    title: "Dark",
    year: 2017,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngmI-24wur9ScMHf72YdbYJ6x4sgDAC8RZg&s"
  },
  {
    title: "The Witcher",
    year: 2019,
    image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"
  },
  {
    title: "Peaky Blinders",
    year: 2013,
    image: "https://image.tmdb.org/t/p/w500/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg"
  },
  {
    title: "Avatar: The Way of Water",
    year: 2022,
    image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
  },
  {
    title: "Oppenheimer",
    year: 2023,
    image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg"
  },
  {
    title: "Barbie",
    year: 2023,
    image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
  },
  {
    title: "Dune: Part Two",
    year: 2024,
    image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg"
  },
  {
    title: "John Wick: Chapter 4",
    year: 2023,
    image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
  },
  {
    title: "The Batman",
    year: 2022,
    image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
  },
  {
    title: "Squid Game",
    year: 2021,
    image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg"
  },
  {
    title: "Loki",
    year: 2021,
    image: "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg"
  },
  {
    title: "The Boys",
    year: 2019,
    image: "https://image.tmdb.org/t/p/w500/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg"
  },
  {
    title: "House of the Dragon",
    year: 2022,
    image: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg"
  },
  {
    title: "Interstellar",
    year: 2014,
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    title: "Inception",
    year: 2010,
    image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
  }
];

 




trendingMovies.forEach((movie) => {

  const card = document.createElement("div");

  card.className =
    "bg-slate-900 rounded-2xl overflow-hidden border border-slate-800  transition duration-300 shadow-lg";

  card.innerHTML = `
    <img
      src="${movie.image}"
      alt="${movie.title}"
      class="w-full h-80 object-cover hover:scale-105 duration-300"
    >

    <div class="p-4">

      <h2 class="text-lg font-bold mb-2 line-clamp-1">
        ${movie.title}
      </h2>

      <p class="text-slate-400">
        ${movie.year}
      </p>

    </div>
  `;

  moviesContainer.appendChild(card);

});