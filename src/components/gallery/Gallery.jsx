import Slider from '../slider/Slider'
import './gallery.css'
import { imagesData } from '../../constants/data'


const Gallery = () => {
  return (
    <Slider slides={imagesData}/>

  )
}

export default Gallery