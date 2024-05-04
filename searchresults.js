let ctx = document.getElementById("myChart").getContext("2d");
    let myChart = new Chart(ctx, {
        type: "bar",
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
                    data: [2, 9, 3, 17, 6, 3, 7, 1, 9, 5, 12, 5, 6, 5, 4, 3, 2, 1, 0, 5, 10, 15, 20, 0],
                    backgroundColor: "rgba(153,205,1,0.6)",
                },
            ],
        },
    });