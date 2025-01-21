async function getFeed() {
    try {
        const feed = document.querySelector("#feed");

        const podcastFeed = await fetch("https://podcast.jocandlew.com/@JocAndLewTalkToYou/feed.xml")
        const text = await podcastFeed.text()
        const xmlDoc = new DOMParser().parseFromString(text, 'text/xml');

        xmlDoc.querySelectorAll("item").forEach(item => {
            const icon = item.getElementsByTagName("itunes:image")[0].getAttribute("href");
            const title = item.querySelector("title").textContent;
            const description = item.querySelector("description").textContent;
            const link = item.querySelector("link").textContent;
            const date = new Date(item.querySelector("pubDate").textContent).toLocaleDateString();

            feed.innerHTML += `
            <article>
                <a class="card"" href="${link}" target="_blank">
                    <div class="card-header">
                        <img class="card-title-image" src=${icon} alt="cover art" >
                        <span class="card-title">${title}</span>
                    </div>
                    ${description}
                    <p class="card-footer">Podcast - ${date}</p>
                </a>
            </article>
            `
        })


    } catch (e) {
        console.log(e.message);
    }

}

getFeed()


