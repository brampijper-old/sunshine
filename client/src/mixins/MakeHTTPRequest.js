export const MakeHTTPRequest = function() {
        this.get = function(url, callback) {
            const Http = new XMLHttpRequest();
            Http.open("GET", url);
            Http.send();
            
            Http.onreadystatechange=function() {
                if(this.readyState==4 && this.status==200) {
                    callback(JSON.parse(Http.responseText))
                }
            }
        }
}