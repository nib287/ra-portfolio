import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import './Portfolio.css';

export default class Portfolio extends React.Component {
     constructor(props) {
      super(props);
      this.filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
      this.selected = 'All';
      this.projects = props.projects;
      this.state = {projects: props.projects};
    }

    render() {
        const onSelectFilter = (filter) => {
            this.selected = filter.target.innerText;
            if(this.selected === 'All') {
                return this.setState({projects: this.projects});
            }
            
            let filteredProjects = this.projects.filter(({category}) => {
               return category === this.selected;
            });
            
            this.setState({projects: filteredProjects});  
        }

        return (
            <div className='Portfolio'>
                {this.state.count}
                <Toolbar
                    filters={this.filters}
                    selected={this.selected}
                    onSelectFilter={(filter) => onSelectFilter(filter)}
                />
                <ProjectList 
                    projects={this.state.projects}
                />             
            </div>
        );
    }
}
