//https://github.com/hugonun/discordid2date

function convert(id) {
    var unix = getUnixTime(id.toString());
    var timestamp = moment.unix(unix/1000) //find unix timestamp in seconds then divided by 1000
    document.getElementById("date12").innerHTML = timestamp.format('LLLL') //full time, date and hour
    document.getElementById("timezone").innerHTML = moment.tz.guess(); //guess user current timezone
    document.getElementById("ago").innerHTML = timestamp.fromNow(); // current year - year in timestamp
}

//convert Unix timestamp to readable date

function getUnixTime(id){
    var binary = (+id).toString(2) //convert discord id to string, has to be string
    var unixbin = ''
    var unix = ''
    var moment = 64 - binary.length
    unixbin = binary.substring(0, 42-moment)
    unix = parseInt(unixbin, 2) + 1420070400000 //Discord timestamp
    return unix
}