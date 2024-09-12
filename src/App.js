import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { ColorModeContext, useMode} from "./theme";
import { CssBaseline, ThemeProvider} from "@mui/material";
import { useState } from "react";
import './App.css';

import  Dashboard  from "./scenes/dashboard";
import  NuevoServicio  from "./scenes/servicios/nuevoservicio";
import  ClienteServicio  from "./scenes/servicios/clienteservicio";
// import { Contacts } from "./scenes/contacts";
// import { Bar } from "./scenes/bar";
// import { Form } from "./scenes/form";
// import { Line } from "./scenes/line";
// import { Pie } from "./scenes/pie";
// import { FAQ } from "./scenes/faq";
// import { Geography } from "./scenes/geography";
// import { Calendar } from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(false);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar isSidebar={isSidebar}/>
          <main className="content" >
          <Topbar setIsSidebar={setIsSidebar}/>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/nuevoservicio" element={<NuevoServicio/>} />
              <Route path="/clienteservicio" element={<ClienteServicio/>} />
              {/* <Route path="/" element={<Invoices/>} /> */}
              {/* <Route path="/" element={<Form/>} /> */}
              {/* <Route path="/" element={<Bar/>} /> */}
              {/* <Route path="/" element={<Pie/>} /> */}
              {/* <Route path="/" element={<Line/>} /> */}
              {/* <Route path="/" element={<FAQ/>} /> */}
              {/* <Route path="/" element={<Geography/>} /> */}
              {/* <Route path="/" element={<Calendar/>} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
