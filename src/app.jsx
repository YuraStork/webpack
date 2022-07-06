import { sayHello } from './main'
import './style.css'
import image from '../public/assets/test.jpg'
import { User } from './user'

export const App = () => {
  console.log("work")
  sayHello("Brain")
  const user = new User("Yura", '19');
  console.log(user.copy());

  return <div>
    <img src={image} alt="" />
    <p> Hello world</p>
  </div>
}