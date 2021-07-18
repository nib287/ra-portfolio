import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import './Portfolio.css';

const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];

export default class Portfolio extends React.Component {
     constructor(props) {
      super(props);
      this.state = {selected: 'All'};
    }

    render() {
        const filteredProjects = this.props.projects.filter(({category}) => {
            return category === this.state.selected || this.state.selected === 'All';
        });
 
        return (
            <div className='Portfolio'>
                <Toolbar
                    filters={filters}
                    selected={this.state.selected}
                    onSelectFilter={(filter) => this.setState({selected: filter.target.innerText})}
                />
                <ProjectList 
                    projects={filteredProjects}
                />             
            </div>
        );
    }
}
