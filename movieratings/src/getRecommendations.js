/*
1: Make it so the information (movie data) in filteredRecommendations (movieArr) 
can be saved to state without causing infinite loop 
2: map over said array to create cards

(right now the useRecommendations function runs 4 times -> 1st nothing in noFilter, then 1 arr , 2 arr, 3 arr) WHY??
*/

export async function getRecommendations(likedTitles, watchedTitles) {
  const IDs = likedTitles.map(item => {
    return item.id;
  });

  const list1 = await fetch(`https://api.themoviedb.org/3/movie/
        ${IDs[0]}/recommendations?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&page=1`).then(
    res => res.json()
  );

  const list2 = await fetch(`https://api.themoviedb.org/3/movie/
        ${IDs[1]}/recommendations?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&page=1`).then(
    res => res.json()
  );

  const list3 = await fetch(`https://api.themoviedb.org/3/movie/
        ${IDs[2]}/recommendations?api_key=ab85baadb27ea7d2eade887860bfa03a&language=en-US&page=1`).then(
    res => res.json()
  );

  const results = [...list1.results, ...list2.results, ...list3.results];
  const ids = results.map(x => x.id);

  const resultsWithoutDupes = [...new Set(results.map(x => x.id))]
    .filter(id => !watchedTitles.find(movie => movie.id === id))
    .map(id => results.find(x => x.id === id));

  const rankings = resultsWithoutDupes
    .map(x => {
      const id = x.id;
      const count = ids.filter(y => y === id).length;
      return { movie: x, count };
    })
    .sort((a, b) => {
      if (a.count !== b.count) return b.count - a.count;
      return b.movie.vote_average - a.movie.vote_average;
    })
    .map(x => x.movie)
    .slice(0, 10);

  return rankings;
}
