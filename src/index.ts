import { sayHello } from './main'
import './style.css'
import image from '../public/assets/test.jpg'
import { User } from './user'
console.log("work")
sayHello("Brain")

const setImage = () => {
  const imgTag = document.createElement("img");
  imgTag.src = image;
  document.body.append(imgTag);
}

const user = new User("Yura", '19');

console.log(user.copy());

document.body.innerHTML = "<p> Hello world </p>"
setImage();