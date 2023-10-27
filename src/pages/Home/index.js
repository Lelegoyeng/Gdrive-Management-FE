import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Home = () => {
    const [AccountInformation, setAccountInformation] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/accounts');
                setAccountInformation(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    const ArrayCards = [
        {
            Account: 'Bot-1',
            Storage: '2GB'
        },
        {
            Account: 'Bot-2',
            Storage: '2GB'
        },
    ]

    const totalStorage = AccountInformation?.reduce((a, b) => a + b.storageQuota?.totalStorage, 0);
    const bytes = totalStorage;
    const gigabytes = (bytes / 1073741824).toFixed(2);
    return (
        <div>
            <Navbar totalStorage={gigabytes} />
            <div className='justify-center px-10 py-10 h-full w-full min-h-screen min-w-screen bg-gray-800 overflow-y-auto'>
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-3 gap-4">
                    {
                        AccountInformation?.map((value, index) => {
                            const Usage = (value?.storageQuota?.usageStorage / 1073741824).toFixed(2);
                            const Storage = (value?.storageQuota?.totalStorage / 1073741824).toFixed(2);

                            return <div key={index} className="bg-black text-white font-bold p-4 rounded-md shadow-md break-all">
                                <div className='flex justify-between'>
                                    <div><img className='rounded' src={value?.checkConnection?.photoLink}></img></div>
                                    <div className='mr-1 ml-1'>Google Account</div>
                                    <div> </div>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <div className='w-1/4'>Email</div>
                                    <div className='mr-2 ml-2'>:</div>
                                    <div className='w-3/4'> {value?.checkConnection?.emailAddress}</div>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <div className='w-1/4'>Usage</div>
                                    <div className='mr-2 ml-2'>:</div>
                                    <div className='w-3/4'> {Usage} GB </div>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <div className='w-1/4'>Storage</div>
                                    <div className='mr-2 ml-2'>:</div>
                                    <div className='w-3/4'> {Storage} GB </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default Home;
