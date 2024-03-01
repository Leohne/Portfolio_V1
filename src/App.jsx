import Header from "./component/Header"
import Homepage from "./section/Homepage"
import Projet from "./section/Projet"
import project from "./assets/JSON/project.json"
import Presentation from "./section/Presentation"
import Skill from "./section/Skill"
import Footer from "./component/Footer"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faArrowDown } from "@fortawesome/free-solid-svg-icons"



function App() {
  
  library.add(faCheck, faArrowDown)

  return(
    <>
        <Header/>
        <main>
        <Homepage/>
        <Presentation/>
        <Projet project={project}/>
        <Skill/>
        </main>
        <Footer/>
    </>
        )
}
  

export default App
