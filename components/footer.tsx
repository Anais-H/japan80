import styles from '../styles/footer.module.scss';

export default function Footer() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.flexContainer}>
                    <div>
                        On est ici pour partager et échanger, bref grandir ensemble...
                    </div>

                    <div>
                        <h4>Info</h4>
                        <ul>
                            <li><a href="#">Un lien</a></li>
                            <li><a href="#">Live TV</a></li>
                            <li><a href="#">About Japan80</a></li>
                        </ul>
                    </div>
                </div>


                <hr />


                <div className={styles.flexContainer}>
                    <div>
                        Copyright © 2022. Company Name. All rights reserved.
                    </div>

                    <div>
                        <div><a href="#">Terms {'&'} Conditions</a></div>
                        <div><a href="#">Privacy Policy</a></div>
                        <div><a href="#">Cookies</a></div>
                    </div>

                </div>
            </div>
        </div >
    )
}