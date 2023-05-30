import React from "react";
import styles from "./Footer.module.css";
import { SiGmail, SiTwitter, SiInstagram } from "react-icons/si";

const Footer = () => (
	<footer>
		<div className={styles.mainContainer}>
			<div className={styles.appInfo}>
				<div className={styles.appName}>
					<span className={styles.appInitial}>J</span>obPortalX
				</div>
			</div>
			<div className={styles.container}>
				<div className={styles.usefulLinks}>
				<div className={styles.footerTitle}>Enlaces Útiles</div>
					<div className={styles.lists}>
						<ul>
							<li>
								<a href='/registro'>
									Inicia Sesion
								</a>
							</li>
							<li>
								<a href="/aboutUs">
								Sobre nosotros	
								</a>
							</li>
							<li>
								<a href='/TermsAndConditions'>
									Terminos y condiciones
								</a>
							</li>
						</ul>
					</div>
				</div>
					<div className={styles.contact}>
					<div className={styles.footerTitle}>Contactos</div>
						<div className={styles.lists}>
							<ul>
								<li>
									<a href='https://www.instagram.com/jobportalcompany'>
										<SiInstagram /> Instagram
									</a>
								</li>
								<li>
									<a href='jobportalxcompany@gmail.com'>
										<SiGmail /> Gmail
									</a>
								</li>
								<li>
									<a href='https://twitter.com/jobportalx'>
										<SiTwitter /> Twitter
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.helpSec}>
					<div className={styles.footerTitle}>Ayuda</div>
					<div className={styles.lists}>
						<ul>
							<li>
								<a href="/help">
								Ayuda	
								</a>
							</li>
							<li>
								<a href="/FAQ's">
								Preguntas Frecuentes	
								</a>
							</li>
							<li>
								<a href='jobportalxcompany@gmail.com'>
									Reporta errores
								</a>
							</li>
						</ul>
					</div>	
				</div>
			</div>
			<div className={styles.crCon}>Copyright &copy; 2023</div>
		</div>
	</footer>
);

export default Footer;