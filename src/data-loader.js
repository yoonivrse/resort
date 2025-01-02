const { getYouTubeVideosByKeyword } = require('./youtube');
const { loadPhoto } = require("./load-photo");


async function getDataSource() {
    const files = await loadPhoto('./static');
    const ids = [
        'gBjFy0NH1dg',
    ]
    const youtubeVideos = await getYouTubeVideosByKeyword(ids);

    return { 
        files,
        youtubeVideos,
    }
}

module.exports = {
    getDataSource,
  };