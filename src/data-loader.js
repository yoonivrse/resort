const { getYouTubeVideosByKeyword } = require('./youtube');
const { loadPhoto } = require("./load-photo");


async function getDataSource() {
    const files = await loadPhoto('./static');
    const youtubeVideos = await getYouTubeVideosByKeyword('한국');

    return { 
        files,
        youtubeVideos,
    }
}

module.exports = {
    getDataSource,
  };