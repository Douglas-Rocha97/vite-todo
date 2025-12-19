import Text from "./components/text"
import Icon from "./components/icons"
import TrashIcon from "./assets/icons/Trash-Regular.svg?react"
import CheckIcon from "./assets/icons/Check-Regular.svg?react"
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react"
import PlusIcon from "./assets/icons/Plus-Regular.svg?react"
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import XIcon from "./assets/icons/X-Regular.svg?react"

export default function App() {
  return (
    <div className="grid gap-3">
      <div>
        <Text as="h1" variant="body-sm-bold" className="text-pink-base"> Ola Mundo !</Text>
        <Text as="h1" className="text-green-base"> Ola Mundo !</Text>
        <Text as="h1" variant="body-md-bold"> Ola Mundo !</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className= "fill-pink-base"/>
        <Icon svg={CheckIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate/>
        <Icon svg={XIcon} />
      </div>
    </div>
  )
}
