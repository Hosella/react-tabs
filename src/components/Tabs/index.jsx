import './style.scss'
import cn from 'classnames';

export const Tabs = ({ count, changeTab, selectedTab}) => {
  const arrTabs = Array(count).fill(null);

  return (
    <div className='Tabs'>
      {arrTabs.map((_, ind) => (
        <span 
          onClick={() => changeTab(ind + 1)}
          className={`Tabs__tab ${cn({active: ind + 1 === selectedTab})}`}
          key={ind}
        >
          {`Tab ${ind + 1}`}
        </span>
      ))}
      
    </div>
    
  );
}