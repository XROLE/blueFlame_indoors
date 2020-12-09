import { toast } from 'react-toastify';
import {css} from 'glamor';

export const toastMessage = (message, status, autoCloseTime) => {
  return toast(
    message,
      {
        bodyClassName: css({
            textAlign: 'center',
            borderRadius: '5px',
            color: 'black',
        }),
        autoClose: autoCloseTime,
        position: `${ (status=='success') ? toast.POSITION.TOP_CENTER : toast.POSITION.TOP_RIGHT }`,
      },
  );
};







