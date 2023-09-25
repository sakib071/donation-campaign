
const Banner = () => {
    return (
        <div className="h-[70vh]">
            <div className="hero h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
