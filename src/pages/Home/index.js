import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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

    console.log(AccountInformation)
    return (
        <div>
            <Navbar />
            <div className='justify-center px-10 py-10 h-full w-full min-h-screen min-w-screen bg-gray-800 overflow-y-auto'>
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-6 gap-4">
                    {
                        AccountInformation?.AccountConnected?.map((value, index) => {
                            return <div key={index} className="bg-black text-white font-bold p-4 rounded-md shadow-md">
                                Card {value}
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
