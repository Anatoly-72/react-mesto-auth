import imgOk from '../images/imgOk.png';
import imgError from '../images/imgError.png';

function InfoTooltip({ isOpen, onClose, isConfirmed }) {
  return (
    <div className={`popup ${isOpen ? 'popup_active' : ''}`}>
      <div className="popup__content">
        <button type="button" className="popup__close" onClick={onClose} />
        <img
          className="popup__img"
          src={isConfirmed ? confirmed : refused}
          alt={
            isConfirmed ? 'Регистрация прошла успешно' : 'Регистрация не прошла'
          }
        />
        <h3 className="popup__title-info">
          {isConfirmed
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
