import { fetch } from "../utils/fetch"
import { URL } from "../utils/constant"
import { Resolution, NewBatchAnimeResult, filterNonNull } from "../utils/types"
import { downloadAllEpisode } from "./downloadAll"

export const newBatchAnime = async (resolution: Resolution): Promise<NewBatchAnimeResult[]> => {
    const $ = await fetch(URL)

    const element = $("div.rseries .rapi .venz ul").eq(1).children("li")

    const promises = element.toArray().map(async (e, i) => {
        const title = $(e).find(".jdlflm").text()
        let url = $(e).find(".thumb a").attr("href")
        const eps = $(e).find("div.epz").text()
        const score = $(e).find("div.epztipe").text()
        let cover = $(e).find("div.thumbz img").attr("src")
        let download = null

        if (url) {
            download = (await downloadAllEpisode(url, resolution))
        }
        if (url && cover) {
            return {
                number: i,
                title,
                totalEpisode: eps,
                score,
                cover,
                download
            }
        }
    })
    const result = (await Promise.all(promises)).filter(
        filterNonNull
    ) as unknown as NewBatchAnimeResult[]
    return result
}