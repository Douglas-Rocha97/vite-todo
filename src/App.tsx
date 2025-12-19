import Text from "./components/text"
import trashIcon from "./assets/icons/Trash-Regular.svg"

export default function App() {
  return (
    <div className="grid gap-3">
      <div>
        <Text as="h1" variant="body-sm-bold" className="text-pink-base"> Ola Mundo !</Text>
        <Text as="h1" className="text-green-base"> Ola Mundo !</Text>
        <Text as="h1" variant="body-md-bold"> Ola Mundo !</Text>
      </div>

      <div className="flex gap-1">
        <img src={trashIcon} />
      </div>
    </div>
  )
}
