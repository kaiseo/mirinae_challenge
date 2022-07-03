import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Analyzer from "./Pages/Analyzer";
import History from "./Pages/History";
import Navbar from "./Components/Layouts/Navbar";
import {UserContext} from "./UserContext";
import {UserData} from "./UserData";

const App = () => {
    return (

        <Router>
            <UserContext.Provider value={UserData}>
                <Navbar/>

                <Routes>

                    <Route path="/"
                        element={<Analyzer/>}/>
                    <Route path="/#"
                        element={<Analyzer/>}/>
                    <Route path="/history"
                        element={<History/>}/>

                </Routes>
            </UserContext.Provider>
        </Router>


    );
};

export default App;
