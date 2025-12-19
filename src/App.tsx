import Text from "./components/text"

export default function App() {
  return (
    <div>
      <Text as="h1" variant="body-sm-bold" className="text-pink-base"> Ola Mundo !</Text>
      <Text as="h1" className="text-green-base"> Ola Mundo !</Text>
      <Text as="h1" variant="body-md-bold"> Ola Mundo !</Text>
    </div>
  )
}
