import React from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ payment }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-all duration-300">
          <div className="w-24  mb-4">
            <img 
              className="" 
              src="https://i.ibb.co.com/7GhCYsf/icons8-good-pincode-80.png" 
              alt="Success" 
            />
          </div>
          <h3 className="font-bold text-2xl text-purple-600">Payment Successful!</h3>
          <p className="py-2 text-gray-700">Thank you for your purchase!</p>
          <p className="font-bold text-lg text-purple-800">Total: {payment}</p>
          <div className="modal-action mt-4">
            <button 
              onClick={handleClose} 
              className="btn w-full bg-purple-600 text-white hover:bg-purple-700 transition duration-200 rounded-lg shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}



export default Modal;
