import React from 'react'

const LoadingScreen = () => {
    return (
        <div>
            <div className="bg-purple-lightest p-4 text-grey-darker">
                <div className="loading mb-4 uppercase text-pink-dark font-bold text-sm text-center">Loading...</div>
                <div className="lds-dual-ring flex justify-center items-center"></div>
            </div>
        </div>
    )
}

export default LoadingScreen;