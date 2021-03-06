import React from "react";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Sorter from "./containers/Sorter/Sorter";
import PathFinder from "./containers/PathFinder/PathFinder";
import Traverser from "./containers/Traverser/Traverser"
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

import "./App.css";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#05668d',
			light: '#c3e5f3'
		},
	},
	typography: {
		fontFamily: [ 'Work Sans' ].join(','), 
		fontSize: 16
	}
})

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Toolbar />
				<Switch>			
					<Route path="/path-finding" component={PathFinder} />
					<Route path="/traversing" component={Traverser} />
					<Route path="/sorting" component={Sorter} />
					<Redirect to="/sorting" />
				</Switch>
			</ThemeProvider>
		</div>
	);
}

export default App;
