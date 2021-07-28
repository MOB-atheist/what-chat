import React from 'react';

interface SliderContextInterface {
    current: number;
}

type ContextType = {
    state: SliderContextInterface;
    next: (action: any) => void;
    prev: (action: any) => void;
};

const defaults = {
    current: 0,
}

const SliderContext = React.createContext<ContextType>({
    state: defaults,
    next: () => {},
    prev: () => {}
});

export default SliderContext