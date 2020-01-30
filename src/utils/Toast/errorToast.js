import { toast } from 'react-toastify';
import {css} from 'glamor';

export const toastError = (errorMessage) => {
  return toast(
    errorMessage,
      {
        bodyClassName: css({
            textAlign: 'center',
            borderRadius: '5px',
            color: 'white'
        }),
        position: toast.POSITION.TOP_RIGHT,
      },
  );
};







