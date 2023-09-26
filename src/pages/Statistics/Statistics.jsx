import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const Statistics = () => {

    const [myDonations, setMyDonations] = useState(0);


    useEffect(() => {

        let storedMyDonations = localStorage.getItem('donation');

        if (storedMyDonations !== null) {
            storedMyDonations = JSON.parse(storedMyDonations);
            console.log(storedMyDonations.length);

            setMyDonations(storedMyDonations.length);
        }
    }, []);
    let totalDonations = 12 - myDonations;
    // console.log(myDonations);
    // console.log(totalDonations);

    const data = [
        { name: 'My Donation', value: myDonations },
        { name: 'Total Donation', value: totalDonations },
    ];

    const COLORS = ['#0088FE', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className='flex flex-col h-[70vh] justify-center items-center mx-auto'>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={180}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className='flex flex-col lg:flex-row gap-10 items-center mt-10 text-xl text-center font-semibold'>
                <div className='flex items-center gap-5'>
                    <p>My Donation</p>
                    <div className='w-[100px] h-[15px] bg-[#0088FE]'></div>
                </div>
                <div className='flex items-center gap-5'>
                    <p>Total Donation</p>
                    <div className='w-[100px] h-[15px] bg-[#FF8042]'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;