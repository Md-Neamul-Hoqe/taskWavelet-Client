const Brand = () => {
    return (
        <div className="btn btn-ghost text-xl flex items-center h-min text-transparent bg-clip-text bg-gradient-to-tl from-cyan-200 from-40% via-gray-400 via-10% to-10% to-amber-100">
          <a
            className="sr-only"
            href="https://www.flaticon.com/free-icons/to-do"
            title="to-do icons">
            To-do icons created by Freepik - Flaticon
          </a>
          <img src="/to-do-list.png" width="60" height="60" alt="logo"  />
          <p className="max-md:sr-only">TaskWavelet</p>
        </div>
    );
};

export default Brand;