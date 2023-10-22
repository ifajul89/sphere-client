import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {

    const { photo, name, brandName, type, price, description, rating } = product;

    function capitalizeFirstLetter(inputString) {
        return inputString.charAt(0).toUpperCase() + inputString.slice(1);
    }

    const capitalizedBrandName = capitalizeFirstLetter(`${brandName}`);


    return (
        <div className='bg-black rounded-[22px] flex flex-col'>
            <div className='bg-white flex justify-center items-center rounded-[20px] p-12 relative flex-1'>
                <img className='w-full' src={photo} alt="" />
            </div>
            <div className='p-3 text-white space-y-2'>
                <h3 className='text-lg font-semibold'>{name}</h3>
                <h3 className='font-bold'>{capitalizedBrandName}</h3>
                <h3 className='font-medium text-sm bg-white bg-opacity-50 text-black inline-block px-1 py-[1px] rounded-full'>{type}</h3>
                <h3 className='text-lg font-semibold'>Price: <span className='font-light'>{price}</span></h3>
                <div className='flex justify-end gap-1'>
                    <Link to='/details/:id' className='btn btn-sm rounded-full'>Details</Link>
                    <button className='btn btn-sm rounded-full'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
}

export default Product;