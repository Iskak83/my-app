import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './education.scss';
const {education} = require('./data')

const Education = () => {

	
	return (
		<div  id="education">
			<div className="paragraph-title-edu">
				<img src={require('../images/education.jpg')} className="paragraph-title-edu" alt=''/>
			</div>
			<VerticalTimeline className="timeline-container">
			
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={styles['card']}
					contentArrowStyle={styles['card-arrow']}
					date={education.part1.date}
					icon={<img src={require('../images/fsa.jpg')} className="image-icon" alt="" />}
          
				>
					<h3 className="vertical-timeline-element-title">{education.part1.name}</h3>
					<h4 className="vertical-timeline-element-subtitle">{education.part1.address}</h4>
					<p>
						{education.part1.degree}
					</p>
				</VerticalTimelineElement>
		
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={styles['card']}
					contentArrowStyle={styles['card-arrow']}
					date={education.part2.date}
					icon={<img src={require('../images/krsu.jpg')} className="image-icon" alt="" />}
          
				>
					<h3 className="vertical-timeline-element-title">{education.part2.name}</h3>
					<h4 className="vertical-timeline-element-subtitle">{education.part2.address}</h4>
					<p>
						{education.part2.degree}
					</p>
						
					
				</VerticalTimelineElement>
				
				<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={styles['card']}
				contentArrowStyle={styles['card-arrow']}
				date={education.part3.date}
				icon={<img src={require('../images/knu.jpg')} className="image-icon" alt="" />}
	  
			>
				<h3 className="vertical-timeline-element-title">{education.part3.name}</h3>
				<h4 className="vertical-timeline-element-subtitle">{education.part3.address}</h4>
				<p>
					{education.part3.degree}
				</p>
				</VerticalTimelineElement>
				
				
				<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={styles['card']}
				contentArrowStyle={styles['card-arrow']}
				date={education.part4.date}
				icon={<img src={require('../images/KEU.jpg')} className="image-icon" alt="" />}
	  
			>
				<h3 className="vertical-timeline-element-title">{education.part4.name}</h3>
				<h4 className="vertical-timeline-element-subtitle">{education.part4.address}</h4>
				<p>
					{education.part4.degree}
				</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default Education

const styles = {
	'card': {
		background: 'rgb(247, 240, 240)',
		fontFamily: 'monospace',
		borderRadius: '18px'
	},
	'card-arrow': {
		borderRight: '1px solid  #rgb(247, 240, 240)'
	},
	'icon': {
		background: '#fff'
	}
};

