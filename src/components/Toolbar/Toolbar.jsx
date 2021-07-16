import './Toolbar.css'

function Toolbar({filters, selected, onSelectFilter}) {
    return  (
        <div className='Toolbar'>
            {filters.map((filter, id) => {
                let selectedFilter = 'Toolbar-filter';
                if(selected === filter) {
                    selectedFilter = 'Toolbar-filter Toolbar-selected-filter'
                }
                return <button className={selectedFilter} onClick={onSelectFilter} key={id}>{filter}</button>
            })}
        </div>
    )
}

export default Toolbar


