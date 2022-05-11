const robotsss = [
    {
        robot: "Beks",
        sped: 150,
        forse: 200
    },
    {
        robot: "Azam",
        sped: 120,
        forse:130
    },
    {
        robot: "Maks",
        sped: 100,
        forse: 120
    }
]
const filteredrobotsss = robotsss.filter(robotsss =>robotsss.sped > 100,robotsss =>robotsss.forse> 120)
console.log(filteredrobotsss)