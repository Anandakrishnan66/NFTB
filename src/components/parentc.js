import {Child} from './childc'
export const Parent = () =>{
    const greetp= (childn)=>
  {
      alert(`hello parent ${childn}`)
  }
  return <Child  greet={greetp}></Child>
}