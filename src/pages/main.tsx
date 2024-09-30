import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <h1 className='font-bold text-3xl'>Printer Nota</h1>
      <p>Gunakan Website ini untuk print notamu</p>
      <div className='divider' />
      <h2 className='text-xl'>Pilih nota:</h2>
      <br />
      <div className='grid grid-cols-3 gap-4'>
        <div className='card bg-base-100 w-96 shadow-xl'>
          <figure>
            <img src='/photos/1.jpg' alt='Nota' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>UD MAJU JAYA</h2>
            <p>Jl A. Yani 37 Bangsalsari, Jember</p>
            <br />
            <div className='card-actions'>
              <Link to='/receipt1'>
                <button className='btn btn-primary'>Buat Nota</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
