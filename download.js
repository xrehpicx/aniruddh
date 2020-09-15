const fs = require('fs')
const axios = require('axios');
const request = require('request')

const download = (url, path, callback = () => { }) => {
    request.head(url, (err, res, body) => {
        request(url)
            .pipe(fs.createWriteStream(path))
            .on('close', callback)
    })
}


(async () => {

    const edges = (await axios.get(`https://www.instagram.com/aniruddh.gs/?__a=1`)).data.graphql.user.edge_owner_to_timeline_media.edges
    console.log(edges)
    let counter = 0;


    for (let edge of edges) {
        if (counter <= 10) {
            console.log(edge.node.display_url)
            download(edge.node.display_url, './src/images/image' + counter + '.png');
            counter++;
        }
    }

})()