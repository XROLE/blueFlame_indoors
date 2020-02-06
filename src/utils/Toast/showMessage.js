import { toast } from 'react-toastify';
import {css} from 'glamor';

export const toastMessage = (errorMessage, status, autoCloseTime) => {
  return toast(
    errorMessage,
      {
        bodyClassName: css({
            textAlign: 'center',
            borderRadius: '5px',
            color: 'white'
        }),
        autoClose: autoCloseTime,
        position: `${ (status=='success') ? toast.POSITION.TOP_CENTER : toast.POSITION.TOP_RIGHT }`,
      },
  );
};







