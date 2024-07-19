import './App.css'
import Counter from './components/Counter/Counter'
import TabSelector from './components/TabSelector/TabSelector'
import SocialMediaPost from './components/SocialMediaPost/SocialMediaPost'
import GameNamePicker from './components/GamePicker/GamePicker'
import ProgressBar from './components/ProgressBar/ProgressBar'
import ImageGallery from './components/ImageGalery/ImageGalery'
function App() {

  return (
    <>
      <Counter/>
      <TabSelector/>
      <SocialMediaPost/>
      <GameNamePicker/>
      <ProgressBar/>
      <ImageGallery/>
    </>
  )
}

export default App
