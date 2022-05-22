function whichSeason() {
    const month = document.getElementById("month").value.toLowerCase();
    let season;
    switch (month) {
        case "march":
        case "april":
        case "may":
            season = "Spring";
            break;
        case "june":
        case "july":
        case "august":
            season = "Summer";
            break;
        case "september":
        case "october":
        case "november":
            season = "Fall";
            break;
        case "december":
        case "january":
        case "february":
            season = "Winter";
            break;
        default:
            season = "Invalid month";
    }

    document.getElementById("answer").innerHTML = season;
}


