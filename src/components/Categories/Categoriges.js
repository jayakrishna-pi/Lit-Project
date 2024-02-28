import SecondNavbar from '../SecondNavbar/SecondNavbar';
import'./Categories.css';
const Categories=()=>{
return(
    <div>
        <SecondNavbar />
        <div>
            <h1 className="heading">CATEGORIES</h1>
        </div>
        <div className='bg'>
        <div className='bag-container'>
            <img src="/bag-removebg-preview.png"  className="bag-image" alt="image"/>
            <h1 className='text-bag'>BAGS</h1>
        </div>
        <div className='bag-container'>
            <img src="/sweater-removebg-preview.png"  className="bag-image" alt="image"/>
            <h1 className='text-bag'>CLOTHING</h1>
        </div>
        <div className='bag-container'>
            <img src="/shoes-removebg-preview.png"  className="shoe-image" alt="image"/>
            <h1 className='text-bag'>SHOES</h1>
        </div>
        <div className='bag-container'>
            <img src="/watch-removebg-preview.png"  className="bag-image" alt="image"/>
            <h1 className='text-bag'>WATCH</h1>
        </div>
        </div>
       
    </div>
)
}
export default Categories;