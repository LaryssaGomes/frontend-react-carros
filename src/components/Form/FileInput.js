import React from 'react';

const FileInput = ({ onSelectFile, mimeTypes }) => {
    const onChange = (e) => {
        const file = e.target.files[0];
        console.log('onChange ->', file, mimeTypes);

        if (mimeTypes.indexOf(file.type) !== -1) {
            console.log('Valido');
            onSelectFile(e.target.files[0]);
        } else {
            console.log('Não valido');
        }
    };
    return (
        <div className="file-input">
            <input type="file" className="input" onChange={onChange}/>
        </div>
    );
};

export default FileInput;