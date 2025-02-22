import Results from "@/Components/Results";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParam }) => {
  const genre = searchParam?.genre || 'fetchTrending';

  const url = `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`;

    const res = await fetch(url,{next:{revalidate:60}});

    if (!res.ok) {
      const errorText = await res.text(); // Log raw response in case of an error
      console.error("API Error Response:", errorText);
      throw new Error('Failed to fetch');
    }

    const data = await res.json();
    const results = data?.results || [];

    // console.log(results);

    return (
      <div>
        <Results results={results} />
      </div>
    );
 
};

export default Home;
