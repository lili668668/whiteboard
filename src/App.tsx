import { ReactSketchCanvas } from 'react-sketch-canvas'

function App() {
  return (
    <ReactSketchCanvas
      width={`${window.innerWidth}px`}
      height={`${window.innerHeight}px`}
      strokeWidth={4}
      strokeColor="red"
    />
  )
}

export default App
