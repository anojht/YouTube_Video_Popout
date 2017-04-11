var video_id = 'foo';

video_id = window.location.search.split('v=')[1];
var ampersandPosition = video_id.indexOf('&');
if (ampersandPosition != -1) {
    video_id = video_id.substring(0, ampersandPosition);
}
video_id = 'http://www.youtube.com/watch_popup?v=' + video_id;
window.open(video_id, 'name', 'location=no,scrollbars=no,status=no,toolbar=no,resizable=yes');
