let templist = [1,2,3,4,5,6,67,88,9,0,5,7,9,2,3,4,5,6,7,8,9,0,1,2]
let ctx = document.getElementById("myChart").getContext("2d");
    let myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "12am",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12pm",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11pm",
            ],
            datasets: [
                {
                    label: "Temperature",
                    data: templist,
                    backgroundColor: "rgba(153,205,1,0.6)",
                },
            ],
        },
    });