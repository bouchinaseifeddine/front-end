import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

export const QrCodeReader = ({setKey}) => {
    const [data, setData] = useState('No result');

    const handleScan = (result) => {
        if (result) {
            setData(result.text);
            setKey(result.text)
        }
    };

    const handleError = (err) => {
        console.error(err);
    };

    const previewStyle = {
        height: 240,
        width: 320,
    };

    return (
        <div
            className='flex flex-col gap-3 items-center'
        >
            <QrScanner
                delay={300}
                style={previewStyle}
                onError={handleError}
                onScan={handleScan}
            />
            <p
                className='text-light-on-surface dark:text-dark-on-surface'
            >{data}</p>
        </div>
    );
};

export default QrCodeReader;
