const fs = require('fs-extra');

function loadPhoto(dir) {
    const FileName= fs.readdirSync(dir);
    const files = [];
    FileName.forEach(file => {
        if(!fs.statSync(`${dir}/${file}`).isDirectory())
            files.push(file);
    });
    // console.log(files);
    return files;
}

module.exports ={

    loadPhoto,
}


