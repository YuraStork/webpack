import {sayHello} from './main'
import './style.css'
import image from '../public/assets/test.jpg'
console.log("work")
sayHello("Brain")

const setImage = ()=>{
  const imgTag = document.createElement("img");
  imgTag.src = image;
  document.body.append(imgTag);
}

document.body.innerHTML = "<p> Hello world </p>"
setImage();