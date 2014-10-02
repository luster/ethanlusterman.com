/*
 * Ethan Lusterman
 *
 */

var url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=guitarkid7427&limit=1&nowplaying=true&api_key=1a7a23392098d573fb78db3fdadd28e7&format=json';
var x;

function genHtml(track, isNowPlaying) {
    var html;

    if (isNowPlaying) {
        html = 'Now Playing<br>';
        html += '<img src="img/icon_eq.gif">';
    } else {
        html = 'Last Played<br>';
    }
    html += '<a href="' + track.url + '">';
    html += track.artist["\#text"];
    html += ' - ';
    html += track.name;
    html += '</a>';
    $('#lastfm').append(html);
    return;
}

$.ajax({
    type: "GET",
    url: url,
    dataType: 'jsonp',
    success: function(d) {
        var track = d.recenttracks.track;
        if (track.length > 1) {
            track = track[0];
        }
        if ("\@attr" in track) {
            // song is currently playing
            genHtml(track, true);
            return;
        }
        // last song is not currently playing
        genHtml(track, false);
        return;
    }
});

// mount the crowd
// problems with my debit card
