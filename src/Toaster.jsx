import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = (message, type) => {
  toast[type](message, { position: toast.POSITION.TOP_CENTER });
};

export default showToast;
