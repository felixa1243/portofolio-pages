import useFetch from './utils/useFetch';
export default function App() {
  const {data,loading,error}=useFetch('https://api.themoviedb.org/3/trending/tv/week?api_key=d98d9ec83d01ed0457725059cf6f58ef&page=1');
	return (
		<>
	  {
		  data?.results?.map(movie=>movie.name)
	  }
		</>
  )
}
