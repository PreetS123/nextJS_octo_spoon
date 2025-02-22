import Results from "@/Components/Results";
import React from "react";

const SearchPage = async ({ params }) => {
  const searchTerm =   params.searchTerm;
  if (!searchTerm) {
    throw new Error("Search term is missing");
  }
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`;
  const res = await fetch(url, { next: { revalidate: 10 } });

  if (!res.ok) {
    const errorText = await res.text(); // Log raw response in case of an error
    console.error("API Error Response:", errorText);
    throw new Error("Failed to fetch");
  }

  const data = await res.json();
  const results = data?.results || [];
  console.log("lkklks",results)

  return (
    <div>
      {results && results.length == 0 && (
        <h1 className="text-center pt-6">No such results found</h1>
      )}

      {results.length > 0 && <Results results={results} />}
    </div>
  );
};

export default SearchPage;
