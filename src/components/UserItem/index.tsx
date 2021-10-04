import { memo, MouseEvent } from 'react';
import { useHistory } from 'react-router';

import { User } from '../../zustand/types';

export default memo(function UserItm({ email, name, phone, id }: User) {
  const history = useHistory();
  const handleClick = (event: MouseEvent) => {
    //Cambio de ruta
    history.push(`/user-detail/${id}`);
  };
  return (
    <div
      style={{
        boxSizing: 'border-box',
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
        borderRadius: '10px',
        boxShadow: '1px 1px 10px black',
        padding: 10,
      }}
    >
      <h2>{name}</h2>
      <label>{phone}</label>
      <label>{email}</label>
      <button style={{ width: 150, marginTop: 10 }} onClick={handleClick}>
        {' '}
        Ver detalle
      </button>
    </div>
  );
});
