import React, { useEffect, useState } from 'react';

function useTitle(title) {

    const [status, setStatus] = useState(true);
    useEffect(() => {
        try {
            document.title = title;
        } catch (error) {
            setStatus(false);
        }

    }, [title])

    return status;
}


export default useTitle;