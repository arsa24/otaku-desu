const { error, log } = require("console");
const {
  infoAnime,
  search,
  ongoing,
  downloadBatch,
  downloadEpisode,
  downloadAllEpisode,
} = require("./dist");

search("nekopara")
  .then((result) => {
    log(result[0].download);
  })
  .catch((err) => {
    error(err);
  });
