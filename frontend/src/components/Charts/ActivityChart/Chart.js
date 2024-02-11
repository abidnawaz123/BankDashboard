import ReactApexChart from "react-apexcharts";

export const ActivityChart = () => {
    const chartData = {
        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    };
    return (
        <ReactApexChart options={chartData.options}
            style={{ backgroundColor: "white", borderRadius: 20 }}
            series={chartData.series}
            height={350}
            type="donut"
        />
    )

}
