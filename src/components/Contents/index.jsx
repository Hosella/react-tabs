import './style.scss'

export const Contents = ({ selectedTab }) => {
  return (
    <div className='Contents'>
      <span className='Contents__title'>{selectedTab.title}</span>
      <span>{selectedTab.text}</span>
    </div>
  );
}