import React from 'react';

const Head = () => {
    return (
        <>
            <nav class="bg-red-700 p-4">
                <div class="container mx-auto flex justify-between items-center">

                    <a href="#" class="text-white text-2xl font-bold">Boat Headphones</a>

                    <ul class="flex space-x-4">
                        <li><a href="#" class="text-white hover:text-gray-300">Home</a></li>
                        <li><a href="#" class="text-white hover:text-gray-300">Products</a></li>
                        <li><a href="#" class="text-white hover:text-gray-300">About</a></li>
                        <li><a href="#" class="text-white hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Head;