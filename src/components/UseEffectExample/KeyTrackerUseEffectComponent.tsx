import React, {useEffect, useState} from 'react';

export const KeyTrackerUseEffectComponent = () => {
    const [keyValue, setKeyValue] = useState('')

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setKeyValue(state => state + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [keyValue])
    return (
        <div>
            {'Text key: ' + keyValue}
        </div>
    );
};

