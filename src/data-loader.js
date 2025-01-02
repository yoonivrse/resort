const { getYouTubeVideosByKeyword } = require('./youtube');
const { loadPhoto } = require("./load-photo");


async function getDataSource() {
    const files = await loadPhoto('static/pics');
    const youtubeVideos = await getYouTubeVideosByKeyword('셈폴나');

    return { 
        files,
        youtubeVideos,
    }
}

module.exports = {
    getDataSource,
  };