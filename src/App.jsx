import { useState } from 'react'
import { Logo } from './components/Logo'
import { Btn } from './components/Btn'
import { MainSearchBar } from './components/MainSearchBar'
import { useEffect } from "react";
import { fetchPopularShow } from "./api/popularShows";
import { HomePage } from './pages/HomePage';

function App() {

  return <HomePage/>
}

export default App
