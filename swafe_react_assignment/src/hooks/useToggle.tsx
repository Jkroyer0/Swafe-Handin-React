import { useState } from 'react';

export function useToggle() {
    const [isToggled, setIsToggled] = useState(false);
    const toggleOff = () => setIsToggled(false);
    const toggle = () => setIsToggled((curr) => !curr);
    return { isToggled, toggleOff, toggle };
}