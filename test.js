const { infoAnime } = require("./dist");
infoAnime("https://otakudesu.cloud/anime/nekopr-sub-indo/")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
