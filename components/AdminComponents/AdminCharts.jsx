import React, { useState } from "react";
import Chart from "react-apexcharts";

const AdminCharts = () => {
    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: "basic-area"
            },
            xaxis: {
                categories: [2019, 2020, 2021, 2022, 2023]
            }
        },
        series: [
            {
                name: "کاربران",
                data: [1500, 1750, 1600, 1900, 2100]
                
            },
            {
                name: "خریدار",
                data: [500, 504 , 834, 356, 902],
            }
        ]
    });

    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="area"
                        height="400"
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminCharts;
