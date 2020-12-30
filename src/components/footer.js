import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

const Footer = () => {


	return (
		<footer className="footer-links" id="footer">

			{/* <div > */}
				<a href="mailto: ayzik55@gmail.com">
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
				<a href="https://www.linkedin.com/in/mantyubetov/" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a href="https://github.com/Iskak83" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href="https://twitter.com/iskak" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faTwitter} />
				</a>
			{/* </div> */}
		</footer>
	);
};

export default Footer;