import "./App.css";
import { useState } from "react";
import { useRef } from "react";

function App() {
	const keywordRef = useRef<HTMLInputElement>(null);
	const defaultMovieList = [
		{
			id: 1,
			name: "君の名は",
			overview:
				"1ヵ月後に1000年ぶりの彗星が訪れる日本。東京で暮らす平凡な男子高校生・瀧と、山深い村で都会の生活に憧れながら憂鬱な日々を送る女子高校生・三葉。つながりのない2人は、互いが入れ替わる不思議な夢を見る。",
		},
		{
			id: 2,
			name: "ハウルの動く城",
		},
		{
			id: 3,
			name: "もののけ姫",
		},
		{
			id: 4,
			name: "バック・トゥ・ザ・フューチャー",
		},
	];

	const [filteredMovieList, setFilteredMovieList] = useState(defaultMovieList);

	function handleSearch() {
		const filteredMovies = defaultMovieList.filter((movie) =>
			movie.name.includes(keywordRef.current?.value || ""),
		);

		setFilteredMovieList(filteredMovies);
	}

	return (
		<div>
			<input type="text" placeholder="映画を検索" ref={keywordRef} />
			<button onClick={handleSearch}>検索</button>
			{filteredMovieList.map((movie) => (
				<div key={movie.id}>
					<h2>{movie.name}</h2>
					<p>{movie.overview}</p>
				</div>
			))}
		</div>
	);
}

export default App;
