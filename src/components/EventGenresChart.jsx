import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventsGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ['React', 'JavaScript', 'Node', 'JQuery', 'Angular'];
    const colors = ['#b2e2f2', '#f5f5f5', '#a89bb8', '#9fe2bf', '#ff7f50'];

    useEffect(() => {
        setData(getData());
    }, [`${events}`]);

    const getData = () => {
        const data = genres.map((genre) =>{
            const filteredEvents = events.filter((event) => event.summary.includes(genre));
            return {
                name: genre,
                value: filteredEvents.length
            };
        })
      return data;
    };

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
          <text
            x={x}
            y={y}
            fill="#8884d8"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
          </text>
        ) : null;
      };

    return (
        <ResponsiveContainer width="99%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={110}           
            >
                {
                    data.map((entry, index) => (
                        <Cell
                        key={`cell-${index}`}
                        fill={colors[index % colors.length]}/>
                    ))
                }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      );

};

export default EventsGenresChart;