import React from "react";

import Nav from "./Nav";
import DelOne from "./Del_one"
import FilterHogs from "./Filter_hogs"
import SortHogs from "./Sort_hogs";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<DelOne hogs={hogs} />
			<FilterHogs hogs={hogs} />
			<SortHogs hogs={hogs } />
		</div>
	);
}

export default App;
