import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './education.scss';

const Education = () => {
	return (
		<div className="timeline-section-container" id="education">
			<div className="paragraph-title-edu">
				<img src={require('../images/education.jpg')} className="paragraph-title-edu" alt=''/>
			</div>
			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={styles_.card}
					contentArrowStyle={styles_.cardArrow}
					date="March 2020 - July 2020"
					icon={<img src={require('../images/fsa.png')} className="image-icon" alt="" />}
          
				>
					<h3 className="vertical-timeline-element-title">Fullstack Academy of Code</h3>
					<h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
					<p>
						Certificate in Full Stack Web Development, <strong>Software Engineering</strong>
					</p>
				</VerticalTimelineElement>
		
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={styles_.card}
					contentArrowStyle={styles_.cardArrow}
					date="August 2017 - July 2020"
					icon={<img src={require('../images/trader.png')} className="image-icon" alt="" />}
				>
				
							<h3 className="vertical-timeline-element-title">Acme Smoked Fish Corp.</h3>
							<h4 className="vertical-timeline-element-subtitle">Brooklyn, NY</h4>
							<p>Plant Engineer | Maintenance Manager</p>
							<a
								href="https://drive.google.com/file/d/11gUI3s0iBRkWkc5GZKaUOcLbCCHtwNtc/view?usp=sharing"
								target="_blank"
								rel="noreferrer"
							>
								Letter of Recommendation
							</a>
					
				</VerticalTimelineElement>
				
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={styles_.card}
					contentArrowStyle={styles_.cardArrow}
					date="November 2015 - July 2017"
					icon={<img src={require('../images/krsu.png')} className="image-icon" alt="" />}
				>
					<h3 className="vertical-timeline-element-title">Emtec Consulting Engineers</h3>
					<h4 className="vertical-timeline-element-subtitle">Ronkonkoma, NY</h4>
					<p>Mechanical Inspector</p>
				</VerticalTimelineElement>
				
				
				<VerticalTimelineElement
					icon={<img src={require('../images/KEU.png')} className="image-icon" alt="" />}
					iconStyle={styles_.icon}
				/>
			</VerticalTimeline>
		</div>
	);
};

export default Education

const styles_ = {
	card: {
		background: '#d9d9d9',
		fontFamily: 'Saira',
		borderRadius: '20px'
	},
	cardArrow: {
		borderRight: '7px solid  #d9d9d9'
	},
	icon: {
		background: '#fff'
	}
};

