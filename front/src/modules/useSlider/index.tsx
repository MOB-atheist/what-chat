import React, { useState } from 'react'
import WrappedSlider from './Slider'

interface SliderContextInterface {
  current: number
}

type ContextType = {
  state: SliderContextInterface
  next: (action: any) => void
  prev: (action: any) => void
}

const defaults = {
  current: 0
}

const SliderContext = React.createContext<ContextType>({
  state: defaults,
  next: () => {},
  prev: () => {}
})

const useSlider = () => {
  const [state, setState] = useState({
    current: 0
  })

  const next = () => {
    console.log('next')
  }

  const prev = () => {
    console.log('prev')
  }

  const goTo = (index: number) => {
    console.log(index)
  }

  const Slider = () => {
    return (
      <SliderContext.Provider
        value={{
          state,
          next,
          prev
        }}
      >
        <WrappedSlider />
      </SliderContext.Provider>
    )
  }

  return {
    next,
    prev,
    goTo,
    Slider
  }
}

export default useSlider
