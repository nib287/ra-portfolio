import './Toolbar.css'
import cn from 'classnames'

function Toolbar({filters, selected, onSelectFilter}) {
    console.log(cn);
    return  (
        <div className='Toolbar'>
            {filters.map((filter, id) => {
                let selectedFilter = cn('Toolbar-filter', {'Toolbar-selected-filter': selected === filter});
                return <button className={selectedFilter} onClick={onSelectFilter} key={id}>{filter}</button>
            })}
        </div>
    )
}

export default Toolbar


