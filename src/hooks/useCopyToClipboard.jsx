import { useState } from 'react';

const useCopyToClipboard = () => {
    const [copied, setCopied] = useState(false);

    const copyUidToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(function () {
            setCopied(false);
        }, 1000);
    };

    return { copyUidToClipboard, copied };
};

export default useCopyToClipboard;
