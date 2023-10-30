import React, { useState } from "react";
import Chart from "react-apexcharts";

const AdminPieChart = () => {
    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: "basic-pie"
            },
            labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
        },
        series: [30, 40, 45, 50, 49, 60, 70, 91]
    });

    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="pie"
                        width="400"
                        height="600"
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminPieChart;
