import React from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
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

    ArrayCards.push({
        Account: 'newAccount',
        Storage: '2GB'
    });

    return (
        <div>
            <Navbar />
            <div className='justify-center px-10 py-10 h-full w-full min-h-screen min-w-screen bg-gray-800 overflow-y-auto'>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {
                        ArrayCards.map((value, index) => {
                            if (value.Account !== 'newAccount') {
                                return <div key={index} className="bg-black text-white font-bold p-4 rounded-md shadow-md">
                                    Card {value.Account}
                                </div>
                            }
                            if (value.Account === 'newAccount') {
                                return <div
                                    key={index}
                                    className="bg-black text-white font-bold p-4 rounded-md shadow-md cursor-pointer hover:bg-blue-500">
                                    <FontAwesomeIcon icon={faPlus} className="mr-2" />

                                    New Account
                                </div>
                            }

                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
