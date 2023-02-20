import { useState } from 'react';

const useCopyUidToClipboard = () => {
    const [copied, setCopied] = useState(false);

    const copyUidToClipboard = (user) => {
        navigator.clipboard.writeText(user.uid);
        setCopied(true);
        setTimeout(function () {
            setCopied(false);
        }, 1000);
    };

    return { copyUidToClipboard, copied };
};

export default useCopyUidToClipboard;
